import React from "react";
import Bar from "../components/Bar";
import Links from "../components/Links";

function Contact() {
  return (
    <>
      <div className="flex p-12 justify-around max-md:flex-wrap">
        <div className="flex justify-between w-1/3 max-md:flex-wrap max-md:w-full items-center">
          <p className="bg-text text-6xl font-semibold">
            You can contact us in many ways....
          </p>
        </div>
        <div className="flex justify-between ">
          <div>
            <div className="text-white p-12 ">
              <div className="bg-bar w-20 rounded-lg h-1" />
              <p className="font-medium py-1">By Email</p>
            </div>
            <div className="text-white p-12 ">
              <div className="bg-bar w-20 rounded-lg h-1" />
              <p className="font-medium py-1">By Github</p>
            </div>
            <div className="text-white p-12">
              <div className="bg-bar w-20 rounded-lg h-1" />
              <p className="font-medium py-1">By other platform</p>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[#81afdd] p-12 w-[80%] max-md:w-full">
                Get the current working mail by github.....
              </p>
            </div>
            <div>
              <p className="text-[#81afdd] p-12 w-[80%] max-md:w-full">
                  You can get the link of github in links present here....
              </p>
            </div>
            <div>
              <p className="text-[#81afdd] p-12 w-[80%] max-md:w-full">
                You can find me in X, Instagram, Facebook.... For quick and easy Access use mail only 
              </p>
            </div>
          </div>
        </div>
      </div>
      <Links />
      <Bar text={ " You can direct go to github page from here ." } buttontext={"Github"} to="/"/>
      </>
  );
}

export default Contact;
