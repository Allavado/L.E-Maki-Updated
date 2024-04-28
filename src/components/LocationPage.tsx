import React from "react";

const LocationPage = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container-fluid pb-5">
        <div className="row mt-5">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="mt-5 section-title ff-secondary text-center text-danger fw-normal">
              Location
            </h5>
            <h1 className="mb-5 fw-semi-bold">Location</h1>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-center align-item-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.677749012147!2d120.28013991492614!3d14.843333289648227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339671c2f05a6203%3A0xc2db4b2ffa265ac9!2sL.E%20Maki!5e0!3m2!1sen!2sph!4v1678212006916!5m2!1sen!2sph"
              width="1000"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
