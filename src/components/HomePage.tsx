import React from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "./image/hero.png";
import image1 from "./image/about-1.jpg";
import image2 from "./image/about-2.jpg";
import image3 from "./image/about-3.jpg";
import image4 from "./image/about-4.jpg";
const HomePage = () => {
  return (
    <div>
      <div className="container-xxl py-5 bg-dark hero-header mb-5">
        <div className="container my-5 py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 text-center text-lg-start">
              <h1 className="display-3 text-white animated slideInLeft">
                Feel Japan
                <br />
                With Our Cuisine
              </h1>
              <p className="text-white animated slideInLeft mb-4 pb-2">
                Welcome to L.E. Maki Japanese Restaurant, where we serve
                authentic Japanese cuisine in a warm and inviting atmosphere.
              </p>
              <Link
                to="/menu"
                className="btn btn-danger mx-2 py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Go to Menu
              </Link>
            </div>
            <div className="col-lg-6 text-center text-lg-end overflow-hidden">
              <img className="img-fluid" src={Hero} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="container py-5 my-5" id="about">
        <div className="row">
          <div className="col-lg-6">
            <h2 className="text-center mb-4">What's New</h2>
            <div className="card-deck">
              <div className="card mb-4">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={image1}
                      className="card-img"
                      alt="New Dish 1"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold text-dark display-4">
                        Popular Dish 1
                      </h5>
                      <p className="card-text">
                        Description of the new dish 1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={image2}
                      className="card-img"
                      alt="New Dish 2"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold text-dark display-4">
                        Popular Dish 2
                      </h5>
                      <p className="card-text">
                        Description of the new dish 2.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h2 className="text-center mb-4">What's Popular</h2>
            <div className="card-deck">
              <div className="card mb-4">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={image3}
                      className="card-img"
                      alt="Popular Dish 1"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold text-dark display-4">
                        Popular Dish 3
                      </h5>
                      <p className="card-text">
                        Description of the popular dish 1.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card mb-4">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={image4}
                      className="card-img"
                      alt="Popular Dish 2"
                      style={{ width: "200px", height: "150px" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title font-weight-bold text-dark display-4">
                        Popular Dish 4
                      </h5>
                      <p className="card-text">
                        Description of the popular dish 2.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
