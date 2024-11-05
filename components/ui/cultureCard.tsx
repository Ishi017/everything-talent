"use client";
import React, { useEffect, useRef, useState } from 'react';

const CultureCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleObserver: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleObserver, {
      threshold: 0.1,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return (
    <div className="bg-transparent p-8 rounded-lg max-w-6xl mx-auto">
      <div className="text-center mb-12">
      <h4 className="text-md font-bold mt-4 mb-2 mx-48 text-gray-900 dark:text-[#96a3b6]">
  Experience
        </h4>
        <h1 className="text-5xl font-bold text-gray-800 dark:text-white">Our Culture</h1>
        <p className="text-xl text-gray-600 dark:text-[#96a3b6] mt-2">
          At Everything Talent, we foster an inclusive and innovative environment where our values guide our actions.
        </p>
      </div>

      <div ref={ref} className="grid grid-cols-1 max-w-4xl mx-auto md:grid-cols-2 gap-6 mb-6">
        {[
          {
            title: "Empowerment",
            description:
              "We empower our team members to take initiative and make decisions. Each voice matters, and everyone contributes to our success.",
          },
          {
            title: "Agile Mindset",
            description:
              "Our agile mindset allows us to adapt swiftly to industry changes. We embrace experimentation and learning from failures.",
          },
          {
            title: "Sustainability",
            description:
              "We are committed to sustainable practices, reducing our carbon footprint, and contributing positively to our community.",
          },
          {
            title: "Community Engagement",
            description:
              "We actively engage with our local communities through volunteering and partnerships, striving to make a meaningful impact.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className={`bg-gray-100 dark:bg-[#1d293b] p-3 rounded-lg flex flex-col items-center transition-transform duration-500 ${isVisible ? 'opacity-100 scale-100 animate-cardIn' : 'opacity-0 scale-75'}`}
            style={{
              animationDelay: `${index * 100}ms`,
              animationDuration: '500ms',
            }}
          >
            <div className="text-blue-500 text-xl mb-4">💙</div>
            <h3 className="text-xl font-semibold text-blue-500">{card.title}</h3>
            <p className="text-gray-600 text-sm dark:text-[#96a3b6] text-center">{card.description}</p>
          </div>
        ))}
      </div>

      <div className="text-gray-700 mt-12 mb-8">
        <h5 className="text-md text-center dark:display-none dark:text-[#96a3b6] ">
          Everything Talent is built on the principles of collaboration, respect, and continuous growth. Our culture fosters creativity, encourages learning, and supports each individual’s development.
          We are committed to making a positive impact on the recruitment landscape. Join us on this journey to experience the difference our platform can make in your hiring process.
        </h5>
      </div>

      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-600 px-6 py-2 rounded-md transition duration-100 hover:bg-blue-700 focus:outline-none"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default CultureCard;