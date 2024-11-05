"use client";
import React from "react";
import { FaBrain, FaHandshake, FaShieldAlt, FaTools } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaBrain className="text-blue-500 text-4xl" />,
    title: "AI-Driven Insights",
    description:
      "Leverage AI-powered algorithms that analyze millions of data points to find the best talent faster, reducing hiring time and improving candidate-job fit.",
    statistic: "85% match accuracy",
  },
  {
    icon: <FaHandshake className="text-blue-500 text-4xl" />,
    title: "Candidate Experience Focus",
    description:
      "Enhance candidate experience with personalized job suggestions, real-time feedback, and streamlined applications.",
    statistic: "90% candidate satisfaction",
  },
  {
    icon: <FaTools className="text-blue-500 text-4xl" />,
    title: "Seamless Integrations",
    description:
      "Integrate with popular HR platforms, making EverythingTalent.ai a versatile addition to existing workflows.",
    statistic: "50% faster onboarding",
  },
  {
    icon: <FaShieldAlt className="text-blue-500 text-4xl" />,
    title: "Security and Data Privacy",
    description:
      "Ensure data privacy and security, essential for trust in an AI-based platform.",
    statistic: "100% data encryption",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#a45ee9] to-[#eb5b93] dark:from-[#a45ee9] dark:to-[#eb5b93] font-bold text-sm mb-4 ">
               You'll be in good company
</p>
        <h2 className="text-5xl dark:text-white font-bold mb-8 text-gray-800">
          Why Choose Us
        </h2>
        <p className="mb-12 dark:text-[#96a3b6] text-xl">
          Discover what makes EverythingTalent.ai a leader in AI-driven talent acquisition.
        </p>
        

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col bg-white dark:bg-[#1d293b] p-6 rounded-lg shadow-lg transition-shadow duration-300 hover:shadow-[0px_4px_20px_rgba(134,0,243,0.3),8px_8px_20px_rgba(255,20,147,0.3)] hover:scale-105 transform transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center justify-center mb-4">
                <motion.div whileHover={{ rotate: 19 }}>
                  {feature.icon}
                </motion.div>
              </div>
              <h3 className="text-xl font-semibold dark:text-white text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{feature.description}</p>
              <div className="text-blue-500 font-semibold mt-auto">
                {feature.statistic}
              </div>
            </motion.div>
          ))}
          
        </div>
        <button type="button" className="text-white m-12 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
Choose plan | Sign Up
<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>

      </div>
    </section>
  );
};

export default WhyChooseUs;