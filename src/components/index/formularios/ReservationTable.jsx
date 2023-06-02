
import { GroupRadio } from "./GroupRadio";
import { Constants } from "../../../utils/Constants";
import { useEffect, useState } from "react";

export function ReservationTable(props){
    
    const constantes = new Constants();
    const radios = constantes.TIME_LUNCH;

    const tableNumbers = constantes.TOTAL_TABLES;   
    
    const API_RESERVATIONS_BY_DATE = new Constants().API_RESERVATION + "date/";
    const [listReservationByDate, setListReservationByDate] = useState([]);
    
    useEffect(()=>{
        fetch(API_RESERVATIONS_BY_DATE + props.date)
            .then( (response) => response.json())
            .then((body) => setListReservationByDate(body))
        },[props.date])
    
    return(
        <div className="container-fluid">
            <div className="row">
                    {
                        tableNumbers.map((state, index) =>
                            
                            <div className="col-4" key={index}>
                                <GroupRadio
                                    tittle = {"mesa " + (state)}
                                    numberMesa = {state}
                                    radios = {radios}
                                    setValueState={props.setValueState}
                                    name="mesa"
                                    reservations={listReservationByDate}
                                    />
                            </div>
                        )
                    }
                
               
            </div>

        </div>
    );
}