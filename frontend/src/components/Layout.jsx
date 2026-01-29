import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [heading, setHeading] = useState("User Overview");

  return (
    <SidebarProvider>
      <AppSidebar setHeading={setHeading}/>

      <SidebarInset>
        <header className="flex h-14 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <h2 className="font-semibold text-xl">{heading}</h2>
        </header>

        <main className="p-3">
          <Outlet />
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default Layout;
