"use client";

import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Photo1 from "@/public/photo1.png";
import Photo2 from "@/public/photo2.png";
import Photo3 from "@/public/photo3.png";
import Photo4 from "@/public/photo4.png";
import Photo5 from "@/public/photo5.png";
import Photo6 from "@/public/photo6.png";
import Photo7 from "@/public/photo7.png";
import Photo8 from "@/public/photo8.png";
import Photo9 from "@/public/photo9.png";
import Photo10 from "@/public/photo10.png";
import Photo11 from "@/public/photo11.png";
import Photo12 from "@/public/photo12.png";
import Photo13 from "@/public/photo13.png";
import Photo14 from "@/public/photo14.png";
import Photo15 from "@/public/photo15.png";
import Photo16 from "@/public/photo16.png";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="flex flex-col items-center mt-32">
      <div className="flex flex-col items-center justify-center text-center">
      <h4 className="text-lg font-bold mt-4 mb-1 mx-48 text-gray-900 dark:text-[#96a3b6]">
         Meet
        </h4>
        <h1 className="text-5xl dark:text-white font-extrabold">Our Experts Team</h1>
        <h4 className="text-lg mt-4 mb-1 mx-60 leading-relaxed font-normal text-gray-900 dark:text-[#96a3b6]">
          At Everything Talent, our innovative team develops AI-driven assessments and an advanced ATS to modernize hiring. We focus on reducing bias, making recruitment efficient, and providing accessible tools for companies of all sizes to attract top talent.
        </h4>
        <button type="button" className="px-3 py-2 mt-2 mb-10 text-sm font-medium text-center inline-flex items-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
<svg className="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
<path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
<path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
</svg>
Mail Us
</button>
      </div>

      <div className="h-[20rem] w-full mb-10 rounded-md flex flex-col bg-transparent items-center justify-center relative overflow-hidden mt-1">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    image: Photo1.src,
    name: "Vikram Sinha",
    title: "Founder / CEO",
    description: "Tech innovator solving real-world problems."
  },
  {
    image: Photo2.src,
    name: "Radhika Iyer",
    title: "Chief Strategy Officer",
    description: "Drives growth with strategic insights."
  },
  {
    image: Photo3.src,
    name: "Ethan Mitchell",
    title: "Chief Strategy Officer",
    description: "Drives growth with strategic insights."
  },
  {
    image: Photo4.src,
    name: "Alice Johnson",
    title: "Lead Developer",
    description: "Expert in full-stack development."
  },
  {
    image: Photo5.src,
    name: "Bob Smith",
    title: "UI/UX Designer",
    description: "Creating user-friendly interfaces."
  },
  {
    image: Photo6.src,
    name: "Charlie Brown",
    title: "Data Scientist",
    description: "Transforming data into insights."
  },
  {
    image: Photo7.src,
    name: "Daisy Clark",
    title: "Product Manager",
    description: "Leading product innovation."
  },
  {
    image: Photo8.src,
    name: "Eve Davis",
    title: "Marketing Specialist",
    description: "Creating impactful marketing strategies."
  },
  {
    image: Photo9.src,
    name: "Frank Miller",
    title: "Sales Executive",
    description: "Driving sales and building relationships."
  },
  {
    image: Photo10.src,
    name: "Grace Lee",
    title: "Customer Success Manager",
    description: "Ensuring client satisfaction."
  },
  {
    image: Photo11.src,
    name: "Alice Johnson",
    title: "Lead Developer",
    description: "Expert in full-stack development."
  },
  {
    image: Photo12.src,
    name: "Bob Smith",
    title: "UI/UX Designer",
    description: "Creating user-friendly interfaces."
  },
  {
    image: Photo13.src,
    name: "Charlie Brown",
    title: "Data Scientist",
    description: "Transforming data into insights."
  },
  {
    image: Photo14.src,
    name: "Radhika Iyer",
    title: "Chief Strategy Officer",
    description: "Drives growth with strategic insights."
  },
  {
    image: Photo15.src,
    name: "Ethan Mitchell",
    title: "Chief Strategy Officer",
    description: "Drives growth with strategic insights."
  },
  {
    image: Photo16.src,
    name: "Vikram Sinha",
    title: "Founder / CEO",
    description: "Tech innovator solving real-world problems."
  }
];