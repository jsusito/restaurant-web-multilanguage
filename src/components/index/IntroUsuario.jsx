import { useState } from "react";
import image from "./../../images/bandeja.png"
import MapsDireccion from "./MapsDireccion";
import ParrafoAndHead from "./ParrafoAndHead";
import { RecetaEspecial } from "../../datos/RecetaEspecial"
import imagenActiva from "../../images/carta/6.jpg"
import { useTranslation } from "react-i18next";




function IntroUsuario(){
    
    const [t]  = useTranslation('restaurantPag');

    const datos = [
        {
            id:0,
            imagen: image,
            alt: "bandeja"
        },
        {
            id:1,
            header: t('title1')
        },
        {
            id:2,
            parrafo:t('section1')
        },
        {
            id:3,
            parrafo:t('section2')
        },
        {
            id:4,
            header:t('title2')                       
        },
        {
            id:5,
            parrafo:t('section3')
        },
    ]

    const [showMap, setShowMap] = useState(false);
    
    return(
        <div className="container introduccion" >
            <div className="row  justify-content-center">
                <div className="col-10">
                
                    {
                     datos.map(dato =>
                            (<ParrafoAndHead 
                                key = {dato.id}
                                imagen= {dato['imagen']}
                                alt = {dato['alt']}
                                header = {dato['header']} 
                                parrafo={dato['parrafo']}>
                            </ParrafoAndHead>))
                    }

                    <div className="col-12 d-flex justify-content-center align-items-center flex-column mb-3">    
                        <p>{t('section4')}<button className="enlaces mb-3" onClick={() =>setShowMap(true)}> {t('link1')}</button></p>
                        
                        <div className="col-10">
                            { showMap && <MapsDireccion id="mapa"></MapsDireccion> }
                        </div>
                        
                        <ParrafoAndHead header={t('title3')}></ParrafoAndHead>
                        
                        <div id="carouselComida" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselComida" data-bs-slide-to="0" className="active"></button>
                                
                                {
                                    RecetaEspecial().map((receta)=>(<button key={receta.id} type="button" data-bs-target="#carouselComida" data-bs-slide-to={receta.id} />))    
                                        
                                }
                            </div>
                            <div className="carousel-inner">
                                
                                <div className="carousel-item active data-bs-interval=1000">
                                    <img src={imagenActiva} className="d-block  img-carrusel"  alt="..."/>
                                </div>
                                {
                                    RecetaEspecial().map((receta)=>
                                        <div key={receta.id} className="carousel-item data-bs-interval=5000">
                                            <img src={receta.imagen} className="d-block img-carrusel" alt="..."/>
                                        </div>   
                                    )
                                 }

                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselComida" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselComida" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IntroUsuario;