import React from "react";
import "./ImageSlider.css";

export default class ImageSlider extends React.Component {
  componentDidMount() {
    document.title = "Image Slider";
  }
  state = {
    images: [
      "https://i.pinimg.com/236x/b6/21/07/b62107d70659823c6f409480f7435d14--watercolor-food-watercolor-print.jpg",
      "https://i.pinimg.com/236x/8a/61/c1/8a61c1ca0d1a20db922aa5e3a8493d0e--watercolour-flowers-watercolor-ideas.jpg",
      "https://i.pinimg.com/236x/86/d6/46/86d646ce2f92efd7890843ef5af9e700.jpg",
      "https://i.pinimg.com/236x/f6/4d/d7/f64dd7eb8df298195d61569b9634f982--watercolor-sketch-watercolor-kiwi.jpg",
    ],
    idx: 0,
  };

  nextButton = () => {
    this.setState({
      idx: this.state.idx + 1,
    });
  };

  render() {
    return (
      <div className="image-container">
        <button
          className="image-slider-button"
          onClick={() => {
            this.setState({
              idx: this.state.idx - 1,
            });
          }}
        >
          BACK
        </button>
        <img alt="sliderimage" src={this.state.images[this.state.idx]}></img>
        <button className="image-slider-button" onClick={this.nextButton}>
          NEXT
        </button>
      </div>
    );
  }
}
