import React, { useState } from "react";

const Profile = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [clickedIndex, setClickedIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleClick = (index) => {
    setClickedIndex(clickedIndex === index ? null : index);
  };

  return (
    <div className="w-full mb-4">
      <div className="container w-[70%] mx-auto my-14 py-4 px-4">
        <h1 className=" text-center text-blue-500">Our Profile</h1>
        <p className="text-center text-3xl font-bold mb-8">What We offer...</p>
        <div className="flex justify-between items-center my-14">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(index)}
            >
              <img
                className="block rounded-md"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiwTP-KFG8lsKFQQSYn7bnhteoZTLDAEhqPA&usqp=CAU"
                alt="student"
                style={{ flexBasis: "80px" }}
              />
              {(hoveredIndex === index || clickedIndex === index) && (
                <div
                  className="absolute inset-0 bg-black opacity-50 rounded-md"
                  style={{ transition: "opacity 0.3s ease" }}
                ></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
