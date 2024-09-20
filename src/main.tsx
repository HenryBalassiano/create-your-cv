import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {ResumeProvider} from "./context/ResumeContext.tsx";
createRoot(document.getElementById("root")!).render(
  <ResumeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ResumeProvider>
);
