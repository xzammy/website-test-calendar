import React from "react"
import { Container, TextField, FormControl, InputLabel, Select, MenuItem, Typography, ListSubheader } from "@material-ui/core"




const styles = (theme) => ({
    item: {
        paddingLeft: 3 * theme.spacing.unit,
    },
    group: {
        fontWeight: theme.typography.fontWeightMedium,
        opacity: 1,
    },
});

class StudentPage extends React.Component {

    render() {
        return (
            <>

                <Container maxWidth="sm" style={{ margin: `1em 1em 0 0` }} > <div>
                    <Typography variant="h3" >
                        學生課表
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
                    <div className={styles}>
                        <FormControl style={{ width: `100%`, height: `100%` }} responsive="true" >
                            <InputLabel id="demo-simple-select-label" responsive="true">
                                學生年級
                </InputLabel>

                            <Select

                                labelId="demo-simple-select-label"
                                id="demo-simple-select">
                                <ListSubheader className={styles.group}>
                                    國小
                        </ListSubheader>
                                <MenuItem value={0} className={styles.item}>
                                    四年級
                  </MenuItem>
                                <MenuItem value={1} className={styles.item}>五年級</MenuItem>
                                <MenuItem value={2}>六年級</MenuItem>
                                <ListSubheader className={styles.group}>
                                    國中
                        </ListSubheader>
                                <MenuItem value={4}>七年級</MenuItem>
                                <MenuItem value={5}>八年級</MenuItem>
                                <MenuItem value={6}>九年級</MenuItem>


                                <ListSubheader className={styles.group}>
                                    高中
                        </ListSubheader>
                                <MenuItem value={7}>十年級</MenuItem>
                                <MenuItem value={8}>十一年級</MenuItem>
                                <MenuItem value={9}>十二年級</MenuItem>
                            </Select>

                        </FormControl>

                        <FormControl style={{ width: `100%`, height: `100%` }} responsive="true" >
                            <InputLabel id="demo-simple-select-label" responsive="true">
                                課程類別
                </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="classType"
                                style={{ width: `100%` }}>
                                <MenuItem value={0} >
                                    正式
                  </MenuItem>
                                <MenuItem value={1}>尊榮</MenuItem>
                                <MenuItem value={2}>體驗</MenuItem>
                                <MenuItem value={3}>自購</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                </div>
                </Container>

            </>
        );
    }
}

export default StudentPage

