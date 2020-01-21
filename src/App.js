import React from 'react';
import './App.css';
import { AppBar, Toolbar, Container, TextField, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function App() {
  return (

    <React.Fragment>
      <AppBar position="fixed" color="#0d47a1">
        <Toolbar>{"歡迎來到我的網站demo"}</Toolbar>
      </AppBar>
      <Toolbar />

      <Container>
        <hgroup>
          <h1>請登入</h1>
        </hgroup>
        <form>
          <div class="group">
            <TextField id="outlined-basic" label="帳號" variant="outlined" fullWidth="true" />
          </div>
          <div class="group">
            <TextField id="outlined-basic" label="密碼" variant="outlined" fullWidth="true" type="password" />
          </div>
          <Button
            variant="contained"
            color="default"
            endIcon={<KeyboardArrowRightIcon />}
          >
            登入
      </Button>
        </form>


      </Container>
    </React.Fragment>

  );
}

export default App;
