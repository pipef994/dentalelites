import React, { useState } from 'react';
import DatosIdentificacion from './datosIdentificacion';
import Anemesis from './anemesis';
import Antecedentes from './antecedentes';
import AntOdont from './antOdont';
import ExamFisGen from './examFisGen';

export default [
  {
    component: DatosIdentificacion,
    dataId: 'datosIdentificacion'
  },
  {
    component: Anemesis,
    dataId: 'anemesis'
  },
  {
    component: Antecedentes,
    dataId: 'antecedentes'
  },
  {
    component: AntOdont,
    dataId: 'antOdont'
  },
  {
    component: ExamFisGen,
    dataId: 'examFisGen'
  },
]

// function PrimerPagina(props) {
//   const [formData, setFormData] = useState({
//     anemesis: {},
//     antecedentes: {},
//     antOdont: {},
//   })

//   const changeFormData = (dataId) => {
//     return (data) => {
//       setFormData({
//         ...formData,
//         [dataId]: { ...data }
//       })
//     }
//   }

//   return (
//     <div className="container">
//       <div className="row my-3">
//         <div className="col-12">
//           <Anemesis updateValues={changeFormData('anemesis')} />
//         </div>
//       </div>
//       <div className="row my-3">
//         <div className="col-12">
//           <Antecedentes updateValues={changeFormData('antecedentes')} />
//         </div>
//       </div>
//       <div className="row my-3">
//         <div className="col-12">
//           <AntOdont updateValues={changeFormData('antOdont')} />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PrimerPagina;