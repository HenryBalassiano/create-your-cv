import {SetStateAction, useState} from "react";
import "./EducationForm.css";
import useResumeContext from "../../hooks/useResumeContext.tsx";
import AddEducation from "./AddEducation";
import {ResumeData, Education} from "../../interfaces/ResumeProps.ts";
export default function EducationForm() {
  const {resumeData, setResumeData} = useResumeContext();

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    const {name, value} = e.target;
    const updatedObj = resumeData.education.map((item, i) =>
      id === item.id ? {...item, [name]: value} : item
    );

    setResumeData((prevObj) => ({
      ...prevObj,
      education: updatedObj,
    }));
  };
  const addNewEducation = (educationData: Education) => {
    setResumeData((prevState: ResumeData) => ({
      ...prevState,
      education: [...prevState.education, educationData],
    }));
  };
  const deleteEducation = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const filteredEducation = resumeData.education.filter(
      (item: Education) => item.id !== id
    );
    console.log(filteredEducation);
    setResumeData((prevState) => ({
      ...prevState,
      education: filteredEducation,
    }));
  };
  return (
    <div className="education-form">
      {resumeData.education.map((item, index) => (
        <div key={index}>
          <form>
            <label>
              Degree
              <input
                type="text"
                name="degree"
                onChange={(e) => handleFormData(e, item.id)}
              />
            </label>
            <label>
              School
              <input
                type="text"
                name="school"
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
          <button onClick={(e) => deleteEducation(e, item.id)}>Delete</button>
        </div>
      ))}{" "}
      <AddEducation addNew={addNewEducation} />
    </div>
  );
}
