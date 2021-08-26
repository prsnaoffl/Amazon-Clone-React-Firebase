import React,{useEffect} from 'react';
import Header from './Components/Header/Header';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './Pages/Home/Home';
import Checkout from './Pages/Checkout/Checkout';
import Login from './Pages/Login/Login';
import {auth} from "./Firebase";
import { useStateValue } from './Components/StateProvider/StateProvider';


const App = () => {
    const [{basket},dispatch]= useStateValue();
    useEffect(()=>{  //user data clear  during login and logout
        const unsubscribe=auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                dispatch({
                    type:"SET_USER",
                    user:authUser
                })
            }
            else{
                dispatch({
                    type:"SET_USER",
                    user:null
                })
            }
        })
        return()=>{
            unsubscribe();
        };
    },[dispatch])
    return (    
        <Router>
            <Switch>
                <Route exact path="/checkout">
                    <Header/>
                    <Checkout/>
                </Route>
                <Route exact path="/login">
                    <Login/>
                </Route>
                <Route exact path="/">
                    <Header/>
                    <Home/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
