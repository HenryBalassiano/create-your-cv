import {SetStateAction, useState} from "react";
import "./ExperienceForm.css";
import {ResumeData, Experience} from "../../interfaces/ResumeProps";
import AddExperience from "./AddExperience";
import useResumeContext from "../../hooks/useResumeContext";
interface ExperienceForm {
  setResumeData: React.Dispatch<SetStateAction<ResumeData>>;
  resumeData: ResumeData;
}
export default function EducationForm() {
  const {resumeData, setResumeData} = useResumeContext();
  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const {name, value} = e.target;
    const updatedObj = resumeData.experience.map((item, i) =>
      id === item.id ? {...item, [name]: value} : item
    );

    setResumeData((prevObj) => ({
      ...prevObj,
      experience: updatedObj,
    }));
  };
  const addNewExperience = (experienceData: Experience) => {
    setResumeData((prevState: ResumeData) => ({
      ...prevState,
      experience: [...prevState.experience, experienceData],
    }));
  };
  const deleteExperience = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const filterExperience = resumeData.experience.filter(
      (item: Experience) => item.id !== id
    );
    setResumeData((prevState) => ({
      ...prevState,
      experience: filterExperience,
    }));
  };
  return (
    <div className="experience-form">
      {resumeData.experience.map((item, index) => (
        <div key={index}>
          <form>
            <label>
              Position
              <input
                type="text"
                name="position"
                onChange={(e) => handleFormData(e, item.id)}
              />
            </label>
            <label>
              Company
              <input
                type="text"
                name="company"
                onChange={(e) => handleFormData(e, item.id)}
              />
            </label>{" "}
            <label>
              City
              <input
                type="text"
                name="location"
                onChange={(e) => handleFormData(e, item.id)}
              />
            </label>{" "}
          </form>
          <button onClick={(e) => deleteExperience(e, item.id)}>Delete</button>
        </div>
      ))}{" "}
      <AddExperience addNew={addNewExperience} />
    </div>
  );
}
