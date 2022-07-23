import React from "react";
import "./Model.css";

const Model = (prop) => {
  return (
    <section className="main">
      <div className="Modal">
        <div className="info">
          <div className="main_info">
            <h2>{prop.name}</h2>
            <h3>{prop.post}</h3>
            <h4>{prop.dom}</h4>
            <p>{prop.desc}</p>
          </div>
          <div className="Media_icons">
            <ul>
              <li className="icon linkedin">
                <a href>
                  <i className="fa fa-linkedin" />
                </a>
              </li>
              <li className="icon Website">
                <a href>
                  <i className="fa fa-address-card" />
                </a>
              </li>
              <li className="icon Github">
                <a href>
                  <i className="fa fa-github" />
                </a>
              </li>
              <li className="icon Gmail">
                <a href>
                  <i className="fa fa-envelope" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={prop.src}alt="" />
        </div>
      </div>
    </section>
  );
};

export default Model;
