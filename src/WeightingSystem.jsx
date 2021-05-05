import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class WeightingSystem extends Component {

    render() { 
        return ( 
            <div className="container space3">
                <h2> DETAILED WEIGHTING SYSTEM FOR PROGRAMMES OFFERED AT UNIVERSITY </h2>
                <p className ="importantToNote">IMPORTANT TO NOTE:    That the existing Weighting System shown below applies to all the five Public Universities. Candidates are therefore advised to study and understand the weighting system before completing PUJAB forms and ensure that they get access to an updated weighting system for 2013/2014 Admissions.</p>

                <div className="space1">
                    <h2> WEIGHTING CRITERIA </h2>
                    <p className="weightingCriteria">All subjects taken at the Advanced Level of Education are grouped into four categories and weighted as follows for purposes of admission to any programme of Undergraduate study in the University.</p>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col"> Subject </th>
                            <th scope="col"> Category </th>
                            <th scope="col"> Weight </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">(i)</th>
                                <td> Essential </td>
                                <td> 3 </td>
                            </tr>
                            <tr>
                                <th scope="row">(ii)</th>
                                <td> Relevant</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <th scope="row">(iii)</th>
                                <td> Desirable</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <th scope="row">(iv)</th>
                                <td> Others</td>
                                <td>0.5</td>
                            </tr>
                        </tbody>
                    </table>

                    <p>
                    The Essential A’ Level subjects for University Programmes must be passed with at least a Principal Pass.
                    </p>
                    <p>
                        For a given candidate, not more than three subjects taken at the principal level shall carry a weight of 3, 2, or 1.  
                    </p>  
                    <p>
                       For a given candidate, principal level subjects in excess of the three defined in 1.1 (i) to (iii) above, shall be designated as “Others” and shall carry a weight of 0.5
                    </p>
                    <p>
                       Not more than two subjects shall be designated as “Essential”.
                    </p>
                    <p>
                       A pass in a subject taken at subsidiary level such as General Paper, shall carry one point. A subsidiary pass ranges from grades 1 to 6.
                    </p>
                    <p>
                       In case of programmes where “Essential” subjects may be three or more, an “Essential set” of subjects is defined. The best-performed two subjects of the essential set shall be designated as “Essential Subjects” and weighted three. The 3rd best done subjects from the Essential Set shall be designated as the “Relevant Subject” and weighted two.
                    </p>
                    <p>
                       When computing points special programme requirements are also taken into     consideration.
                    </p>
                    <p>
                       For ‘O’ level grades, Distinctions 1 & 2 carry 0.3 points, Credits 3 to 6 carry 0.2 ,Passes 7 & 8 carry 0.1 and Fail (9) carry  0.0 weights respectively.
                    </p>
                    <p>
                       For A’ Level grades, the conversion scale is A=6, B=5, C=4, D=3, E=2, O=1, F=0 points.
                    </p>
                    <p className="weightingCriteria">
                    <div> <h5>    THE COMBINED WEIGHT OF A CANDIDATE FOR ADMISSION TO THE UNIVERSITY</h5> </div>

                    a)    The O’Level weight of a candidate for any programme in the University, is obtained by multiplying the numbers of Distinctions/Credits/Passes, by the relevant weights and adding up for the Distinctions, Credits and passes actually obtained by the candidate.
                    </p>
                    <p>
                    b)    The A’Level weight, for a given programme, of a candidate is obtained by multiplying each subject grade point by the relevant weighting factor and adding up for all the subjects taken and passed.
                    </p>
                    <p>
                    c)    The combined weight of a candidate for a given programme, is obtained by adding the O’Level weight obtained (a) above to the A’Level weight obtained (b) above.  The best candidate for each programme is the one with the highest combined weight.
                    </p>
                    <p>
                    d)    Candidates are selected on merit from those who apply for a programme as their first choice plus those who apply for the programme as 2nd, 3rd, 4th choice etc., if they have not been admitted to programmes of their earlier choices.  All choices are considered.
                    </p>
                    <p>
                    Additionally, Makerere University has 10 Constituent Colleges whose weighting systems are unique.
                    </p>
                    <p>
                    Please <a href="https://news.mak.ac.ug/2016/11/public-universities-joint-admissions-information-2017-2018/">click here </a> to view the detailed waiting system by Academic Unit.
                    </p>

                    <Link to="/courses"><button type="button" className="btn btn-info">Apply for a Course  here </button></Link>
                </div>
            </div>
         );
    }
}
 
export default WeightingSystem;