import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Home extends Component {

    render() { 
        return ( 
            <div className="space3">
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://res.cloudinary.com/deborahao/image/upload/v1601854036/enrollment/nesa-by-makers-IgUR1iX0mqM-unsplash_l4oprg.jpg" className="d-block w-100" alt="university student learning" />
                                    
                                    <div className="carousel-caption d-none d-md-block">
                                    <h2>Welcome to Novum Student Enrollment</h2>
                                    <p>We make the application process for straight-out-highschool students much easier! See what courses are available to you in the University of your choice</p>
                                </div>
                                </div>
{/* 
                                <div className="carousel-item">
                                    <img src="./images/" className="d-block w-100" alt="holistic university community" />

                                    <div className="carousel-caption d-none d-md-block">
                                    <h2>Welcome to Novum Student Enrollment</h2>
                                    <p>We make the application process for straight-out-highschool students much easier! See what courses are available to you in the University of your choice</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src="./images/learning.jpg"  alt="graduation ceremony" />

                                    <div className="carousel-caption d-none d-md-block">
                                    <h2>Welcome to Novum Student Enrollment</h2>
                                    <p>We make the application process for straight-out-highschool students much easier! See what courses are available to you in the University of your choice</p>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <img src="./images/dab.jpg" className="d-block w-100" alt="graduate student does the dab" />

                                    <div className="carousel-caption d-none d-md-block">
                                    <h2>Welcome to Novum Student Enrollment</h2>
                                    <p>We make the application process for straight-out-highschool students much easier! See what courses are available to you in the University of your choice</p>
                                </div>
                            </div> */}

                            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>

                        </div>
                    </div>
                </div>
            </div> 

            <section className="centralize">
                <h3>Enroll for a Course of your choice with Novum Student Enrollment</h3>
                <p>Find out how the weighting System works.</p>

                <Link to="/weightingsystem"><button type="button" className="btn btn-info">Weighting System</button></Link>

                <div className="space">
                    <p>Choose a course of your choice from all the listed courses offered by the University and apply.</p>

                    <Link to="/courses"><button type="button" className="btn btn-info">Courses</button></Link>
                </div>
            </section>
        </div>);
    }
}
 
export default Home;