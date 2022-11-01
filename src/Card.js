import React from "react";
import LikeIcon from "./Assets/like.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-wrapper">
      <button className="close-card">X</button>
      <img
        className="animal-img"
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt="an animal"
      ></img>
      <div className="card-detail">
        <h1 className="animal-name">{props.name}</h1>
        <div className="likes">
          <img src={LikeIcon} alt="Like icon"></img>
          <div className="likes-counter">1</div>
        </div>
        <button className="add-like">Add Likes</button>
      </div>
    </div>
  );
};

export default Card;
