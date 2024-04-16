import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpLong } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

const Page6 = ({ setIsButtonVisible }) => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [setIsButtonVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => prevRotation + 1);
    }, 400); // Rotate the wheel every 50 milliseconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" py-6 mb-2 md:mt-20 md:mb-20 ">
      <div
        className=" p-4 mt-5 mb-8 mx-auto text-center w-20 h-20 border-4 border-yellow-500 rounded-full animate-spin"
        style={{
          transform: `rotate(${(rotation * 360) / 45}deg)`, // Rotate the wheel based on the current rotation value
        }}
      >
        <FontAwesomeIcon
          icon={faUpLong}
          className={`text-blue-800 mx-4 text-3xl font-bold`}
        />
      </div>

      <div>
        <h2 className="w-full text-center text-2xl font-bold mb-2 ">
          Finding learning path recommendations for you based on your responses
        </h2>
      </div>
    </div>
  );
};

export default Page6;
