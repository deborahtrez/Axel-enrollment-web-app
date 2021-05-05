import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class OneCourse extends Component {
    
    render() { 
        return ( 
            
                <tr>
                    <td> <b>{this.props.onecourse.college}</b></td>
                    <td> {this.props.onecourse.programme}</td>
                    <td> {this.props.onecourse.essentialSubjects}</td>
                    <td> {this.props.onecourse.relevantSubjects}</td>
                    <td> {this.props.onecourse.desirableSubjects}</td>
                    <td> <Link to="/apply" ><button type="button" className="btn btn-info">Enroll</button></Link> </td>
                </tr>
            
         );
    }
}
 
export default OneCourse;