import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getTailwindColorByString(text: string) {
  switch (text) {
    case "python":
      return "purple-400";
    case "typescript":
      return "blue-400";
    case "javascript":
      return "orange-400";
    default:
      return "green-400";
  }
}
