import React, { Component } from "react";
import { Button } from '@material-ui/core'

const Styles = theme =>({
  button: {
    fontSize: '15px',
    padding: '5px 20px',
    border: 0,
    borderRadius: 3,
    backgroundColor: '#09ca9aef',
    color: '#fff',
    transition: 'all 250ms ease -in -out',
    cursor: 'pointer',
  }
})

class inhabilitaUsuario extends React.Component {
  constructor(args) {
    super(args);
    this.state = {
      nId: null
    };
  }


  render() {
    const { classes } = this.props;
    return (
      <form action="">
        <div className="col-sm-5">
          <label htmlFor="nId">Número de Identificación</label>
          <input type="text" id="nId" name="nId" />
        </div>
        <br />
        <div className="col-sm-2">
          <Button
            // onClick={this.save.bind(this)}
            // type="button"
            className={classes.juanito}
            variant="contained" color="primary" align="center">
            Crear{" "}
          </Button>
        </div>
      </form>
    )
  }
}

