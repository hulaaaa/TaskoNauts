"use client";
import React from "react";
import { Spotlight } from "@/components/Spotlight/Spotlight";
import Link from "next/link";

export default function Home() {
  return (
    <div className="hiddenImageBg h-screen w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 animate-fadeIn">
          Welcome to<br/>TaskoNauts
        </h1>
        <p className="mt-5 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto animate-fadeInDelayed">
          Our new product offers simplified management of teams,
          task assignments, and easy management of all processes.
          <br />
          Get started now by clicking the button below
        </p>
        <Link href="/signup" className="flex justify-center mt-40">
          <button className="animate-buttonFadeIn relative flex justify-center text-center h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#303030_50%,#FFFFFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Start Now
            </span>
          </button>
        </Link>
        <p style={{ opacity: 0.3 }} className="animate-buttonFadeIn2 mt-10 font-normal text-base text-white max-w-lg text-center mx-auto">
          Already have an account?<br />
          <Link className="cursor-pointer text-white underline" href="/signin">Login</Link>
        </p>
      </div>
    </div>
    
  );
}
