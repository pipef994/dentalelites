import React, { Component, Fragment } from 'react'

import Store from './Store/Store'
import Tooth from './Tooth'
import Toolbar from './Toolbar'

import './odontograma.scss'

const types = [
  {
    id: 'adult',
    lable: 'Adulto'
  },
  {
    id: 'kid',
    lable: 'Infantil'
  }
]

const toothFaceStatuses = [
  {
    name: 'restored',
    color: 'black'
  },
  {
    name: 'carious',
    color: 'green'
  },
  {
    name: 'healthy',
    color: 'red'
  },
  {
    name: 'normal',
    color: 'white'
  }
]

const toolbarOptions = [
  {
    name: 'Restaurado',
    status: 'restored',
    className: 'btn btn-dark'
  },
  {
    name: 'Cariado',
    status: 'carious',
    className: 'btn btn-success'
  },
  {
    name: 'Saludable',
    status: 'healthy',
    className: 'btn btn-danger'
  }
]

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      ...Store,
      dentalArchType: 'adult',
      currentStatus: toothFaceStatuses.find(stat => stat.name === 'restored'),
      isSaving: false
    }
  }

  handleChange = (event, value) => {
    this.setState({ dentalArchType: event.target.value })
  }

  handleStatusSelectorChange = status => {
    console.log(status)
    const selectedStatus = toothFaceStatuses.find(stat => stat.name === status)
    console.log(selectedStatus)
    this.setState({ currentStatus: selectedStatus })
  }

  //Toogle - Adicionar o remover un diente
  toggleTooth = data => {
    if (data.status) {
      data.status = false
      this.setState({ data })
    } else {
      data.status = true
      this.setState({ data })
    }
  }

  setFace = (face, index, data) => {
    const action = this.state.currentStatus.name
    if (action === data.faces[index].status) {
      data.faces[index].status = 'normal'
    } else {
      data.faces[index].status = action
    }
    this.setState({ data })
  }

  saveData = () => {
    const dentalArchData = this.state.dentalArch[this.state.dentalArchType]
    const dataObject = {
      timeStap: new Date(),
      dentalArch: dentalArchData
      // User id ?
    }
    // Aquí va la lógica para llamar al servicio y almacenar la información
    console.log('Data to send to the server', dataObject)
  }

  render () {
    const { dentalArchType } = this.state

    return (
      <div className='container'>
        <div className='row my-3'>
          <div className='col-12'>
            <h1 className='my-3'>Odontograma</h1>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-12'>
            <div className='card'>
              <h5 className='card-header'>Datos de arco dental</h5>
              <div className='card-body'>
                <div className='dentalArchSelector'>
                  {types.map(type => (
                    <div key={type.id} className='form-check form-check-inline'>
                      <input
                        type='radio'
                        id={type.id}
                        name='type'
                        className='form-check-input'
                        value={type.id}
                        checked={this.state.dentalArchType === type.id}
                        onChange={this.handleChange}
                      />
                      <label className='form-check-label' htmlFor={type.id}>
                        {type.lable}
                      </label>
                    </div>
                  ))}
                </div>
                <div className='dentalArch'>
                  {this.state.dentalArch[dentalArchType].map((item, index) => {
                    return (
                      <Tooth
                        key={item.id}
                        index={index}
                        data={item}
                        toggleTooth={this.toggleTooth}
                        statusConfig={toothFaceStatuses}
                        setFace={this.setFace}
                      />
                    )
                  })}
                </div>
                <Toolbar
                  options={toolbarOptions}
                  handleAction={this.handleStatusSelectorChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className='row my-3'>
          <div className='col-12'>
            <button
              type='button'
              className='btn btn-success mx-2'
              onClick={this.saveData}
              disabled={this.state.isSaving}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
