import especialidad1 from "./../images/carta/especialidad1.jpg"
import especialidad2 from "./../images/carta/especialidad2.jpg"
import especialidad3 from "./../images/carta/especialidad3.jpg"
import especialidad4 from "./../images/carta/especialidad4.jpg"
import especialidad5 from "./../images/carta/especialidad5.jpg"
import especialidad6 from "./../images/carta/especialidad6.jpg"
import { TipoReceta } from "./TipoReceta"
export function RecetaEspecial(t){
    
    const tipo = TipoReceta();
    return [
        {
            id: 1,
            description: t('1.description1'),
            imagen: especialidad1,
            ingredientes:t('1.ingredientes1'),
            precio:17.99,
            text:"Delicia de  tortitas con carne",
            tipo: [tipo.CARNE]
        },
        {
            id: 2,
            description: t('2.description2'),
            imagen: especialidad2,
            ingredientes: t('2.ingredientes2'),
            precio:17.99,
            text:"Prueba nuestras arepas, una explosión de sabores",
            tipo: [tipo.SIN_GLUTEN, tipo.VEGETARIANO]

        },
        {
            id: 3,
            description: t('3.description3'),
            imagen: especialidad3,
            ingredientes: t('3.ingredientes3'),
            precio:17.99,
            text: "un maravilloso postre para disfrutar",
            tipo: [tipo.SIN_GLUTEN, tipo.VEGETARIANO]
        },
        {
            id: 4,
            description: t('4.description4'),
            imagen: especialidad4,
            ingredientes: t('4.ingredientes4'), 
            precio:17.99,
            text: "una experiencia inolvidable",
            tipo:[tipo.CARNE]
        },
        {
            id: 5,
            description: t('5.description5'),
            imagen: especialidad5,
            ingredientes: t('5.ingredientes5'),
            precio:17.99,
            text: "pruebalo, desearás volver ",
            tipo: [tipo.PESCADO]
        },
        {
            id: 6,
            description: t('6.description6'),
            imagen: especialidad6,
            ingredientes: t('6.ingredientes6'),
            precio:17.99,
            text: "de nuestros mejores platos disponibles",
            tipo: [tipo.CARNE]

        },    
    ]
}





      
