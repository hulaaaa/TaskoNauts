import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/navbar";
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
    <div className="relative h-screen w-full">
      <div className="grid grid-cols-1 h-full w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
        <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
        <div className="absolute inset-0 flex items-center justify-center">

        <FloatingNav navItems={navItems} />
        {children}
        </div>
      </div>
        
    </div>
  );
}