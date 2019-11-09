import React from "react";
import Card from "./Card";
import "./CardList.css";

const CardList = ({ robots }) => {
  const cardArray = robots.map((user, i) => {
    return (
      <Card
        key={i}
        id={robots[i].id}
        name={robots[i].name}
        email={robots[i].email}
      />
    );
  });
  return <div className='container'>{cardArray}</div>;
};
export default CardList;
