import React from 'react';
import Image from "next/image";
import story1 from "@/public/story1.png";
import story2 from "@/public/story2.png";
import story3 from "@/public/story3.png";
import { ContainerScroll } from '../container-scroll-animation';
import Result from "@/public/results.png";

const Story = () => {
  return (
    <div className="flex flex-col m-4 md:m-8 lg:m-16">
      
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
                  <h4 className="text-lg font-bold text-center mt-4 mb-1 mx-48 text-gray-900 dark:text-[#96a3b6]">
                  Discover
                 </h4>
              <h1 className="text-6xl font-semibold text-black dark:text-white">
                <span className="md:text-7xl font-bold mt-1 leading-none text-transparent bg-clip-text bg-gradient-to-r from-[#a45ee9] to-[#eb5b93] dark:from-[#a45ee9] dark:to-[#eb5b93]">
                  Our Story 
                </span>
              </h1>
            </>
          }
        >
          <Image
            src={Result}
            alt="hero"
            height={480} // Reduced height
            width={960}  // Reduced width
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>

        <div className="flex flex-col items-center text-center mt-2">
          <p className="text-lg md:text-xl mx-6 lg:mx-40 text-slate-800 dark:text-[#96a3b6] leading-relaxed">
            We not only make the world’s most comfortable hammocks, but through training and sustainable job creation, we empower our weavers and their families to break the cycle of poverty and build a brighter future.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-12 space-y-6 md:space-y-0 md:space-x-10">
        <div className="max-w-md text-center md:text-left">
          <h3 className="font-bold dark:text-white text-2xl mb-3">The Journey to Transform Recruitment</h3>
          <p className="text-base text-slate-800 dark:text-[#96a3b6] leading-relaxed">
            Everything Talent was founded with a vision to transform the way organizations approach hiring. Frustrated by traditional, cumbersome methods of recruiting and recognizing the potential for bias in evaluating candidates, our founder set out to create a solution that simplifies the hiring journey while leveraging the latest advancements in technology.
          </p>
        </div>
        <Image
          src={story1}
          alt="Company Logo"
          width={360}  // Reduced width
          height={246} // Reduced height
          className="transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600"
        />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-12 space-y-6 md:space-y-0 md:space-x-10">
        <Image
          src={story2}
          alt="Company Logo"
          width={360}  // Reduced width
          height={246} // Reduced height
          className="transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600"
        />
        <div className="max-w-md text-center md:text-left">
          <h3 className="font-bold  dark:text-white text-2xl mb-3">Combining Innovation with Efficiency</h3>
          <p className="text-base text-slate-800 dark:text-[#96a3b6] leading-relaxed">
            Our platform combines a free Applicant Tracking System (ATS) with AI-driven tech assessments. This allows you to evaluate candidates quickly and accurately, regardless of their background or the complexity of the role. We are committed to leveraging the latest technology to streamline the recruitment process and reduce bias.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center my-8 md:my-12 space-y-6 md:space-y-0 md:space-x-10">
        <div className="max-w-md text-center md:text-left">
          <h3 className="font-bold  dark:text-white text-2xl mb-3">Democratizing Recruitment Tools</h3>
          <p className="text-base text-slate-800 dark:text-[#96a3b6] leading-relaxed">
            We believe in democratizing access to powerful recruitment tools, making them available to both startups and established companies alike. Our goal is to level the playing field, ensuring that every organization, regardless of size, can compete for and secure the best talent available.
          </p>
        </div>
        <Image
          src={story3}
          alt="Company Logo"
          width={360}  // Reduced width
          height={246} // Reduced height
          className="transition-transform duration-300 transform hover:scale-110 hover:shadow-2xl rounded-xl hover:bg-gradient-to-r from-blue-600 to-purple-600"
        />
      </div>
    </div>
  );
}

export default Story;