import React, { useState } from "react";
const Page7 = ({ setIsButtonVisible }) => {
  const [isSelected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    setIsButtonVisible(true);
  };
  return (
    <div className=" py-6 mb-2 md:mt-16 md:mb-10">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-3xl">
            Learning paths based on your answers
          </h2>
          <p className="mt-2 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Choose one to get started.You can switch anytime.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center space-y-7 sm:space-y-0 sm:space-x-8">
          <div
            onClick={() => handleClick(1)}
            className={`flex-1 border-2 border-grey-600 hover:border-slate-300 p-4
          ${
            isSelected === 1
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
          >
            <div className=" rounded-lg bg-yellow-600 w-fit">MOST POPULAR</div>
            <p className="leading-relaxed">
              <span className="font-bold">Foundation Math </span>
              <span>
                Build your foundational skills in algebra,geometry and
                probability.
              </span>
            </p>
          </div>

          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyYUFrU7d-UXZGF7tiYFDMLHhZ-hzBQyGYw&s"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>

          <div
            onClick={() => handleClick(2)}
            className={`flex-1 border-2 border-grey-600 hover:border-slate-300 p-4
          ${
            isSelected === 2
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
          >
            <p className="leading-relaxed">
              <span className="font-bold">Mathematical Thinking </span>Build
              your foundational skills in algebra,geometry and probability.
            </p>
          </div>

          <div className="flex-1">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpyYUFrU7d-UXZGF7tiYFDMLHhZ-hzBQyGYw&s"
              alt=""
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page7;
