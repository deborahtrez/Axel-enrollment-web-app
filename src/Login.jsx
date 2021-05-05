import React, { Component } from 'react'
import Home from './Home'
import Signup from './SignUp'
import fire from './fire'
import * as firebase from 'firebase'; 

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: null
        }
    }

    authListener =()=>{
        firebase.auth().onAuthStateChanged((user) =>{
            if(user) {
                this.setState({user});
            }
            else {
                this.setState({user: null});
            }
        })
    }

    componentDidMount(){
        this.authListener()
    }

    render() { 
        return ( 
            <div>
                {this.state.user ? (<Home/>) : (<Signup />)}
           </div>
         );
    }
}
 
export default Login;