import React from "react";
import ImageFillerSmall from "./ImageFillerSmall.png";

export const ProjectFiller = () => {
  return (
    <div className="art-container">
      <h2>Project Name</h2>
      <div>
        <img src={require("./ImageFillerSmall.png")}/>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque.
        </div>
      </div>

      <div>
      <img src={require("./ImageFillerSmall.png")}/>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque.
        </div>
      </div>

      <div>
      <img src={require("./ImageFillerSmall.png")}/>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh nisl
          condimentum id venenatis a condimentum vitae sapien pellentesque.
        </div>
      </div>
    </div>
  );
};
