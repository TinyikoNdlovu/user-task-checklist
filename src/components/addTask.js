import * as React from 'react';
import { TextField, Typography, Container } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { NativeSelect } from '@mui/material';

import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const AddTask = () => {
    const [priority, setPriority] = React.useState('');

    return (
        <section>
                <Container className="container-tasks" align="center">

                    <Typography variant='subtitle2'>Tasks</Typography>
                    <TextField required label="Add New Task" type="text" style={{width: '40%'}}></TextField>

                    <InputLabel htmlFor="select">Priority</InputLabel>
                    <NativeSelect id="select">
                        <option value="high">High</option>
                        <option value="medium">Medium</option>
                        <option value="low">Low</option>
                    </NativeSelect>


                    
                    <Fab style={{marginTop: '20px', backgroundColor: '#00695c'}}>
                        <AddIcon />
                    </Fab>

                   

                
                </Container>
            </section>
    )
}

export default AddTask;