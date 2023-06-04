import { useTranslation } from "react-i18next";

export function TipoReceta(){
    
   const [t] = useTranslation('carta');
  
    const tipoReceta = 
        {
            VEGETARIANO: t('vegetariano'),
            SIN_GLUTEN: t('sin-gluten'),
            CARNE: t('carne'),
            PESCADO: t('pescado'),
            MARISCO: t('marisco'),
        }
    
    return tipoReceta;

}