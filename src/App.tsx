import {useState, useContext} from "react";
import Resume from "./components/Resume/Resume.tsx";
import EducationForm from "./components/EducationSection/EducationForm.tsx";
import ExperienceForm from "./components/ExperienceSection/ExperienceForm.tsx";
import useResumeContext from "./hooks/useResumeContext.tsx";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Resume />{" "}
      <div>
        <EducationForm />
        <ExperienceForm />
      </div>
    </div>
  );
}
