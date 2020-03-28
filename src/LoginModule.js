import React from 'react';
import './App.css';
import { TextField, Button } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';




class Login extends React.Component {
    render() {
        return (

            <React.Fragment>

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
                        onClick={() => { alert('hi'); }}
                    >
                        登入
      </Button>
                </form>


            </React.Fragment>

        );
    }
}
export default Login;
