import React from "react";
import { useEffect, useState } from "react";

function SeccionCarta(props){

    const [idShow, setIdShow] = useState();
    const [windowchange,setWindowSize] = useState(false);

    useEffect(() => {
        const handleResize = () => window.innerWidth < 768 ? setWindowSize(true) : setWindowSize(false);
        
        window.addEventListener("resize", handleResize);

        //eliminamos el componente para que no haya problema con este listener después en la memoria
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    
    return (
            <div className="container ">
                
                <div className="row align-items-center justify-content-between"> 
                    <div className="col-12 my-4">
                        <p className="header-carta">{props.header}</p>
                    </div>
                
                
                <div className="col-md-6 justify-content-center align-items-start  py-1 my-3">
                    <p className="parraf-tittle text-center">{props.tittle}</p>
                    {
                        props.recetas.map( (receta) => {
                            return (
                                <React.Fragment key={receta.id}>
                                    <p  
                                        
                                        className="parraf-carta mb-4" 
                                        onClick={()=>{
                                            props.setValueState(receta.imagen);
                                            setIdShow(receta.id)
                                        }}
                                    >
                                        {receta.description}
                                    </p>
                                    
                                    
                                    {/* mostramos la imagen cuando la resolucion sea inferior a 600px  justo debajo del nombre de la receta*/}

                                    {   idShow===receta.id && window.innerWidth<768 &&
                                        <div className="col-md-6 mb-3 justify-content-center align-items-center" >
                                        {
                                            // eslint-disable-next-line jsx-a11y/alt-text
                                            <a href={props.valueState}>
                                                <img  src={props.valueState} className="img-carta"></img>
                                            </a>
                                        }
                                        </div>
                                    }
                                </React.Fragment>
                            )

                        })
                    }    
                </div>
                
                {/* Para resoluciones mayores mostramos la imagen al lado */}
                { window.innerWidth > 768 &&
                    <div className="col-md-6 mb-3 justify-content-center">
                        {
                            // eslint-disable-next-line jsx-a11y/alt-text
                            <a href={props.valueState}><img  src={props.valueState} className="img-carta"></img></a>
                        }
                    </div>
                }
                </div>
               
            </div>    
     
    );
}

export default SeccionCarta