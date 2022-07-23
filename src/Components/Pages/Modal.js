import React from "react";
import "./Model.css";
import {FaLinkedinIn, BsGithub, SiGmail, MdOutlineWeb, GrFormClose} from "react-icons/all";

const Model = (prop) => {
  return (
    <>
    {/* <section className="main">
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
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="icon Website">
                <a href>
                  <MdOutlineWeb/>
                </a>
              </li>
              <li className="icon Github">
                <a href>
                    <BsGithub/>
                </a>
              </li>
              <li className="icon Gmail">
                <a href>
                    <SiGmail/>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={prop.src}alt="" />
        </div>
      </div>
    </section> */}
    <section class="main">
        
    <div class="Modal">
        
        <div class="info">
            <div class="main_info">
                <h2>{prop.name}</h2>
                <h3>{prop.post}</h3>
                <h4>{prop.dom}</h4>
                <p>
                    {prop.desc}
                </p>
            </div>
            <div class="Media_icons">
                <ul>
                    <li class="icon linkedin">
                        <FaLinkedinIn/>
                    </li>
                    <li class="icon Website">
                        <MdOutlineWeb/>
                    </li>
                    <li class="icon Github">
                        <BsGithub/>
                    </li>
                    <li class="icon Gmail">
                        <SiGmail/>
                    </li>
                </ul>
            </div>
        </div>
        <div class="image">
            <img src={prop.src}alt="" />
        </div>
        <div onClick={() => prop.close(false)} class="close">
            <GrFormClose/>
        </div>
    </div>
    
    </section>
    </>
  );
};

export default Model;
