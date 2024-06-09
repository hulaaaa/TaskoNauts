import { IconHome, IconLogout, IconMessage, IconSettings, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/navbar";
import Image from "next/image";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Overview",
      link: "/dashboard",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Tasks",
      link: "/dashboard/tasks",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/dashboard/project",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Timeline",
      link: "/dashboard/timeline",
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <div className="relative h-screen w-screen flex flex-col">
      <div className="relative m-5 md:m-12" style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'center' }}>
        <div className="flex flex-row items-center gap-15 md:gap-7" style={{ zIndex: 10 }}>
          <Image src="/logoDashboard.png" alt="Logo" layout="intrinsic" width={110} height={50} objectFit="contain" />
          <div className="flex flex-row items-center gap-3">
            <div className="flex flex-col md:flex-row md:gap-2 items-center">
              <h1 className="text-xl md:text-2xl font-medium text-white">Project</h1>
              <div style={{width:7,height:7,backgroundColor:'white',borderRadius:7}}/>
              <h1 className="text-xl md:text-2xl font-medium text-white">Uber</h1>
            </div>
            <div style={{backgroundColor:'#23E346', borderRadius:5, width: 'max-content', }}>
              <h1 className="text-xs md:text-sm font-normal text-black my-1 mx-3 md:my-0 md:mx-3">In Progress</h1>
            </div>
          </div>
        </div>
        <FloatingNav navItems={navItems} className="justify-self-center" />
        <div className="flex items-center gap-3 md:gap-5 justify-self-end" style={{ zIndex: 10 }}>
          <div data-cursor-pointer className="flex items-center gap-2 py-2 px-3 md:py-3 md:px-4 hover:bg-white/5 hover:rounded">
            <IconSettings data-cursor-pointer />
            <h1 data-cursor-pointer className="text-sm md:text-base">Settings</h1>
          </div>
          <div data-cursor-pointer className="flex items-center gap-2 py-2 px-3 md:py-3 md:px-4 hover:bg-white/5 hover:rounded">
            <IconLogout data-cursor-pointer />
            <h1 data-cursor-pointer className="text-sm md:text-base">Log Out</h1>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent  h-[1px] w-full" />

      <div className="flex flex-row items-center justify-between m-5 md:m-12 z-10">
        {children}
      </div>
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]" style={{ zIndex: 0 }}></div>
    </div>
  );
}
