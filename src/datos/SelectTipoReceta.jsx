import { useTranslation } from "react-i18next";
import { TipoReceta } from "./TipoReceta";

export function SelectTipoReceta(props){
    const options = Object.entries(TipoReceta());
    const [t] = useTranslation('carta');
    
    return (
        <div className="col-sm-12">
            <label className="form-label pt-1 titulo-especialidad m-3">{props.tittle}
                <select  onChange={(e)=>props.onOptionChange(e.target.value)}  className={"form-select mt-2"}>       
                    <option value="0">{t('todas')}</option>
                    {options.map(element =><option required key ={element[0]}  value={element[1]} >{element[1]}</option>)}
                </select>    
            </label>
        </div>
    );

}