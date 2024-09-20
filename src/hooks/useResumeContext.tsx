import {useContext} from "react";
import {ResumeContext} from "../context/ResumeContext";

const useResumeContext = () => {
  const resumeContext = useContext(ResumeContext);
  if (!resumeContext) {
    throw new Error("No prop in context");
  }
  return resumeContext;
};

export default useResumeContext;
