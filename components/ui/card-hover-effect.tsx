"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export const HoverEffect = ({
    items,
    className,
  }: {
    items: {
      title: string;
      description: string;
      image?: string | StaticImageData;
    }[];
    className?: string;
  }) => {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10",
        className
      )}
    >
      {items.map((item, idx) => (
        <div
          key={idx}  // Add key prop here
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-blue-400 dark:bg-blue-800/[0.5] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card image={item.image}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </div>
      ))}
    </div>
  );
};

export const Card = ({
    image,
    className,
    children,
  }: {
    image?: string | StaticImageData;
    className?: string;
    children: React.ReactNode;
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl h-full w-full p-4 bg-stone-400 overflow-hidden border border-transparent dark:border-[#010817] group-hover:border-slate-700 relative z-20 shadow-lg group hover:bg-white/[0.6] transition-all duration-300",
          className
        )}
      >
        {image && (
          <div className="w-[200px] h-[200px] overflow-hidden rounded-t-2xl mb-4">
            <Image
              src={image}
              alt=""
              layout="fill"
              objectFit="cover"
            />
          </div>
        )}
  
        <div className="relative z-50">
          <div className="p-4">{children}</div>
        </div>
      </div>
    );
  };

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn("text-stone-100 font-bold tracking-wide mt-2", className)}>
      {children}
    </h3>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-0 text-neutral-100 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};