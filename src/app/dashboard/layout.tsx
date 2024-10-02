"use client";
import React, { useState } from "react";
import {
  IconArrowNarrowRight,
  IconHome,
  IconMessageCircle,
  IconNote,
  IconSettings,
  IconUserCircle,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const url = usePathname(); // отримання поточного URL
  const [open, setOpen] = useState(false);

  const links = [
    {
      title: "Home",
      icon: (
          <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/dashboard",
    },
    {
      title: "Chat",
      icon: (
          <IconMessageCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Notes",
      icon: (
          <IconNote className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Profile",
      icon: (
          <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Settings",
      icon: (
          <IconSettings className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];

  const router = useRouter();

  return (
      <div className="w-screen h-screen flex flex-col items-center px-32 py-7 dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_55%,black)]"></div>
        <div className="w-full h-content flex flex-row items-center justify-between">
          <div className="flex flex-row items-end gap-7">
            <button onClick={() => router.push('/dashboard/project')}>
              <h1
                  className={`text-3xl font-bold text-center bg-clip-text animate-fadeIn ${
                      url.startsWith("/dashboard/project")
                          ? "text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                          : "text-white/20"
                  }`}
              >
                Project
              </h1>
            </button>
            <button onClick={() => router.push('/dashboard/tasks')}>
              <h1
                  className={`text-3xl font-bold text-center bg-clip-text animate-fadeIn ${
                      url.startsWith("/dashboard/tasks")
                          ? "text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                          : "text-white/20"
                  }`}
              >
                Tasks
              </h1>
            </button>
            <button onClick={() => router.push('/dashboard/update')}>
              <h1
                  className={`text-3xl font-bold text-center bg-clip-text animate-fadeIn ${
                      url.startsWith("/dashboard/update")
                          ? "text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                          : "text-white/20"
                  }`}
              >
                Update
              </h1>
            </button>
          </div>


          <div className="flex flex-row items-center gap-4">
            <input
                type="text"
                className="border-0 border-transparent rounded-xl"
                placeholder="Search"
                style={{
                  backgroundColor: "#202020",
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  paddingTop: "0.5rem",
                  paddingBottom: "0.5rem",
                  width: "20rem",
                }}
            />
            <button
                style={{ height: "100%", padding: "9px", backgroundColor: "#3274F5", borderRadius: 10 }}
                type="button"
            >
              <IconArrowNarrowRight />
            </button>
          </div>
        </div>
        {children}
        <FloatingDock
            desktopClassName="absolute bottom-10 mx-auto"
            items={links}
        />
      </div>
  );
}
