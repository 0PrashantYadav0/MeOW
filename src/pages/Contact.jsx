import React from "react";
import Bar from "../components/Bar";
import Links from "../components/Links";

function Contact() {
  return (
    <>
      <div className="flex p-12 justify-around max-lg:flex-col">
        <div className="flex justify-between w-1/3 max-lg:flex-wrap text-center max-lg:w-full items-center">
          <p className="bg-text text-6xl font-semibold">
            You can contact us in many ways....
          </p>
        </div>
        <div className="flex justify-between ">
          <div>
            <div className="text-white p-12 flex justify-between items-center max-sm:block max-sm:py-12 max-sm:px-2">
              <div className="px-24 max-lg:px-4 max-sm:p-0">
                <div className="bg-bar w-20 rounded-lg h-1" />
                <p className="font-medium py-1">By Email</p>
              </div>
              <div className="">
                <p className="text-[#81afdd] w-[80%] max-lg:w-full">
                  Communicate swiftly and securely by email, a ubiquitous
                  digital messaging platform connecting individuals and
                  businesses worldwide.
                </p>
              </div>
            </div>
            <div className="text-white p-12 flex justify-between items-center max-sm:block max-sm:py-12 max-sm:px-2">
              <div className="px-24 max-lg:px-4 max-sm:p-0">
                <div className="bg-bar w-20 rounded-lg h-1" />
                <p className="font-medium py-1">By Github</p>
              </div>
              <div>
                <p className="text-[#81afdd] w-[80%] max-lg:w-full">
                  GitHub is a collaborative platform for developers, enabling
                  version control, code sharing, and project management to
                  streamline and enhance software development processes.
                </p>
              </div>
            </div>
            <div className="text-white p-12 flex justify-between items-center max-sm:block max-sm:py-12 max-sm:px-2">
              <div className="px-24 max-lg:px-4 max-sm:p-0">
                <div className="bg-bar w-20 rounded-lg h-1" />
                <p className="font-medium py-1">By other platform</p>
              </div>
              <div>
                <p className="text-[#81afdd] w-[80%] max-lg:w-full">
                  Collaborate seamlessly on various projects through a versatile
                  platform, fostering communication, innovation, and collective
                  productivity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
      <Bar
        text={" You can direct go to github page from here ."}
        buttontext={"Github"}
        to="/"
      />
    </>
  );
}

export default Contact;
