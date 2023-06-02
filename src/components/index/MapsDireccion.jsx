import Maps from "./Maps";
import IconEnlace from "./IconEnlace";
import iconComida from "./../../images/icon-comida.png";
import iconEmail from "./../../images/email.png";
import iconWhatsapp from "./../../images/whatsapp.png";
import iconDireccion from "./../../images/direccion.png";

function MapsDireccion(){
    
   return(
        <div className="container-fluid">
            <div className="row mb-4 mt-2">
                
                <div className="col-md-6  align-items-center  justify-content-start mb-3">
                    <Maps></Maps>
                </div>
                
                <div className="col-md-6  d-flex align-items-start flex-column justify-content-center">
                    <div className="container">
                        <div className="row">
                            <IconEnlace litte={true} icon={iconWhatsapp} title="whatsapp" description="(+34) 1234.567.891."/>
                            <IconEnlace litte={true} icon={iconComida} title="telefono" description="(+34) 1234.567.891."/>
                            <IconEnlace litte={true} icon={iconEmail} title="email" description="casandraRest@gmail.com"/>
                            <IconEnlace litte={true}icon={iconDireccion} title="direccion" description="ESCONDITE 44. EL GOLFO"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MapsDireccion;