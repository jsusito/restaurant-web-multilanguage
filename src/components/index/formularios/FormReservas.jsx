import emailJS from "@emailjs/browser";
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Constants } from "../../../utils/Constants";
import { GetTomorrowDate } from "../GetTomorrowDate";
import { UserContext } from "../authentication/UserSesion";
import { ConfirmSendForm } from "./ConfirmSendForm";
import { FailSendForm } from "./FailSendForm";
import { LabelInput } from "./LabelInput";
import { SelectForm } from "./SelectForm";
import { ReservationTable } from "./ReservationTable";

const constants = new Constants();
const optionPersonas= constants.PERSONS_BY_TABLE;
const apiGetUser = constants.API_USER;
const apiReservationGuest = constants.API_RESERVATION + "guest";

const labelFor =[
        {
           id:0,
           text: "nombre",
           type: "text",
           placeholder:"Mayor de 4 caractéres. Solo Letras",
           pattern : /^[a-zA-Z ]{5,}$/
               
        },
        {
            id:1,
            text: "apellido",
            type: "text",
            placeholder:"Tiene que ser mayor de 3 letras",
            pattern : /^[a-zA-Z ]{3,}$/     
            
        },
        {
            id:2,
            text: "telefono",
            type: "text",
            placeholder:"numero de 9 cifras o mayor",
            pattern : /^[?+?.0-9 ]{9,}$/   
         },
         {
            id:3,
            text:"fecha",
            type:"date",
            pattern : /[*]*/

            
        },
        {
            id:4,
            text:"email",
            type:"email",
            placeholder:"Introduzca un email válido",
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
        },
        
        
];

