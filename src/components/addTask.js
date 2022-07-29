import React, { useState} from 'react';
import { TextField, Typography, Container } from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { Fab } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

import '../css/addTask.css';

import { db } from '../firebase-config';
import { addDoc, collection } from 'firebase/firestore';

const AddTask = ({setInputField, props, tasks, setTasks, inputField, submitTaskHandler}) => {
    
    const [task, setTask] = useState([]);
    const [priorityType, setPriorityType] = useState('');

    // const [priority, setPriority] = useState('');

    const inputFieldHandler = (e) => {
        console.log(e.target.value);
        setInputField(e.target.value);
    };

    return (
        <section>
                <Container className="container-tasks" align="center">

                    <Typography variant='subtitle2'>Tasks</Typography>
                    <TextField value={inputField} onChange={inputFieldHandler} required label="Add New Task" type="text" style={{width: '30%'}}></TextField>

                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priorityType}
                    label="Priority"
                    onChange={(e) => setPriorityType(e.target.value)} >
                        <MenuItem value={'high'}>High</MenuItem>
                        <MenuItem value={'Medium'}>Medium</MenuItem>
                        <MenuItem value={'Low'}>Low</MenuItem>
                    </Select>


                    
                    <Fab style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '15px', width: '45px', color: '#fff'}} onClick={submitTaskHandler}>
                        <AddIcon />
                    </Fab>

                   

                
                </Container>
            </section>
    );
}

export default AddTask;

