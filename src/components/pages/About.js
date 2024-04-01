import React from "react";

const About = () => {
  return (
    <div className="w-full mb-4">
      <div className="container w-[70%] mx-auto my-14 px-4 py-4">
        <div className="flex items-center">
          <div className="w-[40%] rounded-md">
            <img src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-1396964,resizemode-75,msid-105177317/nri/study/international-students-have-returned-to-us-colleges-fueled-by-a-surge-from-india.jpg" alt="about" className="w-full" />
          </div>
          <div className="w-[60%] block px-10">
            <h1 className="text-3xl text-center mb-4 uppercase text-blue-500">About page</h1>
            <p className="text-xl text-gray-600">
              A page is one side of a leaf of paper, parchment or other material
              in a book, magazine, newspaper, or other collection of sheets, on
              which text or illustrations can be printed, written or drawn, to
              create documents. It can be used as a measure of communicating
              general quantity of information or more specific quantity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
