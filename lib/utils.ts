// lib/utils.ts

// utils.js
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // Combine the class names using clsx and merge Tailwind CSS classes with twMerge
  return twMerge(clsx(inputs));
}