import React, { Component } from 'react'
import fire from './fire'
import firebase from 'firebase';


class SignUp extends Component {
    
    login(){
        const email = document.querySelector("#email").value
        const password = document.querySelector('#password').value

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then ((u) => {
                console.log('Successfully Logged In')
            })
            .catch((err) => {
                console.log("Error: " + err.toString())
            })
    }

    signup(){
        const email = document.querySelector("#email").value
        const password = document.querySelector('#password').value

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then ((u) => {
                console.log('Successfully Signed up')
            })
            .catch((err) => {
                console.log("Error: " + err.toString())
            })
    }

    render() { 
        return ( 
            <div className="height">
                <div className="container h-100">
                    <div className="d-flex justify-content-center h-100">
                        <div className="user_card">
                            <div className="d-flex justify-content-center">
                                <div className="brand_logo_container">
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1601854035/enrollment/adrian-dascal-Ar4uu5YKLK4-unsplash_qgubfe.jpg" className="brand_logo" alt="Logo" />
                                </div>
                            </div>
                            <div className="d-flex justify-content-center form_container">
                                <form>
                                    <div className="input-group mb-3">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-envelope"></i></span>
                                        </div>
                                        <input type="text" name="email" className="form-control input_user" id="email" placeholder="email" />
                                    </div>

                                    <div className="input-group mb-2">
                                        <div className="input-group-append">
                                            <span className="input-group-text"><i className="fas fa-key"></i></span>
                                        </div>
                                        <input type="password" name="password" className="form-control input_pass" id="password" placeholder="password" />
                                    </div>

                                    <div className="form-group">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="customControlInline" />
                                            <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-center mt-3 login_container">
                                        <button type="button" name="button" className="btn login_btn" onClick={this.login}>Login</button>
                                    </div>
                                </form>
                            </div>
                    
                            <div className="mt-4">
                                <div className="d-flex justify-content-center links">
                                    <p>Don't have an account? </p>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                    <button className="btn login_btn" onClick={this.signup}>Sign Up</button>
                                    </div>

                                    <div className="col-md-8">
                                    <button className="btn login_btn">Forgot your password?</button>
                                    </div> 

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default SignUp;
