import React from "react";
import { TextField, Container, FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

class App extends React.Component {
    render() {
        return (
            <div>

                <TextField id="standard-required" label="學生姓名" />
                <br />
                <TextField id="standard-basic" label="家長姓名" />
                <br />
                <TextField id="standard-basic" label="家長電話" />
                <br />
                <TextField id="standard-basic" label="家中電話" />
                <br />
                <TextField id="standard-basic" label="帳號名稱" />
                <br />
                <Container style={{ maxWidth: `100%` }}>
                    <FormControl>
                        <InputLabel id="demo-simple-select-label" responsive="true">
                            學生年級
                </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            style={{ width: `100%`, height: `100%` }}
                        >
                            <MenuItem value={10} style={{ width: `100%` }}>
                                Ten
                  </MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Container>

                <br />
            </div>
        );
    }
}

export default App;