import { useContext, useEffect, useState } from "react";
import { UserContext } from "../components/index/authentication/UserSesion";
import { ComidaLLevar } from "../components/index/carta/ComidaLLevar";
import SeccionCarta from "../components/index/carta/SeccionCarta";
import { FormReservas } from "../components/index/formularios/FormReservas";
import { RecetaEspecial } from "../datos/RecetaEspecial";
import { RecetasComida } from "../datos/RecetasComida";
import { RecetasEnsaladas } from "../datos/RecetasEnsaladas";
import { RecetasMontaditos } from "../datos/RecetasMontaditos";
import { SelectTipoReceta } from "../datos/SelectTipoReceta";
import imgComidas from "../images/carta/comidas.jpg";
import imgEnsaladas from "../images/carta/ensaladas.jpg";
import imgMontaditos from "../images/carta/montaditos.jpg";
import { FilterRecipe } from "../utils/FilterRecipe";
import { useTranslation } from "react-i18next";

function Carta(){
  
  const context = useContext(UserContext);

  const t = context.translationRecetas;
  const [tCarta] = useTranslation('carta');
  
  const comidas = RecetasComida(t);
  const ensaladas = RecetasEnsaladas(t);
  const montaditos = RecetasMontaditos(t);
  const especial = RecetaEspecial(t);

 
  const NO_SELECTION = "0";
  
  const [filter, setFilter] = useState(NO_SELECTION);
  
  const [imagen , setImagen] = useState(imgMontaditos);
  const [imagenEnsalada , setImagenEnsalada] = useState(imgEnsaladas);
  const [imagenComida , setImagenComida] = useState(imgComidas);
  const [imagenEspecial , setImagenEspecial] = useState(imgComidas);
  const [showForm, setShowForm] = useState(false);
  
  const [recetasMontaditos, SetRecetasMontaditos] = useState([]); 
  const [recetasEnsaladas, setRecetasEnsaldas] = useState([]);
  const [recetasComida, SetRecetasComida] = useState([]);
  const [recetaEspecial, SetRecetaEspecial] = useState([]);

  useEffect(()=>{
    if(filter === NO_SELECTION){
        setRecetasEnsaldas(ensaladas);
        SetRecetasComida(comidas);
        SetRecetasMontaditos(montaditos);
        SetRecetaEspecial(especial);
    }
    else{
        
        let receta = FilterRecipe(ensaladas, filter)
        setRecetasEnsaldas(receta)
        
        receta = FilterRecipe(comidas, filter)
        SetRecetasComida(receta)

        receta = FilterRecipe(montaditos, filter)
        SetRecetasMontaditos(receta)

        receta = FilterRecipe(especial, filter)
        SetRecetaEspecial(receta)
    }
},[filter,t]);
  
  return(
        <div className="container-fluid background-carta-encabezado ">
            { !showForm &&    
             <SelectTipoReceta 
                onOptionChange={setFilter} 
                tittle={tCarta('filterBy')}
                />}
            
            {
                <>
                     {
                        !showForm &&  recetasMontaditos.length > 0 && <SeccionCarta 
                        header= {tCarta('HeadMontaditos')} 
                        tittle= {tCarta('TitleMontaditos')} 
                        recetas={recetasMontaditos}
                        valueState={imagen}
                        setValueState={setImagen}                   
                        />
                    }
                    {
                        !showForm && recetasEnsaladas.length > 0 && <SeccionCarta 
                        header={tCarta('HeadEnsaladas')} 
                        tittle={tCarta('TitleMontaditos')} recetas={recetasEnsaladas}
                        valueState={imagenEnsalada}
                        setValueState={setImagenEnsalada}                   
                        />
                    }
                    {
                        !showForm && recetasComida.length > 0 && <SeccionCarta 
                        header={tCarta('HeadPlatos')} 
                        tittle={tCarta('TitlePlatos')} recetas={recetasComida}
                        valueState={imagenComida}
                        setValueState={setImagenComida}                   
                        />
                    }
                    {
                        !showForm && recetaEspecial.length > 0 && <SeccionCarta 
                        header={tCarta('HeadEspeciales')} 
                        tittle={tCarta('TitleEspeciales')} recetas={recetaEspecial}
                        valueState={imagenEspecial}
                        setValueState={setImagenEspecial}                   
                        />
                    }
                    
                    { !showForm && <ComidaLLevar setValue={setShowForm} value={showForm}></ComidaLLevar>}

                    { showForm &&  <FormReservas></FormReservas>}
                </>    
                
            }
        </div>
    )
}

export default Carta;