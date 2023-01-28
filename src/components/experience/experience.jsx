import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const experience = () => {
  return (
    <section id="experience">
      <h5> Skills I Have </h5>
      <h2> My Experience </h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3> Frontend Development</h3>
          <div className="experience__content">
            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> HTML </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> CSS </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> JavaScript </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Bootstrap </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> React </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> jQuery </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>
          </div>
        </div>

        {/* END OF FRONTEND*/}

        <div className="experience__backend">
          <h3> Backend Development</h3>
          <div className="experience__content">
            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> PHP </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> MySQL </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Laravel </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> MongoDB </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Python </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Git/gitlab </h4>
                <small className="text-light"> Intermediate </small>
              </div>
            </artical>
          </div>
        </div>

        {/* additional  */}
        <div className="experience__backend">
          <h3> Additional Skills</h3>
          <div className="experience__content">
            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Jira Software</h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> SonarQube </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

            <artical className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4> Agile (Scrum) </h4>
                <small className="text-light"> Experienced </small>
              </div>
            </artical>

          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
