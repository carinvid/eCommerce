import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect} from "react";
import { Switch, Route } from 'react-router-dom';
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/auth/Home'
import Header from "./components/nav/Header"
import RegisterComplete from './pages/auth/RegisterComplete';

import { auth } from './firebase';
import { useDispatch } from 'react-redux'



const App= () => {
  const dispatch = useDispatch()

  // to check firebase auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if(user) {
        const idTokenResult = await user.getIdTokenResult()
        console.log('user', user);
        dispatch: "LOGGED_IN_USER"
        payload: {
          name: 'Ryan'
        }
      }
    })

  }, [])
      return (
        <>
          <Header />
          <ToastContainer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/register/complete" component={RegisterComplete} />
            </Switch>
          </>
      )
      };

  


export default App;
