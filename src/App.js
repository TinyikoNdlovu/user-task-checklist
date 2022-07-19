import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './components/LoginPage';
import RegisterUser from './components/RegisterUser';
// import HomePage from './components/HomePage';
import { app } from './firebase-config';
import { async } from '@firebase/util';

import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from 'firebase/auth';

function App() {

  const auth = getAuth(app);

  const fullNameCollection = collection(db, "users");

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //function to create new user
  const registerUserWithEmail = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password).then(() => {

      addDoc(fullNameCollection, {fullName: fullName, email: email});
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
