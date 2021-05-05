import React, { Component } from 'react';
import axios from 'axios'
import OneCourse from'./OneCourse'

class Courses extends Component {
    constructor(){
        super()
        this.state= {courses: []}
    }

    componentDidMount() {
        axios.get('http://localhost:8000/courses/')
            .then(response => {
                this.setState({courses: response.data})
            })
            .catch(error => console.log(error))
    }

    listCourses(){
        return this.state.courses.map(currentCourse => {
            return <OneCourse onecourse={currentCourse} key={currentCourse._id}/>
        })
    }

    render() {
        return (
            <div className="space3">
             <h2 className="space"> ENROLL FOR A COURSE</h2>
                <p className ="importantToNote">Enroll for  a course of your choice.</p>

                <table className="table table-striped" style={{ marginTop: 30 }} >
                    <thead >
                        <tr>
                            <th>COLLEGE</th>
                            <th>PROGRAMME</th>
                            <th>ESSENTIAL SUBJECTS</th>
                            <th>RELEVANT SUBJECTS</th>
                            <th>DESIRABLE SUJECTS</th>
                            <th> Action </th>
                        </tr>
                    </thead>

                    <tbody>
                        { this.listCourses() }
                    </tbody>
                </table>
            </div>
         );
    }
}

export default Courses;
