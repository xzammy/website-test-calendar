import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import Example from "./pages/NavBar"
import 'typeface-roboto';


class App extends React.Component {
  render() {
    return (

      <>
        <Example></Example>

        <Container fixed>



        </Container>

      </>
    );
  }
}
export default App;
