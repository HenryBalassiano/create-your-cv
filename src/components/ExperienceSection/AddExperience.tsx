import {v4 as uuidv4} from "uuid";
import {Experience} from "../../interfaces/ResumeProps";

interface AddExperience {
  addNew: (experienceData: Experience) => void;
}
export default function AddEducation({addNew}: AddExperience) {
  const addNewForm = () => {
    const experienceData = {
      position: "",
      company: "",
      location: "",
      startDate: "",
      description: "",
      endDate: "",
      id: uuidv4(),
    };
    addNew(experienceData);
  };
  return <button onClick={addNewForm}>+ Add New</button>;
}
