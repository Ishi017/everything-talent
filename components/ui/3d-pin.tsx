"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const PinContainer = ({
  children,
  title,
  description,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <motion.div
      className={cn(
        "relative group/pin z-50 cursor-pointer",
        containerClassName
      )}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{
        perspective: "1000px",
      }}
    >
      <motion.div
        style={{
          transform: transform,
        }}
        className="absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_16px_rgb(0_0_0/0.4)]">
          <img
            src="/path/to/your/image.jpg"
            alt="Pin"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 transition duration-300">
            <div className="bg-black bg-opacity-50 p-4 rounded">
              <h3 className="text-white text-lg font-bold">{title}</h3>
              <p className="text-white">{description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};