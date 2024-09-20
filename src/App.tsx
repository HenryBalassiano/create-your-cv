import {useRef} from "react";
import Resume from "./components/Resume/Resume.tsx";
import EditSection from "./components/EditSection/EditSection.tsx";
import "./App.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import useResumeContext from "./hooks/useResumeContext.tsx";
export default function App() {
  const {resumeData} = useResumeContext();
  const cvRef = useRef<any>(null);
  const downloadCVPdf = () => {
    const cv = cvRef.current;

    html2canvas(cv, {scale: 2}).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
      });
      // aspect ratio of resume container is calculated
      // we then multiply that by the pdf's width to get the adjusted height
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const imgRatio = imgProps.height / imgProps.width;
      const adjustedHeight = imgRatio * pdfWidth;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth + 5, adjustedHeight);
      pdf.save(
        `${
          resumeData.personalInfo[0].name
            ? resumeData.personalInfo[0].name
            : "undefined"
        }.pdf`
      );
    });
  };

  console.log(resumeData);
  return (
    <div className="app">
      <div className="preview">
        <div className="preview-wrapper">
          <div ref={cvRef}>
            <Resume />
          </div>
          <div className="pdf-container">
            <button id="download-pdf" onClick={downloadCVPdf}>
              Download PDF
            </button>
          </div>
        </div>
      </div>
      <EditSection />
    </div>
  );
}
