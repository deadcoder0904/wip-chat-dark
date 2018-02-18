import React from "react";
import Typist from "react-typist";

import "./styles.scss";

const Headline = () => (
  <h1 className="headline">
    <Typist
      cursor={{
        show: true,
        blink: true,
        element: "|",
        hideWhenDone: true,
        hideWhenDoneDelay: 100
      }}
      startDelay={100}
      avgTypingDelay={130}
      ms={500}
    >
      🚧 Make WIP <span className="cut-through">Light</span>
      <Typist.Backspace count={5} delay={500} />
      <span>Dark</span>
    </Typist>
  </h1>
);

export default Headline;
