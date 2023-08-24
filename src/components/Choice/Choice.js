import React from "react";
import "./Choice.scss";
import block1 from "../../image/choice1.png";
import block2 from "../../image/choice2.png";
import block3 from "../../image/choice3.png";

const Choice = () => {
  return (
    <div id="choices">
      <div className="container">
        <div className="choices">
          <h1 className="choices--logo">New Books</h1>
          <div className="choices--choice">
            <div className="choices--choice__block1">
              <img src={block1} alt="" />
              <h2>The Climate Book: The Facts and the Solutions</h2>
              <p>by Greta Thunberg</p>
            </div>
            <div className="choices--choice__block2">
              <img src={block2} alt="" />
              <h2>Rest Is Resistance: A Manifesto</h2>
              <p>by Tricia Hersey</p>
            </div>
            <div className="choices--choice__block3">
              <img src={block3} alt="" />
              <h2>A New Name: Septology VI-VII</h2>
              <p>by Jon Fosse</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choice;