export function FormReservas(){
        const [buttonDisable, setButtonDisable] = useState(true);
        const [cursorBusy, setCursorBusy] = useState(false);
        
        //Contexto
        let context = useContext(UserContext);
        const authenticate = context.authenticate;
        const token = context.token
        const username = context.nameSesion;

        //input
        const [nombre, setNombre] = useState("");        
        const [apellido, setApellido] = useState("");        
        const [email, setEmail] = useState("");
        const [telefono, setTelefono] = useState("");
        const [personas, setPersonas] = useState("");
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
        
        //select
        const [mesa, setMesa] = useState();
        const [hora, setHora] = useState();
                
        const [radioButtonMesa, setRadioButtonMesa] = useState("")

        const [reservaCompleta, setReservaCompleta] = useState(false);
        const [falloReserva, setFalloReserva] = useState(false);
        const form = useRef();
        
        //datos comunes para invitados y usuarios registrados
        const dataForm = {
            "numberPeople": personas,
            "dinnerTable": mesa, 
            "lunchHour": hora,
            "dateReservations": date
        }

        //Manda el email y guardamos en base de datos la reserva. Verifica el formulario
        const sendReservation = async(e) => {
            
            setCursorBusy("wait")
            
            e.preventDefault();
                       
            dataForm.userUsername = nombre;
            
            let apiReservation = constants.API + "reservation";
            
            const saveData = () => {
                
                return new Promise((resolve, reject) => {
                  fetch(apiReservation,{
                    method:"POST",
                    headers:{
                      "Authorization": `Bearer ${token}`,    
                      'Content-type': 'application/json; charset=UTF-8'    
                    },
                    body: JSON.stringify(dataForm)
                  })
                  .then(response => resolve(response.status))
                  .catch(error => reject(error));
                });
              };

              //Usuarios que no están registrados
              const saveDataGuest = () => {
               
                dataForm.username = nombre;
                dataForm.surname = apellido;
                dataForm.telephone = telefono;

                return new Promise((resolve, reject) => {
                  fetch(apiReservationGuest,{
                    method:"POST",
                    headers:{
                      'Content-type': 'application/json; charset=UTF-8'    
                    },
                    body: JSON.stringify(dataForm)
                  })
                  .then(response => resolve(response.status))
                  .catch(error => reject(error));
                });
              };  
              
            const sendEmail = () => {
                
                return new Promise((resolve, reject) => {
                   emailJS.sendForm('service_t9kpq9j', 'template_cztccwg', form.current, 'UohhMdM_4_xf3jYXZ')
                  //emailJS.sendForm('service_t9k29j', 'template_cztcc2g', form.current, 'UohhMd5_4_xf3jYXZ')
                    .then(response => {
                        setReservaCompleta(true);
                        setButtonDisable(true);
                        resolve(response.status);
                    })
                    .catch(error => {
                        console.log(error);
                        setButtonDisable(true);
                        setFalloReserva(true);
                        reject(error);
                    });
                });
            };
              
            if(authenticate){
                await Promise.all([saveData(), sendEmail()])
                .then(response => response.forEach(status => console.log(status)))
                .catch(error => console.error(error));
            }
            else{
                await Promise.all([saveDataGuest(), sendEmail()])
                .then(response => response.forEach(status => console.log(status)))
                .catch(error => console.error(error));
            }
            setCursorBusy("auto");

        };  
          
        //Se encarga de desconponer el valor que viene de la reserva de mesa de los radio button en la mesa y la hora.
        //LLega en formato 120:00, siendo 1 el numero de mesa y el resto la hora, y se lo asignamos a las otras variables
        useEffect(()=>{
            setMesa(radioButtonMesa.charAt(0));
            setHora(radioButtonMesa.substring(1,6))
        },[radioButtonMesa]);
        //Valida el formulario sumamos uno por cada input que se cumple. Almuerzo y cena valen por dos 
        useEffect(()=>{
            let count = 1;
            let disable = true;
            
            if(nombre.length>4) 
                count++;
            
            if(apellido>3) 
                count++;
                        
            if(telefono.length>=9 && Number(telefono))
                count++;
            
            if(Number(telefono))
                count++;
            
            if(mesa && mesa!=="0")
                count++;
            
            if(personas && personas!=="0")
                count++    
            
            if(hora)
                count++;    
            
            if(count===7)
                disable=false;    
            setButtonDisable(disable);

        },[nombre, apellido, telefono, personas, email, mesa, hora])
             
        let apiUser = apiGetUser + username;
        
        //Si está el usuario autentificado rellena las casillas de los datos de la reserva
        useEffect(()=>{
          if(authenticate)  
            fetch(apiUser, {
                headers:{
                    Authorization: `Bearer ${token}` 
                }})
            .then(response => response.json())
            .then(body=>{
                setNombre(body['username']);
                setApellido(body['surname'])
                setEmail(body['email'])
                setTelefono(body['telephone'])
            })
               
        },[])

        useEffect(() => {
            document.body.style.cursor = cursorBusy; 
          }, [cursorBusy]);
        
        return(
        
        <div className="container form-reservation" >    
            <div className="row justify-content-center">    
                <div className="col-auto">            
                    <form className="g-3 needs-validation"  ref={form} onSubmit={sendReservation}>
                        <div className="row  justify-content-center form-reserva">
                            <div className="col-12">
                                <h6 className="form-reserva text-center mt-2">Haz ahora</h6>
                            </div>
                            <div className="col-12 text-center mb-4">
                                <h2>tu reserva con nosotros</h2>
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
                                                                                                    
                        {/* Renderizamos todos los Select */}

                            <div className="col-md-4 mx-5 mb-5">
                                <SelectForm tittle="Personas" setValueState={setPersonas} name={"personas"}
                                    options={optionPersonas}></SelectForm>
                            </div>
                            <hr className="text-primary "/>
                            
                            <div className="col-sm-12 d-flex justify-content-start my-4">
                            
                                <div className="d-flex align-items-center  me-5">
                                    <div className="legend-sq bg-warning me-2"></div>
                                    Reservado
                                </div>
                                <div className="d-flex align-items-center">
                                    <div className="legend-sq bg-primary me-2"></div>
                                    Libre
                                </div>
                            </div>

                            <div className="col-12">
                                <ReservationTable setValueState={setRadioButtonMesa} date={date}/>
                            </div>
                            
                                        
                            
                            <div className="col-12  mx-2 mb-5 d-flex justify-content-center align-items-center">
                                {!reservaCompleta &&
                                    <button  type="submit" className="btn btn-warning w-25 my-3 mt-5" disabled={buttonDisable}>Ingresar</button>
                                }
                            </div> 
                                   
                        
                        {reservaCompleta && <ConfirmSendForm textInfo={"Se ha procesado correctamente"} textConfirm={"Su reserva está confirmada"}/>}
                        {falloReserva && <FailSendForm/>}
                    </div>            
                </form>
            </div>
        </div>
    </div>
 );
}