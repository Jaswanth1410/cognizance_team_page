import React from "react";
import Modal from "./Modal.js";

const FlipCard = (con) => {
  // const image = {
  //   background: linear-gradient(rgba(0, 0, 0, 0.866),rgba(0, 0, 0, 0.806)), url(
  // }

  // function popUpImg() {
  //   const ele = document.getElementById("popUp");
  //   ele.classList.add("popUpImg");
  // }

  return (
    <div className="card">
      {/* <div id="popUp"
      //  onClick={{ popUpImg }}
       >
        <p style={{ textAlign: "left" }}>{con.name}</p>
        <p style={{ textAlign: "left" }}>{con.post}</p>
        <p style={{ textAlign: "left" }}>{con.dom}</p>
        <p style={{ textAlign: "justify" }}>{con.desc}</p>
      </div> */}
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
        <button>
          {con.name}
          <Modal
            src={con.src}
            name={con.name}
            post={con.post}
            dom={con.dom}
            desc={con.desc}
          />
        </button>
        <p>{con.post}</p>
      </div>
    </div>
  );
};

export default FlipCard;
