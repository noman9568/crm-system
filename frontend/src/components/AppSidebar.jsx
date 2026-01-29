import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  Shield,
  UserCog,
  LogOut,
  Key,
  Building2,
  Code,
} from "lucide-react";

const AppSidebar = ({ setHeading }) => {
  const { user, logout } = useAuth();
  const isAdmin = user?.role === "super_admin" || user?.role === "admin";

  return (
    <Sidebar className="pl-4 py-3">
      {/* Header */}
      <SidebarHeader>
        <h1 className="px-2 text-4xl font-bold text-red-700 mb-8">
          !Treat
        </h1>
      </SidebarHeader>

      {/* Menu */}
      <SidebarContent>
        <SidebarMenu className="gap-3">
          {isAdmin && (
            <SidebarMenuItem className="hover:bg-zinc-100 pl-1 rounded-l-xl">
              <SidebarMenuButton asChild tooltip="Super Admin Dashboard">
                <NavLink to="/user_overview" onClick={() => setHeading("User Overview")}>
                  <Shield />
                  <span className="text-md">User Overview</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )}

          <SidebarMenuItem className="hover:bg-zinc-100 pl-1 rounded-l-xl">
            <SidebarMenuButton asChild tooltip="Admins">
              <NavLink to="/users" onClick={() => setHeading("Users")}>
                <UserCog />
                <span className="text-md">Users</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem className="hover:bg-zinc-100 pl-1 rounded-l-xl">
            <SidebarMenuButton asChild tooltip="Role And Permission">
              <NavLink to="/role_permission" onClick={() => setHeading("Role And Permissions")}>
                <Key />
                <span className="text-md">Role and Permission</span>
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenuItem className="hover:bg-zinc-100 pl-1 rounded-l-xl">
          <SidebarMenuButton asChild tooltip="Departments">
            <NavLink to="/departments" onClick={() => setHeading("Departments")}>
              <Building2 />
              <span className="text-md">Departments</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

        <SidebarMenuItem className="hover:bg-zinc-100 pl-1 rounded-l-xl">
          <SidebarMenuButton asChild tooltip="Developer Details">
            <NavLink to="/developer" onClick={() => setHeading("Developer Details")}>
              <Code />
              <span className="text-md">Developer Details</span>
            </NavLink>
          </SidebarMenuButton>
        </SidebarMenuItem>

      </SidebarContent>
      

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenuButton
          onClick={logout}
          className="text-red-600 hover:text-red-600"
        >
          <LogOut />
          <span>Logout</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
