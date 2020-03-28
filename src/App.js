import React from 'react';
import './App.css';
import { Container } from '@material-ui/core';
import NavBar from "./pages/NavBar"
import 'typeface-roboto';
import SignIn from "./pages/SignIn"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SecondPage from './secondpage';
import ThirdPage from "./thirdPage";
import StudentPage from "./Student";

class App extends React.Component {
  render() {
    return (

      <>
        <NavBar></NavBar>
        <Container fixed>


        </Container>
        <Router>
          <Switch>
            <Route exact path="/" component={SignIn}></Route>
            <Route path="/about" component={SecondPage}>
            </Route>
            <Route path="/student" component={StudentPage}>
            </Route>
            <Route path="/teacher" component={ThirdPage}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
