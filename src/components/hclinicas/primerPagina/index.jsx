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
