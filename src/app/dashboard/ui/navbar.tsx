"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../../components/Spotlight/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const url = usePathname();
  const currentPath = url;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "z-10 flex mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-md z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isActive = currentPath === navItem.link;

          return (
            <Link
              data-cursor-pointer
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500",
                isActive ? "border text-sm font-medium border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full" : "text-sm px-4 py-2"
              )}
            >
              <span data-cursor-pointer className={cn("block sm:hidden p-1 rounded-full")}>
                {navItem.icon}
              </span>
              <span data-cursor-pointer className={cn("hidden sm:block text-sm p-1 rounded-full")}>
                {navItem.name}
              </span>
              {isActive && (
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              )}
            </Link>
          );
        })}
      </motion.div>
    </AnimatePresence>
  );
};