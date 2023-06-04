import imagen10 from "./../images/carta/10.jpg";
import imagen11 from "./../images/carta/11.jpg";
import imagen12 from "./../images/carta/12.jpg";
import imagen9 from "./../images/carta/9.jpg";
import { TipoReceta } from "./TipoReceta";

export function RecetasComida(translation) {
  const t = translation;

  const tipo = new TipoReceta();
  return [
    {
      id: "7",
      description: t("7.description7"),
      precio: "15",
      imagen: imagen9,
      tipo: [tipo.CARNE],
    },
    {
      id: "8",
      description: t("8.description8"),
      precio: "12",
      imagen: imagen10,
      tipo: [tipo.CARNE, tipo.SIN_GLUTEN],
    },
    {
      id: "9",
      description: t("9.description9"),
      precio: "15",
      imagen: imagen11,
      tipo: [tipo.MARISCO, tipo.SIN_GLUTEN],
    },
    {
      id: "10",
      description: t("10.description10"),
      precio: "12",
      imagen: imagen12,
      tipo: [tipo.CARNE],
    },
  ];
}
