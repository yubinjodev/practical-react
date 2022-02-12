import React from "react";
import Flowers from "./Images/flowers.png";
import Reflection from "./Images/reflection.png";
import Bubble from "./Images/bubble.jpg";
import Sunflowers from "./Images/sunflowers.jpg";
import Saturn from "./Images/saturn.png";

export default class ArtGallery extends React.Component {
  render() {
    return (
      <div className="art-container">
        <h2>Art Gallery</h2>
        <img alt="Flowers" className="frame " src={Flowers} />
        <img alt="Reflection" className="frame " src={Reflection} />
        <img alt="Bubble" className="frame " src={Bubble} />
        <img alt="Sunflowers" className="frame " src={Sunflowers} />
        <img alt="Saturn" className="frame " src={Saturn} />
      </div>
    );
  }
}
