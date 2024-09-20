import React, {useState} from "react";
import {ResumeData} from "../interfaces/ResumeProps";

interface ResumeProviderProps {
  children: React.ReactNode;
}
interface ResumeContextProps {
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  resumeData: ResumeData;
}
const ResumeContext = React.createContext<ResumeContextProps | undefined>(
  undefined
);

function ResumeProvider({children}: ResumeProviderProps) {
  const [resumeData, setResumeData] = useState<ResumeData>({
    experience: [],
    education: [],
    personalInfo: [
      {
        name: "",
        email: "",
        phone: "",
        address: "",
      },
    ],
  });

  return (
    <ResumeContext.Provider value={{setResumeData, resumeData}}>
      {children}
    </ResumeContext.Provider>
  );
}
export {ResumeProvider, ResumeContext};
