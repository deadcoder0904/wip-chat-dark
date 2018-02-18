import React from "react";
import { Carousel } from "react-responsive-carousel";
// import "./styles.scss";

const home = require("../../assets/images/home.png");
const products = require("../../assets/images/products.png");
const questions = require("../../assets/images/questions.png");
const answers = require("../../assets/images/answers.png");
const makers = require("../../assets/images/makers.png");

const imgData = [
  { uri: home, title: "WIP Home" },
  { uri: products, title: "WIP Products" },
  { uri: questions, title: "WIP Questions" },
  { uri: answers, title: "WIP Answers" },
  { uri: makers, title: "WIP Makers" }
];

class CustomCarousel extends React.Component {
  render() {
    return (
      <Carousel showArrows autoPlay infiniteLoop useKeyboardArrows>
        {imgData.map(({ uri, title }) => (
          <div key={title}>
            <img src={uri} />
            <p className="legend">{title}</p>
          </div>
        ))}
      </Carousel>
    );
  }
}

export default CustomCarousel;
