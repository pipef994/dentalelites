import React, { component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'react-bootstrap'

class Logout extends React.Component {
  state = { 
    navigate: false
   };

 componentDidMount (){
   localStorage.removeItem('email');
   this.setState({ navigate: true})
   this.props.updateLogin(undefined)
 } ; 

  render() { 
    const { navigate } = this.state;
    if (navigate) {
      return <Redirect to="/login" push={true}/>;
    }else{
      return null;
    }
  }
}
 
export default Logout;
