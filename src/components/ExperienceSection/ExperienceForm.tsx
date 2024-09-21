import {SetStateAction, useState} from "react";
import "./ExperienceForm.css";
import {ResumeData, Experience} from "../../interfaces/ResumeProps";
import AddExperience from "./AddExperience";
import useResumeContext from "../../hooks/useResumeContext";
import {FaAngleDown} from "react-icons/fa";
interface ToggleFormState {
  [key: string]: boolean;
}
export default function ExperienceForm() {
  const {resumeData, setResumeData} = useResumeContext();
  const [toggleForm, setToggleForm] = useState<ToggleFormState>({});

  const handleFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
  const handleToggledForm = (
    e: React.MouseEvent<SVGElement | HTMLButtonElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    setToggleForm((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  console.log(toggleForm);
  return (
    <div className="experience-form">
      <h1 className="form-title">Experience</h1>
      {resumeData.experience.map((item) => (
        <div key={item.id}>
          <form>
            {" "}
            <h1 className="heading">
              Experience
              <FaAngleDown
                style={{cursor: "pointer"}}
                onClick={(e) => handleToggledForm(e, item.id)}
              />
            </h1>
            <div
              className={`${
                toggleForm[item.id]
                  ? "expand-input-group"
                  : "collapse-input-group"
              }`}
            >
              <div className="input-group">
                <label>
                  Position{" "}
                  <input
                    type="text"
                    name="position"
                    onChange={(e) => handleFormData(e, item.id)}
                  />
                </label>{" "}
              </div>{" "}
              <div className="input-group">
                <label>
                  Company
                  <input
                    type="text"
                    name="company"
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
              </div>{" "}
              <div className="input-group">
                <label>
                  Description
                  <textarea
                    name="description"
                    onChange={(e) => handleFormData(e, item.id)}
                  >
                    {" "}
                  </textarea>
                </label>{" "}
              </div>{" "}
              <div className="button-group">
                <button
                  id="delete"
                  onClick={(e) => deleteExperience(e, item.id)}
                >
                  Delete
                </button>{" "}
                <button
                  id="save"
                  onClick={(e) => handleToggledForm(e, item.id)}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      ))}{" "}
      <AddExperience addNew={addNewExperience} />
    </div>
  );
}
