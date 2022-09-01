import React from "react";
import "../Features/Features.css";

export default function Feature(props) {
  const { title, description, image } = props;

  return (
    <>
      <div className="feature-flex">
        <img src={image} alt="" />
        <p className="feature mb-0">{title}</p>
        <p className="feature-description">{description}</p>
      </div>
    </>
  );
}
