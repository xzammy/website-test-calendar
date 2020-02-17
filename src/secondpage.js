import React from "react"
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Typography } from "@material-ui/core"


class SecondPage extends React.Component {

    render() {
        return (
            <>

                <Container maxWidth="sm" style={{ margin: '10% ' }}> <div>
                    <Typography variant="h3" >
                        新增 學生資訊
</Typography>
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

                    <FormControl style={{ width: `100%`, height: `100%` }} >
                        <InputLabel id="demo-simple-select-label" responsive="true">
                            學生年級
                </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select">
                            <MenuItem value={10} style={{ width: `100%` }}>
                                Ten
                  </MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>

                </div>
                </Container>
            </>
        );
    }
}

export default SecondPage