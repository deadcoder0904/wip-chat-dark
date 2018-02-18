import React from "react";
import Favicon from "react-favicon";

import Headline from "../Headline";
import InstallGuide from "../InstallGuide";
import Carousel from "../Carousel";
import "./styles.scss";

const favicon = require("../../assets/images/favicon.ico");

const App = () => (
  <div className="container">
    <Favicon url={favicon} />
    <Headline />
    <Carousel />
    <InstallGuide />
  </div>
);

export default App;
