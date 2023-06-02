export class TipoReceta{
    
    VEGETARIANO = "VEGERATIANO"
    SIN_GLUTEN = "SIN GLUTEN";
    CARNE = "CARNE"
    PESCADO = "PESCADO"
    MARISCO ="MARISCO"

    getAllType(){
        return [this.VEGETARIANO, this.SIN_GLUTEN, this.CARNE, this.PESCADO, this.MARISCO];
    }
}