
import { Encabezados } from "../components/index/MenuGrupo/Encabezados";
import  {CombinacionesGrupo}  from "../datos/CombinacionesGrupo";
import { TodosMenus } from "../components/index/MenuGrupo/TodosMenus";
import { useEffect, useState } from "react";
import { Menu } from "../components/index/MenuGrupo/Menu";
import { Constants } from "../utils/Constants";

const constants = new Constants();

const combinaciones = CombinacionesGrupo();

const menu1 = combinaciones[1];
const menu2 = combinaciones[2];
const menu3 = combinaciones[3];

export function Grupo(){
    const menu1Entrantes= menu1.entrantes
    const menu2Entrantes= menu2.entrantes
    const menu3Entrantes= menu3.entrantes
    
    const menu1Principales = menu1.principales
    const menu2Principales = menu2.principales
    const menu3Principales = menu3.principales

    const menu1Especialidad = menu1.especialidad
    const menu2Especialidad = menu2.especialidad
    const menu3Especialidad = menu3.especialidad

    const menu1Ensaladas = menu1.ensaladas;
    const menu2Ensaladas = menu2.ensaladas
    const menu3Ensaladas = menu3.ensaladas
    
    const bebidasVarias = menu3.bebida
  
    const [showMenus, setShowMenus]= useState(true)
    const [showMenu1, setShowMenu1]= useState(false)
    const [showMenu2, setShowMenu2]= useState(false)
    const [showMenu3, setShowMenu3]= useState(false)

    //controla el desplegable para elegir los menus
    const [option, setOption] = useState();
    
  

    useEffect(() => {
        if(option===constants.MENU1){
           
            setShowMenu1(()=>true)
            setShowMenu2(()=>false)
            setShowMenu3(()=>false)
            setShowMenus(()=>false)

        }
        if(option===constants.MENU2){
            
            setShowMenu1(()=>false)
            setShowMenu2(()=>true)
            setShowMenu3(()=>false)
            setShowMenus(()=>false)

        }

        if(option===constants.MENU3){
            
            setShowMenu1(()=>false)
            setShowMenu2(()=>false)
            setShowMenu3(()=>true)
            setShowMenus(()=>false)

        }

        if(option===constants.TODOS){
            
            setShowMenu1(()=>false)
            setShowMenu2(()=>false)
            setShowMenu3(()=>false)
            setShowMenus(()=>true)

        }
    }, [option])

    return (
        <div className="container-fluid mb-4">  
            
            <div className="row justify-content-center mx-5" >
                <Encabezados
                    setOption = {setOption}
                />
                
            {showMenus && 
                <TodosMenus
                    menu1Entrantes={menu1Entrantes} 
                    menu1Principales={menu1Principales} 
                    menu1Ensaladas={menu1Ensaladas}
                    menu1Especialidad={menu1Especialidad}
                    bebidasVarias={bebidasVarias}

                    menu2Entrantes={menu2Entrantes} 
                    menu2Principales={menu2Principales} 
                    menu2Ensaladas={menu2Ensaladas}
                    menu2Especialidad={menu2Especialidad}
                
                    menu3Entrantes={menu3Entrantes} 
                    menu3Principales={menu3Principales} 
                    menu3Ensaladas={menu3Ensaladas}
                    menu3Especialidad={menu3Especialidad}
                />
            }

                
            {showMenu1 &&
                <Menu 
                    titulo = "menu 1 - 12.90€"
                    entrantes={menu1Entrantes} 
                    principales={menu1Principales} 
                    ensaladas={menu1Ensaladas}
                    especiales={menu1Especialidad}
                    bebidas={bebidasVarias}
                />
            }

            {showMenu2 &&
                <Menu 
                    titulo = "menu 2 - 16.90€"
                    entrantes={menu2Entrantes} 
                    principales={menu2Principales} 
                    ensaladas={menu2Ensaladas}
                    especiales={menu2Especialidad}
                    bebidas={bebidasVarias}
                />
            }

            {showMenu3 &&
                <Menu 
                    titulo = "menu 3 - 19.90€"
                    entrantes={menu3Entrantes} 
                    principales={menu3Principales} 
                    ensaladas={menu3Ensaladas}
                    especiales={menu3Especialidad}
                    bebidas={bebidasVarias}
                />
            }
            </div>
         </div>

    );
}