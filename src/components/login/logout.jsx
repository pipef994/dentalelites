import React, { component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class Logout extends React.Component {
  state = { 
    navigate: true
   };

  render() { 
    const { navigate } = this.state;
    if (navigate) {
    localStorage.removeItem('email');
      return <Redirect to="/login" push={true}/>;
    }
  }
}
 
export default Logout;
