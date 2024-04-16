import React, { useState } from "react";

const Page4 = ({ setIsButtonVisible }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsButtonVisible(true);
  };

  return (
    <div className="mx-2 py-6 mb-2 md:mt-20 md:mb-20 md:mx-10">
      <h2 className="text-2xl font-bold mb-2 text-center">
        What is your math comfort level?
      </h2>
      <p className="text-center mb-6">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-2 ">
        <MathProblemOption
          title="Arithmetic"
          problem="5 × 1/2 = ?"
          isSelected={selectedOption === "arithmetic"}
          onClick={() => handleOptionClick("arithmetic")}
        />
        <MathProblemOption
          title="Basic Algebra"
          problem="3x + 5 = 4"
          isSelected={selectedOption === "basic-algebra"}
          onClick={() => handleOptionClick("basic-algebra")}
        />
        <MathProblemOption
          title="Intermediate Algebra"
          problem="x = (-b ± √b² - 4ac) / 2a"
          isSelected={selectedOption === "intermediate-algebra"}
          onClick={() => handleOptionClick("intermediate-algebra")}
        />
        <MathProblemOption
          title="Calculus"
          problem="∫x²dx = ?"
          isSelected={selectedOption === "calculus"}
          onClick={() => handleOptionClick("calculus")}
        />
      </div>
    </div>
  );
};

const MathProblemOption = ({ title, problem, isSelected, onClick }) => {
  return (
    <div
      className={`bg-white shadow-md rounded mt-6 md:p-4 w-full md:w-full cursor-pointer transition-all duration-300 ${
        isSelected
          ? " border-2 border-yellow-300"
          : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
      }`}
      onClick={onClick}
    >
      <h3
        className="text-center
       font-bold"
      >
        {title}
      </h3>
      <p className="text-center text-sm">{problem}</p>
    </div>
  );
};

export default Page4;
