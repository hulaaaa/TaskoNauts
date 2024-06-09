import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/navbar";
import { BackgroundBeams } from "./ui/beamGb";
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const navItems = [
    {
      name: "Overview",
      link: "/dashboard",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "My Tasks",
      link: "/dashboard/tasks",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Project",
      link: "/dashboard/project",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Timeline",
      link: "/dashboard/timeline",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="h-screen w-screen 
      flex items-center justify-center">
        <FloatingNav navItems={navItems} />
          {children}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}