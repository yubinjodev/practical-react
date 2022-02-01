import React from "react";
import Flowers from "./Images/flowers.png";
import Reflection from "./Images/reflection.png";
import Bubble from "./Images/bubble.jpg";
import Sunflowers from "./Images/sunflowers.jpg";

export default class ArtGallery extends React.Component {
  render() {
    return (
      <div className="art-container">
        <img className="frame " src={Flowers} />
        <img className="frame " src={Reflection} />
        <img className="frame " src={Bubble} />
        <img className="frame " src={Sunflowers} />
      </div>
    );
  }
}
