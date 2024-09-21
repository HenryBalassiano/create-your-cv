import {SetStateAction, useState} from "react";
import "./EducationForm.css";
import useResumeContext from "../../hooks/useResumeContext.tsx";
import AddEducation from "./AddEducation";
import {ResumeData, Education} from "../../interfaces/ResumeProps.ts";
import {FaAngleDown} from "react-icons/fa";
interface ToggleFormState {
  [key: string]: boolean;
}
export default function EducationForm() {
  const {resumeData, setResumeData} = useResumeContext();
  const [toggleForm, setToggleForm] = useState<ToggleFormState>({});

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
  const handleToggledForm = (id: string) => {
    setToggleForm((prevState: any) => ({
      ...prevState,
      [id]: !toggleForm[id],
    }));
  };
  console.log(toggleForm);
  return (
    <div className="education-form">
      {" "}
      <h1 className="form-title">Education</h1>
      {resumeData.education.map((item) => (
        <div key={item.id}>
          <form>
            {" "}
            <h1 className="heading">
              Education
              <FaAngleDown
                style={{cursor: "pointer"}}
                onClick={() => handleToggledForm(item.id)}
              />
            </h1>
            <div
              className={`${
                toggleForm[item.id]
                  ? "collapse-input-group"
                  : "expand-input-group"
              }`}
            >
              <div className="input-group">
                <label>
                  Degree
                  <input
                    type="text"
                    name="degree"
                    onChange={(e) => handleFormData(e, item.id)}
                  />
                </label>
              </div>{" "}
              <div className="input-group">
                <label>
                  School
                  <input
                    type="text"
                    name="school"
                    onChange={(e) => handleFormData(e, item.id)}
                  />
                </label>{" "}
              </div>{" "}
              <div className="input-group">
                <label>
                  City
                  <input
                    type="text"
                    name="location"
                    onChange={(e) => handleFormData(e, item.id)}
                  />
                </label>{" "}
                <button onClick={(e) => deleteEducation(e, item.id)}>
                  Delete
                </button>
              </div>{" "}
            </div>
          </form>
        </div>
      ))}{" "}
      <AddEducation addNew={addNewEducation} />
    </div>
  );
}
