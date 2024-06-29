import React, { useEffect, useRef } from "react";
import Wrapper from "../assets/css/wrappers/LandingPage";
import { Link } from "react-router-dom";
import photo from "../assets/media/LandingPage/hero.jpg";
import Navbar from "../components/shared/Navbar";
import PopularCategory from "../components/Home Page/PopularCategory";
import HowWorks from "../components/Home Page/HowWorks";
import Team from "../components/Home Page/Team";
import Brands from "../components/Home Page/Brands";
import Testimonial from "../components/Home Page/Testimonial";
import SuccessCard from "../components/SuccessCard/SuccessCard";

const Landing = () => {
    const navbarRef = useRef(null);
    const heroRef = useRef(null);

    useEffect(() => {
        const navbarHeight = navbarRef.current.getBoundingClientRect().height;
        heroRef.current.style.minHeight = `calc(100vh - ${navbarHeight}px)`;
    }, []);
    return (
        <>
            <Navbar navbarRef={navbarRef} />
            <Wrapper ref={heroRef} className="bg-cover bg-center bg-no-repeat">
                <div className="hero-content">
                    <div className="text-content">
                        <h1>
                            Your Ideal Job Waits<span className="fancy"> Apply Now !</span> 
                        </h1>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Illo perferendis dignissimos eligendi voluptas
                            exercitationem, eius aut mollitia quasi nisi
                            voluptatem similique, tempore totam, odit
                            repellendus non. Dolores eos animi recusandae.
                        </p>
                        <div className="btn-grp">
                            <Link className="btn" to="/all-jobs">
                                Apply Now
                            </Link>
                        </div>
                    </div>
                    <div className="placeholder">
                        <img src={photo} alt="job viva photo" />
                    </div>
                </div>
            </Wrapper>

            <div>
            {/* <HowWorks/> */}
            {/* <PopularCategory/> */}
            {/* <Team/> */}
            {/* <Testimonial/> */}
            {/* <Brands/> */}
            <h1 className="success-stories-heading">Success Stories</h1>
            <div className="success-cards">
            <SuccessCard
        imgSrc="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
        spanTag="Arnav"
        constentHead="Software Engineer"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="3224"
        views="7"
        comment="21"
        color="#5994e7"
      />
      <SuccessCard
        imgSrc="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
        spanTag="Aishwarya"
        constentHead="Developer"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1699"
        views="11"
        comment="27"
        color="#5994e7"
      />
      <SuccessCard
        imgSrc="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
        spanTag="Karthik"
        constentHead="Front End Developer"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1624"
        views="4"
        comment="17"
        color="#5994e7"
      />
       <SuccessCard
        imgSrc="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg"
        spanTag="Abinav"
        constentHead="Full stack Developer"
        constentPara="Croque monsieur paneer cheese triangles. When the cheese comes out everybody's happy cheeseburger melted cheese pepper jack croque"
        reads="1624"
        views="4"
        comment="17"
        color="#5994e7"
      />

            </div>
            </div>
            
            <div></div>
        </>
    
        
    );
};

export default Landing;
