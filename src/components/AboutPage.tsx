import React from "react";
import image1 from "./image/about-1.jpg";
import image2 from "./image/about-2.jpg";
import image3 from "./image/about-3.jpg";
import image4 from "./image/about-4.jpg";

const AboutPage = () => {
  return (
    <div className="container-xxl p-5" id="about-us">
      <div className="container m-5">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.1s"
                  style={{ marginTop: "28%" }}
                  src={image1}
                  alt=""
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.3s"
                  src={image2}
                  style={{ marginTop: "25%" }}
                  alt=""
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-75 wow zoomIn"
                  data-wow-delay="0.5s"
                  src={image3}
                  alt=""
                />
              </div>
              <div className="col-6 text-end">
                <img
                  className="img-fluid rounded w-100 wow zoomIn"
                  data-wow-delay="0.7s"
                  src={image4}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h5 className="section-title ff-secondary text-start text-danger  fw-normal">
              About Us
            </h5>
            <h1 className="mb-4 fw-semi-bold">Welcome to L.E Maki</h1>
            <p className="mb-5" style={{ textAlign: "justify" }}>
              Our restaurant was founded in 2018 with the aim of providing our
              customers with an unforgettable dining experience that showcases
              the artistry and flavors of traditional Japanese cooking. We are
              dedicated to using only the freshest ingredients and preparing our
              dishes with great attention to detail to ensure every bite is
              delicious. At L.E. Maki, we offer a wide range of Japanese dishes
              that include sushi, sashimi, tempura, teriyaki, and much more. Our
              menu is carefully crafted to cater to all dietary preferences, and
              we also offer vegetarian and gluten-free options. Our team of
              skilled chefs and friendly staff are committed to providing you
              with exceptional service and ensuring your dining experience is
              nothing short of remarkable. We strive to create an environment
              that is warm, welcoming, and comfortable, making it the perfect
              destination for any occasion, be it a date night, a family dinner,
              or a gathering with friends. Thank you for choosing L.E. Maki
              Japanese Restaurant, we look forward to serving you soon.
            </p>
            <div className="row g-4 mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                  <h1
                    className="display-3 flex-shrink-0 display-5 text-danger mb-0"
                    data-toggle="counter-up"
                  >
                    5
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Years of</p>
                    <h6 className="text-uppercase mb-0">Experience</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center border-start border-5 border-danger px-3">
                  <h1
                    className="display-3 flex-shrink-0 display-5 text-danger mb-0"
                    data-toggle="counter-up"
                  >
                    23
                  </h1>
                  <div className="ps-4">
                    <p className="mb-0">Popular</p>
                    <h6 className="text-uppercase mb-0">Dishes</h6>
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

export default AboutPage;
