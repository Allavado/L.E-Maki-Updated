import React from "react";

function Footer() {
  return (
    <footer className="footer pt-5 pb-3 bg-dark">
      <div className="container">
        <div className="row text-white">
          <div className="col-lg-4 col-md-6">
            <div>
              <h4 className="fs-5 text-uppercase text-uppercase badge text-bg-danger text-wrap">
                Address
              </h4>
              <p>
                L.E Maki <br />
                #20 Otero Mabayuhan Olongapo City
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <h4 className="fs-5 text-uppercase text-uppercase badge text-bg-danger text-wrap">
                Reservations
              </h4>
              <p>
                <strong>Phone:</strong> +639513482741
                <br />
                <strong>Email:</strong> lemaki@gmail.com
                <br />
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div>
              <h4 className="fs-5 text-uppercase badge text-bg-danger text-wrap">
                Opening Hours
              </h4>
              <p>
                <strong>Mon-Sat:</strong> 8AM - 5PM <br />
                <strong>Sunday:</strong> Closed
              </p>
            </div>
          </div>
        </div>
        <div className="text-white text-center">
          <p className="pt-5">
            {" "}
            Copyright{" "}
            <strong>
              <span>L.E Maki</span>
            </strong>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
