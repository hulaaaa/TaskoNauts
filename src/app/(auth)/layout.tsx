'use client'
import type { Metadata } from "next";
import "../../app/(auth)/style.module.css"
import BackForwardBtn from "./ui/BackForwardBtn";
import {useEffect, useLayoutEffect, useState} from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useLayoutEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        if (typeof window !== "undefined") {
            handleResize();
            window.addEventListener("resize", handleResize);
        }

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
      <>
          {
              isMobile ? (
                  <div className="h-screen w-screen  dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center ">
                      <div className='w-screen flex flex-row items-center justify-between my-10'>
                          <BackForwardBtn type="back"/>
                          <BackForwardBtn type="form"/>
                      </div>
                      {children}

                      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_52%,black)]"></div>
                  </div>
                  ):(
                  <div className="h-screen w-screen  dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">

                      <BackForwardBtn type="back"/>
                      {children}
                      <BackForwardBtn type="form"/>
                      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_52%,black)]"></div>
                  </div>
              )
          }
      </>

  );
}