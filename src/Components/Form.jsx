import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx";
import Page4 from "./Page4.jsx";
import Page5 from "./Page5.jsx";
import Page6 from "./Page6.jsx";
import Page7 from "./Page7.jsx";
import ProgressBar from "./ProgressBar.jsx";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(1);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
    setProgress(progress + 1);
    setIsButtonVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert("Form Submitted successfully!");
  };

  return (
    <div className="">
      <div className="mx-6 mt-4 w-100% bg-gray-500 rounded-full dark:bg-gray-500">
        <ProgressBar progress={progress} />
      </div>
      <div className=" bg-white ">
        {currentStep === 1 && <Page1 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 2 && <Page2 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 3 && <Page3 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 4 && <Page4 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 5 && <Page5 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 6 && <Page6 setIsButtonVisible={setIsButtonVisible} />}
        {currentStep === 7 && <Page7 setIsButtonVisible={setIsButtonVisible} />}
      </div>
      <div className="flex justify-center pb-4">
        {isButtonVisible && currentStep >= 1 && currentStep < 7 && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center mr-4"
            onClick={handleNextStep}
          >
            Continue <FontAwesomeIcon icon={faAngleRight} className="ml-2" />
          </button>
        )}
        {isButtonVisible && currentStep === 7 && (
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
            type="submit"
            onClick={handleSubmit}
          >
            <FontAwesomeIcon icon={faCheckCircle} className="mr-2" /> Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
