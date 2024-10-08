import "./Resume.css";
import useResumeContext from "../../hooks/useResumeContext.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMobileScreen} from "@fortawesome/free-solid-svg-icons";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";

export default function Resume() {
  const {resumeData} = useResumeContext();
  return (
    <div className="cv">
      <div className="resume-wrapper">
        {resumeData.personalInfo.length > 0 &&
          resumeData.personalInfo.map((info) => (
            <div key={info.id} className="personal-info-sec">
              <div className="name">
                {" "}
                <h1>{info.name}</h1>
              </div>
              {(info.email || info.phone || info.address) && (
                <div className="details">
                  {info.email && (
                    <h4>
                      {" "}
                      <FontAwesomeIcon icon={faPaperPlane} /> {info.email}{" "}
                    </h4>
                  )}
                  {info.phone && (
                    <h4>
                      <FontAwesomeIcon icon={faMobileScreen} /> {info.phone}
                    </h4>
                  )}{" "}
                  {info.address && (
                    <h4>
                      {" "}
                      <FontAwesomeIcon icon={faEnvelope} /> {info.address}
                    </h4>
                  )}{" "}
                </div>
              )}
            </div>
          ))}
      </div>

      <div className="resume-container">
        {resumeData.education.length > 0 ? <h1> Education</h1> : null}
        {resumeData.education.length > 0 &&
          resumeData.education.map((item, index) => (
            <div className="page-container" key={index}>
              <span>
                {item.degree}
                {item.school && `, ${item.school}`}{" "}
                {item.location && (
                  <h5>
                    {"  "} <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {item.location}
                  </h5>
                )}
              </span>
            </div>
          ))}
        {resumeData.experience.length > 0 ? <h1> Experience</h1> : null}
        {resumeData.experience.length > 0 &&
          resumeData.experience.map((item, index) => (
            <div className="page-container" key={index}>
              <span>
                {item.position}
                {item.company && `, ${item.company}`}{" "}
                {item.location && (
                  <h5>
                    {"  "} <FontAwesomeIcon icon={faLocationDot} />{" "}
                    {item.location}
                  </h5>
                )}
                {item.description && (
                  <ul>
                    {item.description.split("\n").map((point) => (
                      <li key={index}> {point}</li>
                    ))}
                  </ul>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
