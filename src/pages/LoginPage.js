import { TextField, Typography, Button, Container } from "@mui/material";
import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

import "../css/Login.css";

const Login = ({loginWithEmail, login, setPwd, setEmail}) => {
    

    return (
        <div className="login-page">
            <aside></aside>
            <section>
                <Container align="center">
                    <Typography variant='h4' style={{marginBottom:'50px'}}>Welcome Back</Typography>

                    <Typography variant='h6' style={{marginBottom: '25px'}}>Manage Your Task Checklist Easily</Typography>

                    <Typography variant='subtitle2'>Email</Typography>
                    <TextField required label="Email" type="email" style={{width: '60%'}} onChange={e => setEmail(e.target.value)}></TextField>

                    <Typography variant='subtitle2'>Password</Typography>
                    <TextField required label="Password" type="password" style={{width: '60%'}} onChange={e => setPwd(e.target.value)}></TextField>
                    <div>
                        <Button variant='contained' color='primary' style={{marginTop: '20px', backgroundColor: '#00695c', width: '300px'}} onClick={() => loginWithEmail()}>Login</Button>
                    </div>

                    <Typography variant='body1' style={{marginTop:'20px'}}>Don't have an account? <Link to='/RegisterUser'>Create one</Link></Typography>
                    <Typography variant='h6' style={{margin:'opx 40px'}}>OR</Typography>

                <div>
                    <GoogleButton style={{backgroundColor: '#FFFFFF', color: '#00695c'}} onClick={() => login()}>Sign in with Google</GoogleButton>
                </div>
                </Container>
            </section>
            
        </div>
        
    )
}

export default Login;