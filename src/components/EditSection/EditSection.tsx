import React from "react";
import EducationForm from "../EducationSection/EducationForm.tsx";
import ExperienceForm from "../ExperienceSection/ExperienceForm.tsx";
import PersonalInfo from "../PersonalInfo.tsx";
export default function EditSection() {
  return (
    <div>
      {" "}
      <PersonalInfo />
      <EducationForm />
      <ExperienceForm />
    </div>
  );
}
