import React, { Component } from "react";
class Compar extends Component {
  render() {
    const votantiUrban = 31234,
      votantiRural = 14987;
    let width1 = (votantiUrban / (votantiUrban + votantiRural)) * 100; //  procente
    let width2 = (votantiRural / (votantiUrban + votantiRural)) * 100; //  procente
    const div1 = `<div style={width: ${width1}%, height: "30px", lineHeight: "30px", 
    textAlign: "center", display: "inline-block", float: "left", 
    color: "white", backgroundColor: "#0288D1"}>Urban</div>`;

    const div2 = `<div style={width: ${width2}%, height: "30px", lineHeight: "30px", 
    textAlign: "center", display: "inline-block", float: "left", 
    color: "white", backgroundColor: "#BF360C"}>Rural</div>`;
    const stil = { width: "1000px", margin: "0 auto" };

    return (
      <div style={stil}>
        ${div1}${div2}
      </div>
    );
  }
}

export default Compar;
