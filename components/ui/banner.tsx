import React from "react";

function Main() {
  return (
    <div className="mx-4 md:mx-16 md:my-32">
      <section className="flex flex-col items-center justify-center mt-12 md:px-56 py-10">
        <div className="md:w-3/4 flex flex-col items-center text-center">
          <div className="rounded-full ">
            <p>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a45ee9] to-[#eb5b93] dark:from-[#a45ee9] dark:to-[#eb5b93] font-bold text-[2rem] text-3xl lg:text-7xl md:mr-12 md:mt-0">
                Everything Talent
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-black dark:bg-white font-bold text-[2rem] text-3xl lg:text-6xl md:mr-12 md:mt-0 md:my-20">
                simplifies hiring with a free ATS and AI-driven assessments.
              </span>
            </p>
            <p className="text-gray-700 dark:text-[#96a3b6] text-lg lg:text-lg md:mt-8 md:my-8">
              At Everything Talent, we aim to revolutionize the hiring process by making it seamless and insightful. Our platform leverages advanced AI to ensure every candidate is assessed fairly, while our free Applicant Tracking System (ATS) simplifies recruitment for companies of all sizes. With a focus on transparency, efficiency, and innovation, we are committed to connecting talent with meaningful opportunities.
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mt-4">
          <button type="button" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Choose a plan
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
          <button type="button" className="text-white bg-blue-500 dark:bg-slate-800/[0.7] dark:border-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Sign Up
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default Main;