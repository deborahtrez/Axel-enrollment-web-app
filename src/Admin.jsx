import React, {Component} from 'react';
import axios from 'axios';

class Admin extends Component {
    constructor(props) {
        super(props)

        //setting initial states
        this.state= {
            college: '',
            programme: '',
            essentialSubjects: '',
            relevantSubjects: '',
            desirableSubjects: ''
        }
    }

    onChangeCollege=(event)=>{
        this.setState({college: event.target.value})
    }
    onChangeProgramme=(event)=>{
        this.setState({programme: event.target.value})
    }
    onChangeEssentialSubjects=(event)=>{
        this.setState({essentialSubjects: event.target.value})
    }
    onChangeRelevantSubjects=(event)=>{
        this.setState({relevantSubjects: event.target.value})
    }
    onChangeDesirableSubjects=(event)=>{
        this.setState({desirableSubjects: event.target.value})
    }

    onSubmit =(event) =>{
        event.preventDefault()

        console.log('Form Submitted')

        const newCourse = {
            college:this.state.college,
            programme: this.state.programme,
            essentialSubjects: this.state.essentialSubjects,
            relevantSubjects: this.state.relevantSubjects,
            desirableSubjects: this.state.desirableSubjects
        }
        axios.post('http://localhost:8000/courses/admin', newCourse)
            .then(response => console.log(response.data))
            .catch(() => console.log('Error creating new course'))

        this.setState({
            college: '',
            programme: '',
            essentialSubjects: '',
            relevantSubjects: '',
            desirableSubjects: ''
        })
    }

   

    render(){
        // const {college} = this.state;
        
    return (
        <div className="space3">
            <h3>Add a Course to the Database</h3>
        <form autoComplete="on" onSubmit={this.onSubmit} className="space"> 
            <div className="form-group">
                 <label htmlFor="exampleInputEmail1">COLLEGE OF STUDY</label>
                 {/* <input type="text" className="form-control" name="programme"  value={this.state.college} onChange={this.onChangeCollege}/> */}
                
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" onChange={this.onChangeCollege} >
                        <option defaultValue>Choose...</option>
                        <option value= "College of Agricultural and Environmental"  > College of Agricultural and Environmental Sciences </option>
                        <option value="College of Humanities and Social Sciences" onChange={this.onChangeCollege} > College of Humanities and Social Sciences </option>
                        <option value="College of Education and External Studies"  > College of Education and External Studies </option>
                        <option value="College of Health Sciences" > College of Health Sciences </option>
                        <option value="College of Natural Sciences" > College of Natural Sciences </option>
                        <option value="College of Business and Management Studies" > College of Business and Management Studies </option>
                        <option value="College of Engineering, Design,  Art and Technology" > College of Engineering, Design,  Art and Technology </option>
                        <option value="College of Veterinary Medicine, Animal Resources and Bio-Security" > College of Veterinary Medicine, Animal Resources and Bio-Security </option>
                        <option value="School of LawSchool of Law" > School of Law </option>
                    </select>
                </div>


            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Programme</label>
                <input type="text" className="form-control" name="programme"  value={this.state.programme} onChange={this.onChangeProgramme}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Essential Subjects</label>
                <input type="text" className="form-control" name="essentialSubjects"  value={this.state.essentialSubjects} onChange={this.onChangeEssentialSubjects}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Relevant Subjects</label>
                <input type="text" className="form-control" name="relevantSubjects"  value={this.state.relevantSubjects} onChange={this.onChangeRelevantSubjects}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Desirable Subjects</label>
                <input type="text" className="form-control" name="desirableSubjects"  value={this.state.desirableSubjects} onChange={this.onChangeDesirableSubjects}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            </div>
    )
    }
}

export default Admin;
