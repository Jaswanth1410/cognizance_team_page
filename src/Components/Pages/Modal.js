import React from "react";
import "./Model.css";
import mail from "../Images/mail.png";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";
import instagram from "../Images/instagram.png";
import { AiFillCloseCircle } from "react-icons/all";

const Model = (prop) => {
  return (
    <div class="main">
      <div class="Modal">
        <div class="info">
          <div class="main_info">
            <h2>{prop.name}</h2>
            <h3>{prop.post}</h3>
            <h4>{prop.dom}</h4>
            <p>{prop.desc}</p>
          </div>
          <div class="Media_icons">
            {/* <ul>
              <li class="icon linkedin">
                <FaLinkedinIn />
              </li>
              <li class="icon Website">
                <MdOutlineWeb />
              </li>
              <li class="icon Github">
                <BsGithub />
              </li>
              <li class="icon Gmail">
                <SiGmail />
              </li>
            </ul> */}
            <ul>
              <li class="icon Gmail">
                <a href={prop.mail} target="_blank">
                  <img src={mail} alt="https://www.google.com" />
                </a>
              </li>
              <li class="icon linkedin">
                <a href={prop.linkedIn} target="_blank">
                  <img src={linkedin} alt="https://www.linkedin.com" />
                </a>
              </li>
              <li class="icon Github">
                <a href={prop.gitHub} target="_blank">
                  <img src={github} alt="https://www.github.com" />
                </a>
              </li>
              <li class="icon Website">
                <a href={prop.insta} target="_blank">
                  <img src={instagram} alt="https://www.instagram.com" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="image">
          <img src={prop.src} alt="" />
        </div>
        <div onClick={() => prop.close(false)} class="icon close">
          <AiFillCloseCircle />
        </div>
      </div>
    </div>
  );
};

export default Model;
