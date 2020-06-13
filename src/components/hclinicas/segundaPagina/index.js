import AyudasDiagnosticas from "./ayudasDiagnosticas";
import ExamExtIntra from "./examExtIntra";
import ExamDental from "./examDental";
import ExamenPeriodontal from "./examPeriodontal";
import ExamenPulpar from "./examPulpar";
import ExamenRadio from "./examRadio";

export default [
  {
    component: ExamExtIntra,
    dataId: "examExtIntra",
  },
  {
    component: ExamDental,
    dataId: "examDental",
  },
  {
    component: ExamenPeriodontal,
    dataId: "examPeriodontal",
  },
  {
    component: ExamenPulpar,
    dataId: "examPulpar",
  },
  {
    component: ExamenRadio,
    dataId: "examRadio",
  },
  {
    component: AyudasDiagnosticas,
    dataId: "ayudasDiagnosticas",
  },
];
