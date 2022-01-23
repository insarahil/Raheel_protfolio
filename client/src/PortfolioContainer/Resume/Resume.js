import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "React Js", ratingPercentage: 65 },
    { skill: "React Native", ratingPercentage: 65 },
    { skill: "Express Js", ratingPercentage: 65 },
    { skill: "Node JS", ratingPercentage: 65 },
    { skill: "Mongo Db", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 70 },
    { skill: "CSS", ratingPercentage: 65 },
    { skill: "Bootstrap", ratingPercentage: 65 },
    { skill: "Tailwind CSS", ratingPercentage: 75 },
    { skill: "J Query", ratingPercentage: 65 },
    { skill: "Matrial UI", ratingPercentage: 50 },
    { skill: "TypScript", ratingPercentage: 50 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used: react JS, Bootstrap",
    },
    {
      title: "Mobile E-Shop",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "An ecommerace application designed to sell products online with payment system integration",
      subHeading:
        "Technologies Used:  React Native, Mongo DB, Express JS, Node Js, Redux.",
    },
    {
      title: "Ecommerce Wbsite",
      duration: { fromDate: "2021", toDate: "2022" },
      description:
        "Online ecoomerce website for showcasing and selling products with payment system integration.",
      subHeading:
        "Technologies Used: Mongo DB, Express JS, React JS, Node Js, Redux, Matrial UI.",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Virtual University of Pakistan"}
        subHeading={"Master of Computer Science (MCS)"}
        fromDate={"2017"}
        toDate={"2019"}
      />

      <ResumeHeading
        heading={"Virtual University of Pakistan"}
        subHeading={"Bachlor Scinece in Software Engineering"}
        fromDate={"2011"}
        toDate={"2015"}
      />

      <ResumeHeading
        heading={"Kamra Poly Technical, Kamra Pakistan"}
        subHeading={"Diploma of Assosiate Engineering (Computer Hardware)"}
        fromDate={"2001"}
        toDate={"2003"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Q Soft Technologies"}
          subHeading={"Full Stack Developer Inten"}
          fromDate={"2019"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN Stack web and Mobile Developer
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed on ecommerce website for client with the dishboard for
            managing the products,managing reviews users, payment etc.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - I strecth my mental capacity to develop UI as per the given
            desings.
          </span>
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Sports"
        description="Cricket, Football and Hockey."
      />
      <ResumeHeading
        heading="Hydroponics"
        description="Build my own hydroponics system and step-by-step understanding the process."
      />
      <ResumeHeading
        heading="Investment"
        description="Started to invest in farming area include ducks and sheep also interest in stock market investment"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
