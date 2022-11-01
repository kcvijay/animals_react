import React, { Component } from "react";
import { Animals } from "./Animals.js";
import Card from "./Card";
import "./App.css";

class App extends Component {
  // state = {
  //   Animals: Animals,
  // };

  // AnimalList = Animals.map((Animal) => {
  //   <Card />;
  // });
  render() {
    return Animals.map((Animal) => (
      <div className="card">
        <Card key={Animal.name} name={Animal.name} />
        {/* {this.AnimalList} */}
      </div>
    ));
  }
}

export default App;
