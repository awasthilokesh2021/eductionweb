import React from "react";

const Contact = () => {
  return (
    <div className="w-full mb-4">
      <div className="container w-[70%] mx-auto my-14 px-4 py-4">
        <h1 className="text-center text-blue-500 uppercase">contact us</h1>
        <p className="text-center text-3xl font-bold mb-4">Get in touch</p>
        <div className="flex  py-10">
          <div className="flex-1 rounded-md">
            <div className="w-full bg-gray-200 p-6 rounded-md">
              <h1 className="font-bold mb-4">Send us a message</h1>
              <p className="text-gray-600 mb-2">
                Sure, I'd be happy to help. Could you provide me with more
                information about what kind of message you would like to send? For
                example, would you like to send a text message, an email, or a
                social media message?{" "}
              </p>
              <p className="text-gray-600 mb-2">@lokeshawasthi</p>
              <p className="text-gray-600 mb-2">+8442060273</p>
              <p className="text-gray-600 mb-2">42 src pg near petrol pump,jaipur</p>
            </div>
          </div>
          <div className="flex-1  px-10">
            <form>
              <div className="flex flex-col mb-2">
                <label>Your name</label>
                <input type="text" className="bg-slate-100 px-4 py-2 text-sm" placeholder="Enter your name" />
              </div>
              <div className="flex flex-col mb-2">
                <label>Phone number</label>
                <input type="text" className="bg-slate-100 px-4 py-2 text-sm" placeholder="Enter your phone number" />
              </div>
              <div className="flex flex-col mb-2">
              <label>Write your message here</label>
                <textarea className="bg-slate-100 px-4 py-2 text-sm" placeholder="Enter your message" />
              </div>
              <div className=" text-center mt-2">
                <button className=" bg-blue-600 px-4 py-1 rounded-full text-white">Submit now</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
