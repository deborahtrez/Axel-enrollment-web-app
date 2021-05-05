import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import './index.css'
import Nav from './Nav'
import Home from './Home'
import SignUp from './SignUp'
import WeightingSystem from './WeightingSystem'
import Courses from './Courses'
import Apply from './Apply'
import Admin from './Admin'
import Footer from './Footer'
import Login from './Login'
import firebase from 'firebase';


class App extends Component {
    
    render() { 
        return ( 
            <BrowserRouter>
            {/* {this.state.user ? (<Home/>) : (<SignUp />)}) */}
                <Nav />
                    <div className="container">
                        <Route path ="/" exact component={Login} />  
                        <Route path="/home" component={ Home} />
                        <Route path ="/signup" component={SignUp} />
                        <Route path ="/weightingsystem" component={WeightingSystem} />
                        <Route path ="/courses" component={Courses} />
                        <Route path ="/apply" component={Apply} />
                        <Route path="/admin" component={Admin} />
                    </div>

                <Footer />    
            </BrowserRouter>
         );
    }
}
 
export default App;