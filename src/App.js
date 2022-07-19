import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
// import HomePage from './components/HomePage';
import { app } from './firebase-config';
import { async } from '@firebase/util';

import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';

function App() {

  const navigate = useNavigate();

  const auth = getAuth(app);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerUserWithEmail = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password).then(() => {

      alert(fullName + "" + "registered successfully");
      navigate("/")
    })
    .catch(error => {
      alert(error.message);
    }) 
  };

  return (
    
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/registeruser' element={<RegisterUser registerUserWithEmail={registerUserWithEmail} setFullName={setFullName} setEmail={setEmail} setPassword={setPassword} />} />
        </Routes>
  );
}

export default App;
