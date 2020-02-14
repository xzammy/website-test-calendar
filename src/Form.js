import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Form } from 'reactstrap';


const FormEx = (props) => {

    return (
        <Form>
            <div class="group">
                <TextField id="outlined-basic" label="學生姓名" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="家長姓名" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="家長電話" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="家中電話" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="使用帳號" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="帳號名稱" variant="outlined" fullWidth="true" />
            </div>
            <div class="group">
                <TextField id="outlined-basic" label="教課帳號" variant="outlined" fullWidth="true" />
            </div>






            <Button
                variant="contained"
                color="default"
                onClick={() => { alert('hi'); }}
            >
                提交
      </Button>


        </Form>








    );
}
export default FormEx;