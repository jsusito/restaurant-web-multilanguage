export function SelectForm({tittle, options,setValueState, name}){
   
   const onOptionChange = (event) => {
        setValueState( event.target.value );
    }
    return (
        <div className="col-sm-12">
            <label htmlFor={tittle}  className="form-label">{tittle}</label>
            <select  onChange={onOptionChange} id={tittle}  name={name} className={"form-select "}>       
                <option value="0">Escoja una opcion</option>
                {options.map(element =><option required key ={element}  value={element}>{element}</option>)}
            </select>    
        </div>
    );
}

