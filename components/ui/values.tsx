"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Customer from "@/public/customer.png";
import Transparency from "@/public/transparency.png";
import Innovation from "@/public/innovation.png";
import Simplicity from "@/public/simplicity.png";
import Security from "@/public/security.png";
import Inclusivity from "@/public/inclusivity.png";

const Values = () => {
  const values = [
    { image: Customer, title: "Customer Success", description: "Your success is our success. We are devoted to helping you achieve your hiring goals.", color: "text-red-500 border-red-400" },
    { image: Innovation, title: "Innovation", description: "We continuously improve our technology to stay ahead of trends.", color: "text-yellow-500 border-yellow-400" },
    { image: Simplicity, title: "Simplicity", description: "Our solutions are designed to streamline your hiring process without complexity.", color: "text-green-500 border-green-400" },
    { image: Transparency, title: "Transparency", description: "We value open communication to build trust through clarity and integrity.", color: "text-blue-500 border-blue-400" },
    { image: Inclusivity, title: "Inclusivity", description: "We foster a diverse and inclusive environment by ensuring fairness.", color: "text-purple-500 border-purple-400" },
    { image: Security, title: "Security", description: "We prioritize data protection with robust security measures for your peace of mind.", color: "text-pink-500 border-pink-400" },
  ];

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-center mb-12">
        <h1 className="text-5xl dark:text-white font-extrabold">Our Values</h1>
        <p className="text-lg md:text-xl text-slate-800 dark:text-[#96a3b6] mt-4 leading-relaxed">
          At Everything Talent, our core values drive everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl">
        {values.map((value, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

          return (
            <motion.div
              key={index}
              ref={ref}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col items-center justify-between h-52 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 text-center border-2 ${value.color} transition-transform duration-200`}
            >
              <Image src={value.image} alt={value.title} width={50} height={50} className="mb-4 rounded" />
              <h4 className={`text-lg font-semibold mb-2 ${value.color}`}>{value.title}</h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;