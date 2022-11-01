import React, { Component } from "react";
import { Animals } from "./Animals.js";
import Card from "./Card";
import "./App.css";

class App extends Component {
  state = {
    Animals: Animals,
  };

  // AnimalList = Animals.map((Animal) => {
  //   <Card name={Animal.name} likes={Animal.likes} />;
  // });
  render() {
    return Animals.map((Animal) => (
      <div className="card">
        <Card key={Animal.name} name={Animal.name} likes={Animal.likes} />
        {/* {this.AnimalList} */}
      </div>
    ));
  }
}

export default App;
