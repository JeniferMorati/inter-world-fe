import React from "react";

const CardFullImage = ({ image, height, className }) => {
  return (
    <div className="col-lg-4 col-md-12 mb-4">
      <div className="bg-image hover-zoom ripple shadow-1-strong rounded">
        <img src={image} className={`w-100 ${className}`} height={height} />
        <div className="mask">
          <div className="d-flex justify-content-start align-items-start h-100"></div>
        </div>
        <div className="hover-overlay">
          <div className="mask"></div>
        </div>
      </div>
    </div>
  );
};

export default CardFullImage;
