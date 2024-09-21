import React, {useState} from "react";
import {ResumeData} from "../interfaces/ResumeProps";
import {v4 as uuidv4} from "uuid";

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
    experience: [
      {
        position: "Frontend Developer",
        company: "Tech Innovators",
        location: "San Francisco, CA",
        startDate: "January 2020",
        endDate: "Present",
        description:
          "Developed and maintained user interfaces for web applications using React and TypeScript. \n Improved site performance by 30%.",
        id: uuidv4(),
      },
      {
        position: "Software Engineer Intern",
        company: "NextGen Solutions",
        location: "New York, NY",
        startDate: "June 2019",
        endDate: "August 2019",
        description:
          "Assisted in building internal tools and wrote automated tests for backend services.",
        id: uuidv4(),
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Stanford University",
        location: "Stanford, CA",
        startDate: "September 2016",
        endDate: "June 2020",
        id: uuidv4(),
      },
      {
        degree: "High School Diploma",
        school: "Greenwood High School",
        location: "Los Angeles, CA",
        startDate: "September 2012",
        endDate: "June 2016",
        id: uuidv4(),
      },
    ],
    personalInfo: [
      {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "(555) 123-4567",
        address: "123 Main St, San Francisco, CA 94105",
        id: uuidv4(),
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
