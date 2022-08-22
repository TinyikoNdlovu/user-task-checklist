import React, { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import RegisterUser from './pages/RegisterUser';
import HomePage from './pages/HomePage';
import { app } from './firebase-config';
import { async } from '@firebase/util';

import { db } from './firebase-config';
import { query, collection, addDoc, getDocs, deleteDoc, doc, onSnapshot, QuerySnapshot } from 'firebase/firestore';

import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  updateProfile, 
  signOut, 
  
  onAuthStateChanged } from 'firebase/auth';


function App() {

  const auth = getAuth(app);

  const fullNameCollection = collection(db, "users");

  const googleProvider = new GoogleAuthProvider();

  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [email2, setEmail2] = useState("");
  const [password2, setPassword2] = useState("");

  const [user, setUser] = useState({});
  const [task, setTask] = useState([]);
  const collectionRef = collection(db, "tasks");

  const [priorityType, setPriorityType] = useState('');

  const [priority, setPriority] = useState([]);

  //function to create new user
  const registerUserWithEmail = async () => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password).then(async(userCredential) => {

      const displayName = fullName;
      setUser(() => ({...userCredential.user}));

      await updateProfile(auth.currentUser, {displayName: displayName}).then().catch()

      addDoc(fullNameCollection, {fullName: fullName, email: email});
      alert(fullName + " registered successfully");
      navigate("/")
    })
    .catch(error => {
      alert(error.message);
    }) 
  };

  //function to Register with Google Account
  const registerWithGoogle = async () => {}

  //function to Login with Email
  const loginWithEmail = async () => {
    await signInWithEmailAndPassword(auth, email2, password2).then((results) => {
      console.log(email2);
      const newUser = results.user;
      setUser(newUser);
      navigate("/homepage")
    }).catch(error => {
      alert(error.message);
      console.log(email2);
    })
  }

  //function to Login with Google Account
  const loginWithGoogle = async () => {
    await signInWithPopup(auth, googleProvider).then((result) => {

      // The signed-in user info.
    setUser(() => ({...result.user}));
    navigate("/homepage");
    }).catch ((error) => {
      alert((error.message));
    })
  }

  //function to Logout a User
  const logOut = async () => {
    await signOut(auth).then(() => {
      setUser({});
      alert("Log out successful");
      navigate("/")
    }).catch((error) => {
      alert((error.message));
    })
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    }
  }, []);

  const getTasks = async() => {
    const data = await getDocs(collectionRef);
    setTask(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  };

  //Create Task Todo
  //Read task from firebase
 const addPriority = ((task, priorityType) => {

  setPriority((tasks) => [...tasks, {
    task:task,
    priorityType:priorityType
  }])
 })

  //Update task in firebase
  //Delete task
  const deleteTask = async(id) => {
    let data = await doc(collectionRef, id);
    await deleteDoc(data).then(getTasks());
};

  return (
    
        <Routes>
          <Route path='/' element={<LoginPage login={loginWithGoogle} loginWithEmail={loginWithEmail} setPwd={setPassword2} setEmail={setEmail2} loginWithGoogle={loginWithGoogle} />} />
          <Route path='/registeruser' element={<RegisterUser registerUserWithEmail={registerUserWithEmail} setFullName={setFullName} setEmail={setEmail} setPassword={setPassword} />} />
          <Route path='/homepage' element={<HomePage user={user} logout={logOut} getTask={getTasks} list={priority} add={addPriority} setPriority={setPriority} deleteTask={deleteTask} />} />
        </Routes>
  );
}

export default App;
