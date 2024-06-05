"use client";
import React from "react";
import { Spotlight } from "@/components/Spotlight/Spotlight";
import logoTribe from '../../public/logoTribe.svg';
import { HoverBorderGradient } from "@/components/HoverBorderGradient/HoverBorderGradient";
import Image from "next/image";
export default function Home() {

  return (    
    <div className="hiddenImageBg h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
    <Spotlight
      className="-top-40 left-0 md:left-60 md:-top-20"
      fill="white"
    />
    <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
      <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 animate-fadeIn">
        Welcome To<br /> TribeTasker
      </h1>
      <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto animate-fadeInDelayed">
        Our new product offers simplified management of teams,
        task assignments, and easy management of all processes.
        <br/>
        Get started now by clicking the button below
      </p>
      <div className="animate-buttonFadeIn m-40 flex justify-center text-center">
        <HoverBorderGradient
          duration={300}
          containerClassName="rounded-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
        >
          <Image src={logoTribe} width={22} alt="logoTribe"/>
          <span><b>Tribe</b>Tasker</span>
        </HoverBorderGradient>
      </div>
    </div>
  </div>
  );
}
