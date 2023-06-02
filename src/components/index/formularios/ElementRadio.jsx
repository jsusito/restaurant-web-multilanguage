
export function ElementRadio({text, value, name, checked, onOptionChange, index, reservations}){
    
    //Cogemos el numero de la mesa y la hora y comparamos con el listado del fecht haber si existe esa reserva cada vez que se
    //forma un radioButton, si existe lo marcamos como desactivado
    let numberTable = value.charAt(0);
    let hora = value.substring(1,6)
    
    // eslint-disable-next-line 
    let existReservation = reservations.filter(reservation => reservation.dinnerTable == numberTable && reservation.lunchHour === hora)
    
    let isReservation = false;
    let color = "text-primary";
    let border = {};
    if(existReservation.length > 0){
        
        isReservation = true;
        color = "text-warning"
        border = {border:"none", backgroundColor:"#ffc107" }
    }    
    return (
   
        <div className="form-check form-check-inline ">
            <label className={color}>
            <input 
                className="form-check-input input-options-reservas"
                style={border} 
                type="radio" 
                name={name} 
                id={"radios" + index} 
                value={value}
                checked={checked}
                onChange={onOptionChange}
                disabled = {isReservation}
                
                />
            
            {text}
            </label>
        </div>
    );
}