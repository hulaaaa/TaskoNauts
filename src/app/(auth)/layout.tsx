import type { Metadata } from "next";
import "../../app/(auth)/style.module.css"
import BackForwardBtn from "./ui/BackForwardBtn";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="h-screen w-screen 
      dark:bg-black bg-white dark:bg-grid-white/[0.2] 
      bg-grid-black/[0.2] relative 
      flex items-center justify-center">
      <BackForwardBtn type="back" />
      {children}
      <BackForwardBtn type="form" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}