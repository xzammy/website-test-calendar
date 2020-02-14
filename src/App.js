import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Example from "./pages/NavBar"
import Login from "./LoginModule"



class App extends React.Component {
  render() {
    return (

      <React.Fragment>

        <Example></Example>
        <Container><Login></Login></Container>
      </React.Fragment>

    );
  }
}
export default App;
