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
import Task from './task';

const AddTask = ({setInputField, props, tasks, setTasks, inputField}) => {
    
    const [task, setTask] = useState([]);
    const [priorityType, setPriorityType] = useState('');

    // const [priority, setPriority] = useState('');

    const inputFieldHandler = (e) => {
        console.log(e.target.value);
        setInputField(e.target.value);
    };

    function addTodoTask (e) {
        e.preventDefault();
        
       
    }

    return (
        <section>
                <Container className="container-tasks" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>

                    <Typography variant='subtitle2'>Tasks</Typography>
                    <TextField value={task} onChange={(e) => setTask(e.target.value)} required label="Add New Task" type="text" style={{width: '30%'}}></TextField>

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
                    
                    <Fab type='submit' style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '15px', width: '45px', color: '#fff'}} onClick={addTodoTask}>
                        <AddIcon />
                    </Fab>
                
                </Container>
            </section>
    );
}

export default AddTask;

