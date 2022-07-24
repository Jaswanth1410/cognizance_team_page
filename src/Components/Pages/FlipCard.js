// import React, { useState } from "react";
import React from 'react'
import Modal from "./Modal.js";

const FlipCard = (con) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  // const [model, setModel] = useState(false);

  return (
    <>
      <div
        className="card"
        onClick={() => {
          setIsModalOpen(true);
        }}
        // onClick={() => {
        //   setModel(true);
        // }}
      >
        <div
          style={{ backgroundImage: `url(${con.src})` }}
          className="card-face front"
        ></div>
        <div
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.866),rgba(0, 0, 0, 0.806)), url(${con.src})`,
          }}
          className="card-face back"
        >
          <h2>{con.name}</h2>

          <p>{con.post}</p>
        </div>
      </div>
      {/* <div className={ model ? "model open" : "model" }>
        <Modal
          src={con.src}
          name={con.name}
          post={con.post}
          dom={con.dom}
          desc={con.desc}
        />
      </div> */}
      {isModalOpen && (
        <Modal
          src={con.src}
          name={con.name}
          post={con.post}
          dom={con.dom}
          desc={con.desc}
          mail={con.mail}
          gitHub={con.gitHub}
          linkedIn={con.linkedIn}
          insta={con.insta}
          close={setIsModalOpen}
        />
      )}
    </>
  );
};

export default FlipCard;
