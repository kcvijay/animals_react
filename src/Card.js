import React from "react";
import LikeIcon from "./Assets/like.png";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card-content">
      <button className="close-card" onClick={props.removeCard}>
        X
      </button>
      <img
        className="animal-img"
        src={`https://source.unsplash.com/500x400/?${props.name}`}
        alt="an animal"
      ></img>
      <div className="card-detail">
        <h2 className="animal-name">{props.name}</h2>

        <footer>
          <div className="likes">
            <img src={LikeIcon} alt={props.name}></img>
            <p className="likes-counter">{props.likes}</p>
          </div>
          <button className="add-like" onClick={props.addLikes}>
            Add Likes
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Card;
