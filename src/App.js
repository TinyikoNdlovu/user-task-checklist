import React, { useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import HomePage from './pages/HomePage';
import { app } from './firebase-config';
import { async } from '@firebase/util';

import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

function App() {

  const auth = getAuth(app);

  const fullNameCollection = collection(db, "users");

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState({});

  //function to create new user
  const registerUserWithEmail = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password).then(() => {

      addDoc(fullNameCollection, {fullName: fullName, email: email});
      alert(fullName + " registered successfully");
      navigate("/")
    })
    .catch(error => {
      alert(error.message);
    }) 
  };

  const registerWithGoogle = async () => {}

  const loginWithEmail = async () => {}

  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((result) => {

      // The signed-in user info.
    setUser(() => ({...result.user}));
    navigate("/homepage");
    }).catch ((error) => {
      alert((error.message));
    })
  }

  const logOut = async () => {
    await signOut(auth).then(() => {
      setUser({});
      alert("Log out successful");
      navigate("/")
    }).catch((error) => {
      alert((error.message));
    })
  }

  return (
    
        <Routes>
          <Route path='/' element={<LoginPage login={loginWithGoogle} />} />
          <Route path='/registeruser' element={<RegisterUser registerUserWithEmail={registerUserWithEmail} setFullName={setFullName} setEmail={setEmail} setPassword={setPassword} />} />
          <Route path='/homepage' element={<HomePage user={user} logout={logOut} />} />
        </Routes>
  );
}

export default App;
