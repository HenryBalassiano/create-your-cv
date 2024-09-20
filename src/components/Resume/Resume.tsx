import "./Resume.css";
import useResumeContext from "../../hooks/useResumeContext.tsx";

export default function Resume() {
  const {resumeData} = useResumeContext();
  return (
    <div className="cv">
      <div className="resume-wrapper"> </div>

      <div className="resume-container">
        {resumeData.education.length > 0 ? <h1> Education</h1> : null}
        {resumeData.education.length > 0 &&
          resumeData.education.map((item, index) => (
            <div key={index}>
              {item.degree}
              {item.school}
              {item.location}
            </div>
          ))}
        {resumeData.experience.length > 0 ? <h1> Experience</h1> : null}
        {resumeData.experience.length > 0 &&
          resumeData.experience.map((item, index) => (
            <div key={index}>
              {item.position}
              {item.company}
              {item.location}
            </div>
          ))}
      </div>
    </div>
  );
}
