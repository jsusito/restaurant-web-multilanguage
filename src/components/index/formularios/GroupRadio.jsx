import { ElementRadio } from "./ElementRadio";

/*
    Todas las radioOption tienen el mismo useState, y añadimos el numero de la mesa al value, para despues
    poder desconponerla en ElementRadio y así poder sacar el numero de la mesa que ha reservado y la hora
*/

export function GroupRadio({tittle, radios,valueState, setValueState, name,reservations}){
      
       
    const onOptionChange = (event) => {
        setValueState( event.target.value );
    }
    
        
    return (
        <fieldset className="row mb-3">
            <legend className="col-form-label col-sm-12 pt-0">{tittle}</legend>
            <div className="col-sm-12"> 
                {
                    
                    radios.map( (element, index) => <ElementRadio 
                        className="btn-radio"
                        key={element}
                        value={tittle.charAt(5) + element} //agregamos primer numero del titulo para despues cogerlo como referencia saber el numero de mesa
                        text={element}
                        name={name}
                        index={tittle + index}
                        // checked={valueState === element}
                        reservations={reservations}
                        onOptionChange={onOptionChange}/>
                        
                        )
                    }
                
            </div>
        </fieldset>

    );
}

