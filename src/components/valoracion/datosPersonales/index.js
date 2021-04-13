//Redirecciones
import Tratamiento from "./tratamiento";
import Calentdario from "./calendario";
import DatosPersona from "./datosPersona";

export default [
  {
    component: DatosPersona,
    dataId: "datospersona",
  },
  {
    component: Tratamiento,
    dataId: "tratamiento",
  },
  {
    component: Calentdario,
    dataId: "calendario",
  },
];
