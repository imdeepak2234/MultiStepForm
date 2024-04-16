import React, { useState } from "react";
const Page1 = ({ setIsButtonVisible }) => {
  const [isSelected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    setIsButtonVisible(true);
  };

  return (
    <div className=" py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-8 sm:space-y-0 sm:space-x-8"></div>
        <h2 className=" text-center text-2xl font-bold mb-2">
          Which describes you best?
        </h2>
        <p className=" text-gray-500 text-center">
          This will help us personalize your experience.
        </p>

        <div
          onClick={() => handleClick(1)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-7
          ${
            isSelected === 1
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://png.pngtree.com/png-clipart/20200224/original/pngtree-cartoon-color-simple-male-avatar-png-image_5230557.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Student</span>
            <span className=" text-gray-500 "> or soon to be enrolled</span>
          </div>
        </div>

        <div
          onClick={() => handleClick(2)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-2
          ${
            isSelected === 2
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-IjMb4XwFw2b1jj-KfltsQfM2QaUJnsXRPw&s"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Professional</span>
            <span className=" text-gray-500 "> pursuing a career</span>
          </div>
        </div>

        <div
          onClick={() => handleClick(3)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-2
          ${
            isSelected === 3
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://as1.ftcdn.net/v2/jpg/02/85/47/98/1000_F_285479801_6bC4TjKaRRcTmpyQEyA3wg4ICVSH17Dx.jpg"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Parent</span>
            <span className=" text-gray-500 "> of a school age child</span>
          </div>
        </div>

        <div
          onClick={() => handleClick(4)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-2
          ${
            isSelected === 4
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2whjzwoBz71waeE07wh1L_sfjpdm6IIf7g&s"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Lifelong learner</span>
          </div>
        </div>
        <div
          onClick={() => handleClick(5)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-2
          ${
            isSelected === 5
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFeWxu_aevHQJMaXzdct19v6zhhlHzPAE-6w&s"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Teacher</span>
          </div>
        </div>
        <div
          onClick={() => handleClick(6)}
          className={`border-2 border-grey-600 hover:border-slate-300 mx-auto flex items-center space-x-4 cursor-pointer mt-2
          ${
            isSelected === 6
              ? " border-2 border-yellow-300"
              : "hover:bg-gray-100 active:bg-gray-200 active:scale-95"
          }
          `}
        >
          <div>
            <img
              className=" h-12 w-12"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxefB3c7l4YbeglPEvu0t5f_6YlfCBAO9utw&s"
              alt=""
            />
          </div>
          <div>
            <span className="text-bold ">Other</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page1;
