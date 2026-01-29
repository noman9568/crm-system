import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "../ui/button";
import React from "react";
import { useDispatch } from "react-redux";
import { asyncUserRole } from "@/store/actions/userAction";
export function RoleDialog({ open, onOpenChange, user }) {
  const [role, setRole] = React.useState(user.role);
  const dispatch = useDispatch();

  const handleSave = () => {
    // Call API to update role

    dispatch(asyncUserRole(user._id, role));
    console.log("Updated role:", role, "for user", user.name);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[20px] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Change Role for {user.name}</DialogTitle>
        </DialogHeader>

        <Select value={role} onValueChange={setRole}>
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent className="bg-white rounded-xl">
            <SelectItem value="employee">Employee</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="super_admin">Super Admin</SelectItem>
          </SelectContent>
        </Select>

        <DialogFooter>
          <Button onClick={handleSave}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
