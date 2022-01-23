import React from "react";
import Typewriter from "typewriter-effect";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-container">
        <div className="profile-parent">
          <div className="profile-detials">
            <div className="colz">
              <div className="colz-icon">
                <a href="https://www.facebook.com/insarahil/">
                  <i className="fa fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/rehmanraheelur/?hl=en">
                  <i className="fa fa-instagram"></i>
                </a>
                <a href="https://twitter.com/insarahilkhan">
                  <i className="fa fa-twitter-square"></i>
                </a>
                <a href="https://www.linkedin.com/in/raheel-ur-rehman-b0862121b/">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
            <div className="profile-details-name">
              <span className="primary-text">
                {""}
                Hello I'M <span className="highlighted-text">Raheel</span>
              </span>
            </div>
            <div className="profile-details-role">
              <span className="primary-text">
                {""}
                <h1>
                  {""}
                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Dev ⚛️",
                        "Full Stack Dev🌐",
                        "HTML CSS & JavaScript Dev 🔴",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </span>
              <span className="profile-role-tagline primary-text">
                Knack of building applications with front and back end
                operations
              </span>
            </div>
            <div className="profile-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                Hire Me
              </button>
              <a href="Resume.pdf" download="Raheel.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
