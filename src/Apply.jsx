import React, { Component } from 'react';
import axios from 'axios'

class Apply extends Component {
    constructor(props){
        super(props)

        this.state= {
            college: '',
            programme: ''
        }
    }
   
    componentDidMount(){
        axios.get('http://localhost:8000/courses' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    college: response.data.college,
                    programme: response.data.programme
                })
            })
            .catch(error => console.log(error))
    }

    onChangeProgramme=(event)=>{
        this.setState({
            programme: event.target.value
        })
    }
    onChangeCollege=(event)=>{
        this.setState({
            college: event.target.value
        })
    }

    render() { 
        return ( 
            <div className="space3">
                <div>
                    <h1> OFFICE OF THE ACADEMIC REGISTRAR</h1>
                    <h4 className="space2">APPLICATION FORM FOR ADMISSION TO THE DEGREE PROGRAMME FOR 2020/2021 ACADEMIC YEAR</h4>
                 </div>

                 <section>
                    <h5 className="space2"> Guidelines for Application </h5>
                    <article>
                        <p>
                        (i) This form should be completed and submitted to the Academic Registrar (Admissions) Makerere University.
                        </p>
                        <p>
                        (ii) Each candidate MUST attach copies of the ‘O’, A’Level Certificates (or their equivalent) and a Certified copy of the
                        relevant Diploma Transcript from the Awarding Institution.
                        </p>
                        <p>
                        (iii) Each candidate MUST attach the original receipt for payment of the application fee.
                        </p>
                        <p>
                        (iv) Names should be those that appear on the ‘O’, A’Level and Diploma Certificates/Transcripts.
                        </p>
                        <p>
                        (v) Applicants who hold 3rd Class or Pass Diplomas need not apply since they do not meet the admission requirements.

                        </p>
                        <p>
                        (vi) Indicate the subject combination you are applying for (see appendix on page 3) B.ED 
                        </p>
                    </article>
                 </section>
                 
                 <section className="space">
                 <form action="https://formspree.io/f/xaylqnnj" method="POST">
                 <div className="form-group">
                        <label hmtlFor="inputProgramme">DEGREE/ PROGRAMME</label>

                        <input type="text" className="form-control" id="programme" name="degree_programme" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="inputCollege">College Attached</label>
                        <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text" htmlFor="inputGroupSelect01">Options</label>
                    </div>
                    <select className="custom-select" id="inputGroupSelect01" name="college_selected" >
                        <option defaultValue>Choose...</option>
                        <option value= "College of Agricultural and Environmental"  > College of Agricultural and Environmental Sciences </option>
                        <option value="College of Humanities and Social Sciences" name="college_selected" > College of Humanities and Social Sciences </option>
                        <option value="College of Education and External Studies"  name="college_selected"> College of Education and External Studies </option>
                        <option value="College of Health Sciences" name="college_selected"> College of Health Sciences </option>
                        <option value="College of Natural Sciences" name="college_selected"> College of Natural Sciences </option>
                        <option value="College of Business and Management Studies" name="college_selected"> College of Business and Management Studies </option>
                        <option value="College of Engineering, Design,  Art and Technology" name="college_selected"> College of Engineering, Design,  Art and Technology </option>
                        <option value="College of Veterinary Medicine, Animal Resources and Bio-Security" name="college_selected"> College of Veterinary Medicine, Animal Resources and Bio-Security </option>
                        <option value="School of LawSchool of Law" name="college_selected"> School of Law </option>
                    </select>
                </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputEmail4">Surname (in Block letters)</label>
                        <input type="text" className="form-control" id="inputEmail4" name="surname"/>
                        </div>

                        <div className="form-group col-md-6">
                        <label for="inputPassword4">Other Names (as they appear on Academic Documents)</label>
                        <input type="text" className="form-control" id="inputPassword4" name="other_names"/>
                        </div>
                    </div>

                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label for="inputAddress">Date of Birth</label>
                            
                            <input type="date" className="form-control" id="input Date" name="date_of_birth"/>
                        </div>

                        {/* upload birth Certificate */}
                        <div className="form-group col-md-6">
                                                                               
                            <label for="inputAddress">Upload Birth Certificate</label>
                                <div className="custom-file mb-3">
                                <input type="file" className="custom-file-input" id="customFile" name="birth_certificate" />
                                <label className="custom-file-label" for="customFile">Choose file</label>
                                </div>
                        </div>

                    </div>

                    <div className="form-group">
                        <label for="inputAddress2">Home District</label>
                        <input type="text" className="form-control" id="inputAddress2" name="home_district" />
                    </div>

                    <div className="form-group">
                        <label for="inputAddress2">Nationality</label>
                        <input type="text" className="form-control" id="inputAddress2" name="nationality" />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputCity">Personal Contact Address</label>
                        <input type="text" className="form-control" id="inputCity" name="personal_contact_address"/>
                        </div>

                        <div className="form-group col-md-6">
                        <label for="inputState">Permanent Address</label>
                        <input type="text" className="form-control" id="inputCity" name="permanent_address"/>
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label for="inputTelephone"> Telephone Number</label>
                        <input type="number" className="form-control" id="inputTelephone" name="telephone_number"/>
                        </div>

                        <div className="form-group col-md-6">
                        <label for="inputEmail4">E-mail</label>
                        <input type="email" className="form-control" id="inputEmail4" name="email"/>
                        </div>

                    </div>

                    <div className="form-group">
                        <p> Give full details of all Education qualifications obtained </p>
                        <ul>
                            <li>
                                <p>
                                (a). Uganda Certificate of Education or its equivalent
                                </p>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputIndex"> INDEX NO: </label>
                                        <input type="text" className="form-control" id="inputIndex" name="index_no_uce" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label for="inputIndex"> YEAR OF EXAMINATION: </label>
                                        <input type="number" className="form-control" id="inputExam Year" name="exam_year_uce" />
                                    </div>
                                </div>
                            </li>

                            <li>
                                <p>
                                (a). Uganda Advanced Certificate of Education or its equivalent
                                </p>

                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label for="inputIndex"> INDEX NO: </label>
                                        <input type="text" className="form-control" id="inputIndex" name="index_no_uace" />
                                    </div>

                                    <div className="form-group col-md-6">
                                        <label for="inputIndex"> YEAR OF EXAMINATION: </label>
                                        <input type="number" className="form-control" id="inputExamYear" name="exam_year_uace" />
                                    </div>
                                </div>

                                <table className="table table-bordered">
                                    <thead>
                                        <tr>
                                        <th scope="col"> Subject </th>
                                        <th scope="col"> Grade </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> <input type="text" className="form-control" id="inputSubject" name="subject_1" placeholder="e.g Physics"/>  </td>
                                            <td> <input type="text" className="form-control" id="inputGrade" name="grade_1" placeholder="e.g A"/> </td>
                                        </tr>
                                        <tr>
                                            <td> <input type="text" className="form-control" id="inputSubject" name="subject_2" placeholder="e.g Economics"/>  </td>
                                            <td> <input type="text" className="form-control" id="inputGrade" name="grade_2" placeholder="e.g B"/> </td>
                                        </tr>
                                        <tr>
                                            <td> <input type="text" className="form-control" id="inputSubject" name="subject_3" placeholder="e.g Math"/>  </td>
                                            <td> <input type="text" className="form-control" id="inputGrade" name="grade_3" placeholder="e.g C"/> </td>
                                        </tr>
                                        <tr>
                                            <td> <input type="text" className="form-control" id="inputSubject" name="subject_4" placeholder="e.g Sub-IT"/>  </td>
                                            <td> <input type="text" className="form-control" id="inputGrade" name="grade_4" placeholder="e.g 1"/> </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </li>

                            <li>
                                <p>
                                (c). Other Qualifications. (Attach documents if necessary)
                                </p>

                                <div className="form-row">
                                    <textarea type="text" className="form-control" id="inputQualifications" name="other_qualifications">
                                    
                                    </textarea>
                                </div>
                            </li>
                        </ul>
                        {/* <label for="inputAddress2">Nationality</label>
                        <input type="text" className="form-control" id="inputAddress2" name="nationality" /> */}
                    </div>

                    <div className="space">
                    <p>
                    It should be NOTED by all applicants that cases of impersonation, Falsification of Documents or giving
                    false/incomplete information whenever discovered either at Registration or afterwards will lead to automatic
                    CANCELLATION of admission and prosecution in the Uganda Courts of Law.
                    </p>

                    <p>
                    <b>Declaration by the applicant</b>
                    I have noted and understood the implication of giving incorrect information, I confirm that the information given on
                    this form, to the best of my knowledge, is correct
                    </p>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputSignature"> <b>Signature of Applicant: </b> </label>
                            <input type="text" className="form-control" id="inputSignature" name="signature" />
                        </div>

                        <div className="form-group col-md-6">
                            <label for="inputDateSigned"> <b> Date: </b> </label>
                            <input type="date" className="form-control" id="inputDateSigned" name="date_of_Signage" />
                        </div>
                        
                    </div>

                    <button type="submit" className="btn btn-primary">Submit Application</button>
                    </form>
                 </section>

                 
            </div>
         );
    }
}
 
export default Apply;