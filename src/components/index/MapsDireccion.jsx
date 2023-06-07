import { useTranslation } from "react-i18next";
import iconDireccion from "./../../images/direccion.png";
import iconEmail from "./../../images/email.png";
import iconComida from "./../../images/icon-comida.png";
import iconWhatsapp from "./../../images/whatsapp.png";
import IconEnlace from "./IconEnlace";
import Maps from "./Maps";

function MapsDireccion(){
    
   const [t] = useTranslation('reserva') 
   return(
        <div className="container-fluid">
            <div className="row mb-4 mt-2 align-items-center  justify-content-center">
                
                <div className="col-md-6  align-items-center  justify-content-center mb-3">
                    <Maps></Maps>
                </div>
                
                <div className="col-md-6  d-flex align-items-center flex-column justify-content-center">
                    <div className="container">
                        <div className="row">
                            <IconEnlace litte={true} icon={iconWhatsapp} title="whatsapp" description="(+34) 1234.567.891."/>
                            <IconEnlace litte={true} icon={iconComida} title={t('telefono')} description="(+34) 1234.567.891."/>
                            <IconEnlace litte={true} icon={iconEmail} title="email" description="casandraRest@gmail.com"/>
                            <IconEnlace litte={true}icon={iconDireccion} title={t('direccion')}  description="ESCONDITE 44. EL GOLFO"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapsDireccion;