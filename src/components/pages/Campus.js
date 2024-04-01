import React from "react";

const Campus = () => {
  return (
    <div className="w-full mb-4">
      <div className="container w-[70%] mx-auto my-14 py-4 px-4">
        <h1 className=" text-center text-blue-500 uppercase">gallery</h1>
        <p className="text-center text-3xl font-bold mb-4">Campus photos</p>
        <div className="py-10">
          <div className="flex justify-between items-center gap-4">
            <div>
              <img
                className=" rounded-md w-full"
                src="https://previews.123rf.com/images/prasannapatil/prasannapatil2107/prasannapatil210700210/171714949-young-indian-college-student-showing-thumps-up.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className=" rounded-md w-full"
                src="https://previews.123rf.com/images/prasannapatil/prasannapatil2107/prasannapatil210700210/171714949-young-indian-college-student-showing-thumps-up.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className=" rounded-md w-full"
                src="https://previews.123rf.com/images/prasannapatil/prasannapatil2107/prasannapatil210700210/171714949-young-indian-college-student-showing-thumps-up.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                className=" rounded-md w-full"
                src="https://previews.123rf.com/images/prasannapatil/prasannapatil2107/prasannapatil210700210/171714949-young-indian-college-student-showing-thumps-up.jpg"
                alt=""
              />
            </div>
          </div>
          <div className=" text-center mt-6">
            <button className=" bg-blue-600 text-white px-4 py-1 rounded-full">
              See more here{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
