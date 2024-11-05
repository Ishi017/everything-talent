import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    image: StaticImageData | string;
    name: string;
    title: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, [items]); // Run again if items change

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        // Check if the item is a valid node
        if (item instanceof HTMLElement) {
          const duplicatedItem = item.cloneNode(true);
          // Ensure scrollerRef.current is still valid before appending
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      const animationDirection = direction === "left" ? "forwards" : "reverse";
      containerRef.current.style.setProperty("--animation-direction", animationDirection);
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
    ref={containerRef}
    className={cn(
      "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
      className
    )}
    style={{ height: '10rem' }} // Apply height directly
  >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
          key={idx}
          className={`w-[220px] max-w-full relative rounded-2xl flex-shrink-0 border-slate-700 px-4 py-3 md:w-[220px] 
                      bg-transparent 
                      dark:from-[#3b0a45] dark:to-[#7b2a5d] dark:border-none`} // Adjusted dark mode colors
        >
            <div className="flex flex-col items-center text-center">
              <Image
                src={item.image}
                alt={item.name}
                className="w-12 h-12 rounded-full mb-4 object-cover" // Reduced size
                width={10}
                height={10}
              />
              <h3 className="text-lg font-bold text-slate-700 dark:text-[#96a3b6] ">{item.name}</h3>
              <p className="text-sm text-slate-700 dark:text-sky-100 ">{item.title}</p>
              {/* <p className="text-sm text-sky-50 mt-4">{item.description}</p> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}; 