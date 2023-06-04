import { useTranslation } from "react-i18next";

function IconEnlace(props){
    const url = props.url;
    const [t] = useTranslation('reserva')
    
    return(
            <div className="row-fluid">
                <div className="row ">   
                    <div className="d-flex col-12 mb-5 d-flex align-items-center">    
                        {
                        
                        //Para mostrar los iconos con las letras mas grandes
                        !props.litte &&    
                        <>
                            <div className="me-3">
                                <img src={props.icon} className="iconos" alt="telefono"></img>
                            </div>  
                            <div>
                                {props.title && <h3 className="m-0 p-0" style={{color:'#ca864b'}}>{props.title}</h3>}
                                {url && <h2 className="m-0 p-0 enlaces" onClick={() =>(window.location.href=url)}>{props.description}</h2>}
                                {!url && <h2 className="m-0 p-0">{props.description}</h2>}
                                {props.buttonClass 
                                    && 
                                        <>
                                        <button type="button" className={props.buttonClass} onClick={()=>(props.onClickReserva())}>{t('button1')}</button>
                                        <button type="button" className={props.buttonClass} onClick={()=>(props.onClickContact())}>{t('button2')}</button>
                                        </>
                                }
                            </div>
                        </>
                        }
                        
                        {
                        //Para mostrar los iconos con las letras pequeñas
                        props.litte &&    
                        <>
                            <div className="me-3">
                                <img src={props.icon} className="iconos-little" alt="telefono"></img>
                            </div>  
                            <div>
                                
                                {props.title && <h3 className="m-0 p-0 little" style={{color:'#ca864b'}}>{props.title}</h3>}
                                {url && <h2 className="m-0 p-0 enlaces little" onClick={() =>(window.location.href=url)}>{props.description}</h2>}
                                {!url && <h2 className="m-0 p-0 little" >{props.description}</h2>}
                               
                            </div>
                        </>
                        }

                    </div>
                </div>
            </div> 
    );
}

export default IconEnlace;