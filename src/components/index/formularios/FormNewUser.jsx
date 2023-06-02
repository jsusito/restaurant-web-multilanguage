import React, { useContext, useEffect, useRef, useState } from 'react';
import { Constants } from "../../../utils/Constants";
import { GetTomorrowDate } from "../GetTomorrowDate";
import { UserContext } from "../authentication/UserSesion";
import { ConfirmSendForm } from "./ConfirmSendForm";
import { FailSendForm } from "./FailSendForm";
import { LabelInput } from "./LabelInput";

const constants = new Constants();

const apiNewUser = constants.API_NEW_USER;

const patterPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/;
const patterNombre = /^[a-zA-Z ]{5,}$/;
const patterApellido = /^[a-zA-Z ]{3,}$/;
const patterEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const patterTelefono = /^[?+?.0-9 ]{9,}$/;

const labelFor =[
        {
           id:0,
           text: "nombre",
           type: "text",
           placeholder:"Mayor de 4 caractéres. Solo Letras",
           pattern : patterNombre
        },
        {
            id:1,
            text: "apellido",
            type: "text",
            placeholder:"Tiene que ser mayor de 3 letras",
            pattern : patterApellido
        },
        
        {
            id:2,
            text: "telefono",
            type: "text",
            placeholder:"numero de 9 cifras o mayor",
            pattern : patterTelefono
         },
         {
            id:3,
            text:"fecha de nacimiento",
            type:"date",
            pattern : /[*]*/

        },
        {
            id:4,
            text:"email",
            type:"email",
            placeholder:"Introduzca un email válido",
            pattern: patterEmail
        },

        {
            id:5,
            text: "password",
            type: "password",
            placeholder:"Debe tener al menos 6 caracteres, mayuscula, minuscula, numero y caracter especial",
            pattern : patterPassword
            
        },
        
        
];

export function FormNewUser(){
        const [buttonDisable, setButtonDisable] = useState(true);
        const [cursorBusy, setCursorBusy] = useState(false);
        
        //Contexto
        let context = useContext(UserContext);
        const authenticate = context.authenticate;
        const token = context.token
        
        //input
        const [nombre, setNombre] = useState("");        
        const [apellido, setApellido] = useState("");        
        const [password, setPassword] = useState("");
        const [email, setEmail] = useState("");
        const [telefono, setTelefono] = useState("");
        const [date, setDate] = useState(GetTomorrowDate());
        
        labelFor[0].value = nombre;
        labelFor[0].setValue = setNombre;

        labelFor[1].value = apellido;
        labelFor[1].setValue = setApellido;

        labelFor[2].value = telefono;
        labelFor[2].setValue = setTelefono;

        labelFor[3].value = date;
        labelFor[3].setValue = setDate;
        labelFor[3].min = GetTomorrowDate();

        labelFor[4].value = email;
        labelFor[4].setValue = setEmail;
        
        labelFor[5].value = password;
        labelFor[5].setValue = setPassword;
         
       
        const [userRegister , setUserRegister] = useState(false);
        const [falloRegistro, setFalloRegistro] = useState(false);
        const form = useRef();
        
        //datos comunes para invitados y usuarios registrados
        const dataForm = {
            "username": email,
            "surname": apellido,
            "password": password,
            "telephone": telefono,
            "name":nombre,
            "birtDate": date,
            "email": email
        }

        //Manda el email y guardamos en base de datos la reserva. Verifica el formulario
        const sendRegNewUser = async(e) => {
            
            setCursorBusy("wait")
            
            e.preventDefault();
                       
            if(authenticate){
                await fetch(apiNewUser,{
                    method:"POST",
                    headers:{
                        "Authorization": `Bearer ${token}`,    
                        'Content-type': 'application/json; charset=UTF-8'},
                    body: JSON.stringify(dataForm)})
                .then((response) => response)
                .then((body) => {
                    debugger;
                    if(body.status === 200)
                        setUserRegister(true)
                    else
                        setFalloRegistro(true)
                })
                .catch((error) => console.log(error));
            
                       
            setCursorBusy("auto");

        };  
     }      
        
        //Valida el formulario sumamos uno por cada input que se cumple. 
        useEffect(()=>{
            let count = 1;
            let disable = true;
            
            if(nombre.length>4) 
                count++;
            
            if(apellido>3) 
                count++;
                        
            if(telefono.length>=9 && Number(telefono))
                count++;
            
           
            
            if(patterPassword.test(password))
                count++    
                          
            if(count===4)
                disable=false;    
            
            setButtonDisable(disable);

        },[nombre, apellido, telefono, password, email])
             
        
       
        useEffect(() => {
            document.body.style.cursor = cursorBusy; 
          }, [cursorBusy]);
        
        return(
        
        <div className="container form-reservation" >    
            <div className="row justify-content-center">    
                <div className="col-auto">            
                    <form className="g-3 needs-validation"  ref={form} onSubmit={sendRegNewUser}>
                        <div className="row  justify-content-center form-reserva">
                            
                            <div className="col-12 text-center mb-4">
                                <h2>Registrar nuevo Usuario</h2>
                            </div> 
                        
                        {
                            //Renderizamos todos los label con input
                            
                            labelFor.map(element =>(
                                <div className="col-md-4 mx-5 mb-5  justify-content-start" key={element.id}>
                                <LabelInput 
                                    key={element.id} 
                                    value={element.text} 
                                    type={element.type} 
                                    min ={element.min}
                                    max ={element.max} 
                                    isDisable={element.isDisable}
                                    placeholder = {element.placeholder} 
                                    currentValue={element.value}
                                    pattern={element.pattern} 
                                    onHandleChangue={element.setValue}
                                />
                                </div>  
                            ))}

                        <div className="col-md-12 mb-2 d-flex justify-content-center align-items-center">
                                <button  type="submit" className="btn btn-warning w-50" disabled={buttonDisable}>Enviar</button>
                        </div>                                                                            
                                                           
                        
                        {userRegister && <ConfirmSendForm textInfo={"Usuario registrado con éxito"}/>}
                        {falloRegistro && <FailSendForm/>}
                    </div>            
                </form>
            </div>
        </div>
    </div>
 );
}