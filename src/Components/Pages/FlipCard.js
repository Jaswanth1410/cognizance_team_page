import React from "react";

const FlipCard = (con) => {
  // const image = {
  //   background: linear-gradient(rgba(0, 0, 0, 0.866),rgba(0, 0, 0, 0.806)), url(
  // }
  return (
    <div className="card">
      <div
        style={{ backgroundImage: `url(${con.src})` }}
        className="card-face front"
      ></div>
      <div
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.866),rgba(0, 0, 0, 0.806)), url(${con.src})`,
          // background: `url(${con.src})`,
        }}
        className="card-face back"
      >
        <h2>{con.name}</h2>
        <p>{con.post}</p>
      </div>
    </div>
  );
};

export default FlipCard;
