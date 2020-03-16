import React, { Component } from "react";
import "./card.css";
class Card extends Component {
  render() {
    const stil = {
      width: "80%",
      height: "40px",
      margin: "-12px auto 0 auto"
    };

    const stil1 = { color: "#888" };

    return (
      <div className="card text-center h-100">
        <div className="bg-primary" style={stil}></div>
        <div className="card-body">
          <h5 className="card-title">31.517</h5>
          <p className="card-text" style={stil1}>
            Înscriși pe liste permanente și speciale
          </p>
        </div>
      </div>
    );
  }
}

export default Card;
