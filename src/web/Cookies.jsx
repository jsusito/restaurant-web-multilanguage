import { useState } from "react";

export function Cookies(){
    
  //Cookies
  const COOKIE = "COOKIE=OK"
  
  //Un mes.
  let age = 3600 * 24 * 30;
  
  let cookiePresent;
  if(document.cookie.includes(COOKIE))
    cookiePresent = true;
  
  const [showMsgCookie, setShowMsgCookie] = useState(cookiePresent);
  
  const onClickHandle = () =>  {
     document.cookie = COOKIE + ";max-age=" + age; 
     setShowMsgCookie(()=>(true))
  }
  
  return( !showMsgCookie &&
        
    <div className="container-fluid fixed-bottom barra-cookies mb-1" >    
        <div className="row justify-content-between align-items-center ">
            <div className="col-10-lg col-12-sd" >
                <p className="parraf-cookies">Las cookies de este sitio se usan para personalizar el contenido y los anuncios para ofrecer funciones de medios sociales y para analizar el tráfico. Además, compartimos información sobre el uso que haga del sitio con nuestros partners de medios sociales de publicidad, de personalización y de análisis web.
                </p>
            </div>
            <div className="col-2-lg col-12-sd">
                <div className="d-grid ">
                    <button className="btn btn-primary btn-sm" type="button" onClick={onClickHandle}>Aceptar</button>
                </div>
            </div>
        </div>
    </div>

    );
}