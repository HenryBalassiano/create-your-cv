import React from "react";
import "./PersonalInfo.css";
import useResumeContext from "../hooks/useResumeContext";
import {ResumeData} from "../interfaces/ResumeProps";
export default function PersonalInfo() {
  const {setResumeData} = useResumeContext();
  const handleInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setResumeData((prevState: ResumeData) => ({
      ...prevState,
      personalInfo: [{...prevState.personalInfo[0], [name]: value}],
    }));
  };
  return (
    <div className="personal-info">
      <input type="text" name="name" onChange={handleInfo} />{" "}
      <input type="text" name="email" onChange={handleInfo} />
      <input type="text" name="phone" onChange={handleInfo} />
      <input type="text" name="address" onChange={handleInfo} />
    </div>
  );
}
