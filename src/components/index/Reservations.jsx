import { useContext, useEffect, useState } from "react";
import { UserContext } from "./authentication/UserSesion";
import { Constants } from "../../utils/Constants";
import { Alert } from "./mesages/Alert";
import { ModalInfo } from "./mesages/ModalInfo";
import { format } from "date-fns";
import { GetTomorrowDate } from "./GetTomorrowDate";
import { LabelInput } from "./formularios/LabelInput";
import { addDays } from "date-fns";

export function Reservations() {
  
  const context = useContext(UserContext);
  const [dataTable, setDataTable] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [cursorState, setCursorState] = useState('auto');
  const [currentDate,setCurrentDate] = useState(GetTomorrowDate())
  
  const APIS = new Constants();
  const currentAuthoritis = context.authorities.current;

  let API_RESERVATION;
  
  //Si autoridad es contable puede ver las reservas del día
  
  if(currentAuthoritis.includes("CONTABLE")){
      API_RESERVATION = APIS.API_RESERVATION + `date/${currentDate}`;
  }
  else
    API_RESERVATION = APIS.API_RESERVATION + context.nameSesion; 

  //Borra la fila de la tabla y de la base de datos
  const cancelReservation = async (index, idReservation) =>{
    setCursorState('wait'); 
    await fetch(APIS.API_RESERVATION + idReservation, {
      method:"DELETE",
      headers: {
        authorization: `Bearer ${context.token}`,
      },
    })
    .then(()=>
      setDataTable(prevState => {
        let aux = [...prevState]; //creamos una copia del estado anterior
        aux.splice(index, 1);
        return aux; //devolvemos el estado modificado
    }))
    .catch(error => console.log(error));

    setCursorState('auto');
     
  }
  
  //Carga inicial de las reservas según su usuario
  useEffect(() => {
    fetch(API_RESERVATION, {
      headers: {
        authorization: `Bearer ${context.token}`,
      },
    })
      .then((response) => response.json())
      .then((registers) => {
          const reservations = registers.map((reserva) => ({
          id: reserva.id,
          user: reserva.userUsername,
          tel: reserva.userTelephone,
          dateReservations: reserva.dateReservations,
          dinnerTable: reserva.dinnerTable,
          lunchHour: reserva.lunchHour,
          numberPeople: reserva.numberPeople,
        }));
        setDataTable(reservations);
      })
      .catch((error) => {
        console.error(error)
        setShowAlert(true);
        
      });
  }, [currentDate]);

  useEffect(() => {
    document.body.style.cursor = cursorState; 
  }, [cursorState]); 

  return (
    <div className="container">
      <div className="row justify-content-center mb-4" >
                            
      <div className="col-12 d-flex justify-content-center">
          <h3 className="display-6 pt-3 "> tus reservas </h3>
      </div>
      { currentAuthoritis.includes("CONTABLE") &&
        <div className="col-md-4 my-2  d-flex justify-content-start align-items-center">
          <button 
            type="button" 
            className="btn btn-outline-primary me-2" 
            onClick={()=>{
              let a = addDays(new Date(currentDate),-1)
              setCurrentDate(format(a,'yyyy-MM-dd'))
            }}
            > <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"></path> </svg>
          </button>
          <LabelInput 
              
              type="date" 
              currentValue={currentDate}
              pattern={/[*]*/} 
              onHandleChangue={setCurrentDate}
          />
          <button 
            type="button" 
            className="btn btn-outline-primary ms-2" 
            onClick={()=>{
              let a = addDays(new Date(currentDate),1)
              setCurrentDate(format(a,'yyyy-MM-dd'))
            }}
            ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">            <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path> </svg>
            </button>
        </div>
      }
      </div>
      <div className="row">
        <div className="col-12">
          <table className="tabla-reservas table table-hover mb-5">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th scope="col">nombre</th>
                <th scope="col">telefono</th>
                <th scope="col">fecha</th>
                <th scope="col">mesa</th>
                <th scope="col">hora</th>
                <th scope="col">personas</th>
              </tr>
            </thead>
            <tbody>
              {dataTable &&
                dataTable.map((reservation, index) => (
                  <tr key={reservation.id} >
                    <th scope="row">{!currentAuthoritis.includes("CONTABLE") && 
                      
                      <ModalInfo 
                        title="Cancelación de reserva"
                        bodyMsg="¿Estás seguro que quieres borrar la reserva?"
                        handleOnClick={() =>cancelReservation(index, reservation.id)}
                        
                      />}
                    </th>
                    <td>{reservation.user}</td>
                    <td>{reservation.tel}</td>
                    <td>{ format(new Date(reservation.dateReservations),'dd-MM-yyyy') }</td>
                    <td>{reservation.dinnerTable}</td>
                    <td>{reservation.lunchHour}</td>
                    <td>{reservation.numberPeople}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        
      </div>
      {showAlert && <Alert msg="No hay conexión con el servidor. Vuelva a iniciar sesión" handleClick ={()=>setShowAlert(false)} />}
      
    </div>
  );
}
