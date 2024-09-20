import {v4 as uuidv4} from "uuid";
import {Education} from "../../interfaces/ResumeProps";

interface AddEducation {
  addNew: (educationData: Education) => void;
}
export default function AddEducation({addNew}: AddEducation) {
  const addNewForm = () => {
    const educationData = {
      degree: "",
      school: "",
      location: "",
      startDate: "",
      endDate: "",
      id: uuidv4(),
    };
    addNew(educationData);
  };
  return <button onClick={addNewForm}>+ Add New</button>;
}
