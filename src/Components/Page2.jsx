import React, { useState } from "react";
const Page2 = ({ setIsButtonVisible }) => {
  const [isSelected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    setIsButtonVisible(true);
  };

  return (
    <div className=" py-6">
      <div className=" max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Which are you most interested in?
        </h2>
        <p className=" text-gray-500 text-center" mt-2>
          Choose just one.This will help us get you started(but won't limit your
          experience).
        </p>

        <div
          onClick={() => handleClick(1)}
          className={`border-2 border-grey-600  mx-auto flex items-center space-x-4 cursor-pointer mt-10
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOA3Sf7BsU6JkqBWJNKu7OtKha8BIc3AD2kw&s"
              alt=""
            />
          </div>
          <div>
            <span className=" text-black-500 ">
              {" "}
              Learning specific skills to advance my career
            </span>
          </div>
        </div>

        <div
          onClick={() => handleClick(2)}
          className={`border-2 border-grey-600  mx-auto flex items-center space-x-4 cursor-pointer mt-2
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPgebUPJX6lj6gK4CVW7sHcdsvUuGz5ZhMYQ&s"
              alt=""
            />
          </div>
          <div>
            <span className=" text-black-500 ">
              {" "}
              Exploring new topics i'm interested in
            </span>
          </div>
        </div>

        <div
          onClick={() => handleClick(3)}
          className={`border-2 border-grey-600  mx-auto flex items-center space-x-4 cursor-pointer mt-2
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYokc3Q4IUuhOYRaAZHIK1iko5O8DMY-FXAA&s"
              alt=""
            />
          </div>
          <div>
            <span className=" text-black-500 ">
              {" "}
              Refreshing my math foundations
            </span>
          </div>
        </div>

        <div
          onClick={() => handleClick(4)}
          className={`border-2 border-grey-600  mx-auto flex items-center space-x-4 cursor-pointer mt-2
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwFMVHso2uyadjiFOfgTgWr9-FwUISWjeB0Q&s"
              alt=""
            />
          </div>
          <div>
            <span className=" text-black-500 ">
              {" "}
              Exercising my brain to stay sharp
            </span>
          </div>
        </div>
        <div
          onClick={() => handleClick(5)}
          className={`border-2 border-grey-600  mx-auto flex items-center space-x-4 cursor-pointer mt-2
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwgF24ag0snLJktdXDwBuZ9SNTNN23Lfpj7w&s"
              alt=""
            />
          </div>
          <div>
            <span className=" text-black-500 "> something else</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page2;
