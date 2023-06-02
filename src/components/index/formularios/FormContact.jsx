import emailJS from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { ConfirmSendForm } from "../formularios/ConfirmSendForm";
import { FailSendForm } from "./FailSendForm";
import { LabelInput } from "./LabelInput";

export function FormContact(){
    
    const [nombre, setNombre] = useState("");        
    const [apellido, setApellido] = useState("");        
    const [email, setEmail] = useState("");
    const [formSend, setFormSend] = useState(false);
    const [fail, setFail] = useState(false);
    const [valueTextArea, setValueTextArea] = useState("")
    const [buttonDisable, setButtonDisable] = useState(true);
    const form = useRef();

    const labelFor =[
        {
           id:0,
           text: "nombre",
           type: "text",
           placeholder:"Mayor de cuatro caracteres. Solo letras",
           value:nombre,
           setValue:setNombre,
           pattern : /^[a-zA-Z ]{4,}$/
               
        },
        {
            id:1,
            text: "apellido",
            type: "text",
            placeholder:"Mayor de cuatro caracteres. Solo letras",     
            value:apellido,
            pattern : /^[a-zA-Z ]{4,}$/,
            setValue:setApellido
        },
        {
            id:2,
            text: "email",
            type: "email",
            placeholder:"Email válido",
            value:email,
            setValue:setEmail,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/   
        }
    ]

    useEffect(()=>{
        let count = 1;
        let disable = true;
        
        if(nombre.length>3) 
            count++;
        
        if(apellido>3) 
            count++;
        
        if(email.includes("@"))
            count++;            
               
        if(valueTextArea.length > 10)
            count++;

        if(count===4)
            disable=false;    
        setButtonDisable(disable);

    },[nombre, apellido,email,valueTextArea])
    
    
    const sendEmail = (e) => {
        e.preventDefault();
        emailJS.sendForm('service_t9kpq9j', 'template_guhw7pk', form.current, 'UohhMdM_4_xf3jYXZ')
        
        .then(()=>{
            setFormSend(true);
            setButtonDisable(true);    
        })
        .catch(error =>{
            setButtonDisable(true);
            setFail(true);
        });
        };
    
        return(
        <div className="container">    
            <div className="row justify-content-center">    
                <div className="col-auto">    
                    <form className="mb-3" ref={form} onSubmit={sendEmail}>
                        <div className="row pt-4 justify-content-center" >
                            <div className="col-12">
                                <h6 className="form-reserva text-center">Contacta con</h6>
                            </div>
                            <div className="col-12 text-center mb-4">
                                <h2>Casandra Restaurantes</h2>
                            </div> 
                        
                        {
                            //Renderizamos todos los label con input
                            
                            labelFor.map(element =>(
                                <div className="col-md-3 mx-2 mb-5  justify-content-center" key={element.id}>
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
                            <div className="col-md-9 mb-5  justify-content-center">
                                <label className="form-label" htmlFor="info">Mensaje</label>
                                <textarea 
                                    className="form-control" 
                                    id="info" 
                                    name="info" 
                                    value={valueTextArea}
                                    onChange={event =>(setValueTextArea(event.target.value))}>
                                </textarea>
                            <div className="text-primary">
                                Escribe mínimo una frase
                            </div>
                            </div>
                            
                            <div className="col-md-12 mb-5 d-flex justify-content-center align-items-center">
                                <button  type="submit" className="btn btn-warning w-50" disabled={buttonDisable}>Enviar</button>
                            </div>
                            
                        {formSend && <ConfirmSendForm textInfo={"Nos pondremos en contacto con usted en breve"} textConfirm={"Se ha enviado su peticion"}/>}
                        {fail && <FailSendForm/>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}