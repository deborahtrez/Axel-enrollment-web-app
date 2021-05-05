import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import fire from './fire'
import * as firebase from 'firebase';

class Nav extends Component {

    logout() {
        firebase.auth().signOut();
    }

    render() { 
        return ( 
            <nav id="navbar" className="navbar navbar-expand-lg navbar-light bg-info">
                <div className="collapse navbar-collapse" id="navbarNav">
                
              <Link to="/home"><i className="fas fa-user-graduate"></i></Link>
            
                <Link to="/home" className="navbar-brand text-white">Novum Student Enrollment</Link>
                    <ul className="navbar-nav mx-auto">
                    
                    <li className="nav-item active">
                        <Link to='/home' className="nav-link text-white">Home</Link>
                    </li>
                    
                    <li className="nav-item active">
                        <Link to='/weightingsystem' className="nav-link text-white">Weighting System</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/courses' className="nav-link text-white" >Courses</Link>
                    </li>

                    <li className="nav-item">
                        <Link to='/admin' className="nav-link text-white" >Admin</Link>
                    </li>

                    <li className="nav-item">
                        <button onClick = {this.logout} className="btn bg-info" style={{color:'white'}}>Logout</button>
                    </li>
                   
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Nav;