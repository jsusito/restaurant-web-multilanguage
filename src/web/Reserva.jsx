import  imgRestaurant1 from "./../images/restaurante01.jpg";
import  iconTel from "./../images/icon-telefono.png";
import  iconReserva from "./../images/reserva.png";
import IconEnlace from "../components/index/IconEnlace";
import iconComida from "./../images/icon-comida.png";
import MapsDireccion from "../components/index/MapsDireccion";
import { useState } from "react";
import { FormReservas } from "../components/index/formularios/FormReservas";
import { FormContact } from "../components/index/formularios/FormContact";

function Reserva(){
    
    const [showPagContact, setShowPagContact] = useState(false);
    const [showPagReserva, setShowPagReserva] = useState(false);

    
    //Muestra o el formulario de contacto o el formulario de reserva
    const onClickReservaHandle = () =>{
        setShowPagContact(()=>false);
        setShowPagReserva(()=>!showPagReserva)
    }
    
    const onClickContactHandle = () =>{
        setShowPagContact(()=>!showPagContact);
        setShowPagReserva(()=>false)
    }

    return (
        <div className="container-fluid">        
            
            <div className="row">
                <img src={imgRestaurant1} alt="imagen Restaurante 1"></img>
            </div>
             
            <div className="row mt-5 d-flex ">
                <div className="col-md-5 d-flex align-items-center flex-column justify-content-center">
                    <IconEnlace icon={iconTel} title="realice sus reservas" description="por telefono" url='tel:+34 1234567891'/>
                    <IconEnlace icon={iconComida} title="realice sus reservas" description="on line"/>
                </div>
                <div className="col-md-5 d-flex align-items-center flex-column justify-content-center">
                    <IconEnlace icon={iconTel} description="(+34) 1234.567.891."/>    
                    <IconEnlace icon={iconReserva} 
                        buttonClass="btn-form-contact" 
                        showPagContact = {showPagContact}
                        showPagReserva = {showPagReserva}
                        onClickReserva = {onClickReservaHandle} 
                        onClickContact = {onClickContactHandle}/>
                </div>
            </div>
            <div style={{width:"70%"}} className="container d-flex">
             { !showPagReserva && !showPagContact && <MapsDireccion></MapsDireccion>}
             
             {  showPagReserva && !showPagContact &&<FormReservas></FormReservas>}
             {  showPagContact && !showPagReserva && <FormContact></FormContact>}
             </div>
        </div>

    );


}

export default Reserva;