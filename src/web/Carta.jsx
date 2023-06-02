import { useEffect, useState } from "react";
import { ComidaLLevar } from "../components/index/carta/ComidaLLevar";
import SeccionCarta from "../components/index/carta/SeccionCarta";
import { FormReservas } from "../components/index/formularios/FormReservas";
import { RecetasComida } from "../datos/RecetasComida";
import { RecetasEnsaladas } from "../datos/RecetasEnsaladas";
import { RecetasMontaditos } from "../datos/RecetasMontaditos";
import imgComidas from "../images/carta/comidas.jpg";
import imgEnsaladas from "../images/carta/ensaladas.jpg";
import imgMontaditos from "../images/carta/montaditos.jpg";
import { FilterRecipe } from "../utils/FilterRecipe";
import { SelectTipoReceta } from "../datos/SelectTipoReceta";
import { RecetaEspecial } from "../datos/RecetaEspecial";

function Carta(){
  
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
        setRecetasEnsaldas(RecetasEnsaladas());
        SetRecetasComida(RecetasComida());
        SetRecetasMontaditos(RecetasMontaditos());
        SetRecetaEspecial(RecetaEspecial());
    }
    else{
        let receta = FilterRecipe(RecetasEnsaladas(), filter)
        setRecetasEnsaldas(receta)
        
        receta = FilterRecipe(RecetasComida(), filter)
        SetRecetasComida(receta)

        receta = FilterRecipe(RecetasMontaditos(), filter)
        SetRecetasMontaditos(receta)

        receta = FilterRecipe(RecetaEspecial(), filter)
        SetRecetaEspecial(receta)
    }
},[filter]);
  
  return(
        <div className="container-fluid background-carta-encabezado ">
        { !showForm &&    <SelectTipoReceta onOptionChange={setFilter} tittle="Filtrar por"></SelectTipoReceta> }
            {
                <>
                     {
                        !showForm &&  recetasMontaditos.length > 0 && <SeccionCarta 
                        header="Nuestros montaditos" 
                        tittle="montaditos de" recetas={recetasMontaditos}
                        valueState={imagen}
                        setValueState={setImagen}                   
                        />
                    }
                    {
                        !showForm && recetasEnsaladas.length > 0 && <SeccionCarta 
                        header="las ensaladas" 
                        tittle="Ensaladas de" recetas={recetasEnsaladas}
                        valueState={imagenEnsalada}
                        setValueState={setImagenEnsalada}                   
                        />
                    }
                    {
                        !showForm && recetasComida.length > 0 && <SeccionCarta 
                        header="mis platos" 
                        tittle="recetas de" recetas={recetasComida}
                        valueState={imagenComida}
                        setValueState={setImagenComida}                   
                        />
                    }
                    {
                        !showForm && recetaEspecial.length > 0 && <SeccionCarta 
                        header="Especiales" 
                        tittle="recetas de" recetas={recetaEspecial}
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