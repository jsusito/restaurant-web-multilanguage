import { TipoReceta } from "./TipoReceta";

export function SelectTipoReceta(props){
    const options = new TipoReceta().getAllType();

    return (
        <div className="col-sm-12">
            <label className="form-label pt-1 titulo-especialidad m-3">{props.tittle}
                <select  onChange={(e)=>props.onOptionChange(e.target.value)}  className={"form-select mt-2"}>       
                    <option value="0">todas</option>
                    {options.map(element =><option required key ={element}  value={element}>{element}</option>)}
                </select>    
            </label>
        </div>
    );

}