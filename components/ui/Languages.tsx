// Languages.tsx
"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards2";
import JavascriptIcon from "@/public/JavascriptIcon.png";
import RubyIcon from "@/public/RubyIcon.png";
import PythonIcon from "@/public/PythonIcon.png";
import JavaIcon from "@/public/JavaIcon.png";
import PHPIcon from "@/public/PHPIcon.png";
import ReactIcon from "@/public/React.png";
import Typescript from "@/public/Typescript.png";

export function Languages() {
  return (
    <div className="flex flex-col items-center mt-12">
      <div className="flex flex-col items-center text-center">
        <h4 className="text-lg font-bold mt-4 mb-1 text-gray-900 dark:text-[#96a3b6]">Explore</h4>
        <h1 className="text-3xl dark:text-white font-extrabold">15+ Programming Languages We Use</h1>
        <h4 className="text-lg mt-4 mb-1 mx-60 leading-relaxed font-normal text-gray-900 dark:text-[#96a3b6]">
          Our team leverages modern programming languages to create scalable, efficient, and secure solutions for various projects.
        </h4>
      </div>

      <div className="h-[10rem] mb-2 w-full flex items-center justify-center relative overflow-hidden mt-6">
        <InfiniteMovingCards
          items={programmingLanguages}
          direction="left"
          speed="slow"
        />
        
      </div>
      <div className="h-[10rem] mb-20 w-full flex items-center justify-center relative overflow-hidden mt-6">
        <InfiniteMovingCards
          items={programmingLanguages}
          direction="right"
          speed="slow"
        />
        
      </div>
    </div>
  );
}

// List of languages with their icons, titles, and descriptions
const programmingLanguages = [
  {
    image: JavascriptIcon.src,
    name: "JavaScript",
    title: "Web Development",
    description: "The language of the web for interactive applications.",
  },
  {
    image: RubyIcon.src,
    name: "Ruby",
    title: "Web Development",
    description: "A dynamic language for building web applications.",
  },
  {
    image: PythonIcon.src,
    name: "Python",
    title: "Data Science",
    description: "Perfect for data analysis, machine learning, and more.",
  },
  {
    image: JavaIcon.src,
    name: "Java",
    title: "Enterprise Applications",
    description: "Robust and widely-used for enterprise solutions.",
  },
  {
    image: PHPIcon.src,
    name: "PHP",
    title: "Server-Side Scripting",
    description: "A popular choice for backend web development.",
  },
  {
    image: ReactIcon.src,
    name: "React",
    title: "JS Framework",
    description: "Commonly used with Unity for Web development.",
  },
  {
    image: Typescript.src,
    name: "Typescript",
    title: "Systems Programming",
    description: "Safe, concurrent, and practical programming.",
  },
];