"use client";

import { HoverEffect } from "../components/ui/card-hover-effect";
import Image from "next/image";
import innovation from "@/public/innovation.jpg";
import teamwork from "@/public/teamwork.jpg";
import impact from "@/public/impact.jpg";
import insight from "@/public/insight.jpg";
import technology from "@/public/technology.jpg";
import global from "@/public/global.png";

// Declare the projects array before using it in the CardHoverEffectDemo
export const projects = [
  {
    title: "Innovation",
    description: "Leading solutions tailored for modern talent acquisition.",
    image: innovation,
  },
  {
    title: "Collaboration",
    description: "Built to align teams and drive success.",
    image: teamwork,
  },
  {
    title: "Insight",
    description: "Data-driven tools to optimize recruitment strategies.",
    image: insight,
  },
  {
    title: "Impact",
    description: "Delivering measurable growth with strategic hires.",
    image: impact,
  },
  {
    title: "Technology",
    description: "AI-enhanced recruitment for precise results.",
    image: technology,
  },
  {
    title: "Global Reach",
    description: "Connecting talent worldwide with seamless integration.",
    image: global,
  },
];

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}