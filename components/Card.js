import React from "react";
import "./Card.css";

const Card = ({ id, name, email }) => {
  return (
    <div className="card">
      <img alt="robots" src={`https://robohash.org/${id}?set=set3&size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
