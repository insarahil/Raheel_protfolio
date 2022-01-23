import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Testimonial.css";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Client Say About Me"}
      />
      <section className="testimonial-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I Patronized Raheel and when he delivered, I honestly fell
                      in love with the project. He is a very honest guy and he
                      delivers ontime
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-info">
                    <img
                      src={require("../../assets/Testimonial/lady.png").default}
                      alt="no internet connection"
                    />
                    <h5>Daisy Dominic</h5>
                    <p>CEO InansGolbal</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I Patronized Raheel and when he delivered, I honestly fell
                      in love with the project. He is a very honest guy and he
                      delivers ontime
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-info">
                    <img
                      src={require("../../assets/Testimonial/man.png").default}
                      alt="no internet connection"
                    />
                    <h5>Mike</h5>
                    <p>TURAS Internation</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I Patronized Raheel and when he delivered, I honestly fell
                      in love with the project. He is a very honest guy and he
                      delivers ontime
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-info">
                    <img
                      src={require("../../assets/Testimonial/mike.png").default}
                      alt="no internet connection"
                    />
                    <h5>David</h5>
                    <p>SEP Managment</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I Patronized Raheel and when he delivered, I honestly fell
                      in love with the project. He is a very honest guy and he
                      delivers ontime
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-info">
                    <img
                      src={require("../../assets/Testimonial/ehiz.jpg").default}
                      alt="no internet connection"
                    />
                    <h5>Stephan</h5>
                    <p>AstraZeneca Plc</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="testimonial-item">
                  <div className="testimonial-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      I Patronized Raheel and when he delivered, I honestly fell
                      in love with the project. He is a very honest guy and he
                      delivers ontime
                      <i className="fa fa-quote-right" />
                    </p>
                    <ul className="stars list-unstyled">
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                      <li className="star">
                        <i className="fa fa-star"></i>
                      </li>
                    </ul>
                  </div>
                  <div className="testimonial-info">
                    <img
                      src={
                        require("../../assets/Testimonial/daisy.jpg").default
                      }
                      alt="no internet connection"
                    />
                    <h5>Lodovica Biagi</h5>
                    <p>Tesco Plc</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img
          src={require("../../assets/Testimonial/shape-bg.png").default}
          alt=""
        />
      </div>
    </div>
  );
}
