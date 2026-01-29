import React from 'react'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from '../ui/button';
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { useDispatch } from 'react-redux';
import { asyncUserPermission } from '@/store/actions/userAction';

const PermissionDialog = ({ open, onOpenChange, user }) => {
  if (!user) return null;

  const ALL_PERMISSIONS = [
    "create_user",
    "delete_user",
    "update_user",
    "change_role"
  ];

  const [selectedPermissions, setSelectedPermissions] = React.useState(
    user.permissions || []
  );
  const dispatch = useDispatch();
  
  const togglePermission = (permission) => {
    setSelectedPermissions(prev =>
      prev.includes(permission)
        ? prev.filter(p => p !== permission)
        : [...prev, permission]
    );
  };

  const changePermissions = () =>{
    dispatch(asyncUserPermission(user._id, selectedPermissions));
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-white rounded-[20px]">
        <DialogHeader>
          <DialogTitle>
            Change Permissions for {user.name}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-3 mt-4">
          {ALL_PERMISSIONS.map(permission => (
            <div key={permission} className="flex items-center gap-3">
              <Checkbox.Root
                checked={selectedPermissions.includes(permission)}
                onCheckedChange={() => togglePermission(permission)}
                className="h-4 w-4 rounded border"
              >
                <Checkbox.Indicator>
                  ✓
                </Checkbox.Indicator>
              </Checkbox.Root>

              <span className="text-sm capitalize">
                {permission.replace("_", " ")}
              </span>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button onClick={changePermissions}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


export default PermissionDialog
