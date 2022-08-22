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

const AddTask = (props) => {
    
    const [task, setTask] = useState([]);
    const [priorityType, setPriorityType] = useState('');

    // const [priority, setPriority] = useState('');

    const add = (() => {
        const collectionRef = collection(db, "tasks");

        const priority = {
            task: task,
            priorityType: priorityType,
        };

        addDoc(collectionRef, priority).then(()=>{
            alert("Task added successfully");
        }).catch((error)=>{
            console.log(error);
        })

        props.add(task, priorityType);
    })

    const clearInput = () => {
        document.getElementById('new-task').value = "";
        document.getElementById('demo-simple-select').value = "select";
    }

    return (
        <section>
                <Container className="container-tasks" style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "center", marginBottom: "20px"}}>

                    <Typography variant='subtitle2'>Tasks</Typography>
                    <TextField id="new-task" value={task} onChange={(e) => setTask(e.target.value)} required label="Add New Task" type="text" style={{width: '30%'}}></TextField>

                    <InputLabel id="demo-simple-select-label">Priority</InputLabel>
                    <Select 
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={priorityType}
                    label="Priority"
                    onChange={(e) => setPriorityType(e.target.value)} >
                        <MenuItem value={'high'} >High</MenuItem>
                        <MenuItem value={'medium'}>Medium</MenuItem>
                        <MenuItem value={'low'}>Low</MenuItem>
                    </Select>
                    
                    <Fab type='submit' style={{marginTop: '20px', backgroundColor: '#00695c', borderRadius: '15px', width: '45px', color: '#fff'}} onClick={add} onSubmit={clearInput}>
                        <AddIcon />
                    </Fab>
                
                </Container>
            </section>
    );
}

export default AddTask;

