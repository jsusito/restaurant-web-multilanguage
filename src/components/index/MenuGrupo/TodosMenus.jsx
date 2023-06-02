import { SeccionMenu } from "./SeccionMenu";

export function TodosMenus(props){
    return (
        <>
            <SeccionMenu 
                titulo = "menu 1 - 12.90€"
                entrantes={props.menu1Entrantes} 
                principales={props.menu1Principales} 
                ensaladas={props.menu1Ensaladas}
                especiales={props.menu1Especialidad}
                bebidas={props.bebidasVarias}
                sizeColumn = "4"
                
            />
            <SeccionMenu
                titulo = "menu 2 - 15.90€"
                entrantes={props.menu2Entrantes} 
                principales={props.menu2Principales} 
                ensaladas={props.menu2Ensaladas}
                especiales={props.menu2Especialidad}
                bebidas={props.bebidasVarias}
                sizeColumn = "4"
            />
            <SeccionMenu
                titulo = "menu 3 - 17.90€" 
                entrantes={props.menu3Entrantes} 
                principales={props.menu3Principales} 
                ensaladas={props.menu3Ensaladas}
                especiales={props.menu3Especialidad}
                bebidas={props.bebidasVarias}
                sizeColumn = "4"
            />
        </>
    );
}