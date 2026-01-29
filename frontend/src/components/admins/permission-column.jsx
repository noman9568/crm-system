import React from "react";
import { AlertCircle, Edit } from "lucide-react";
import { RoleDialog } from "./RoleDialog";
import { Shield } from "lucide-react";
import PermissionDialog from "./PermissionDialog";


export const permissionColumns = () => [
  {
    id: "alert", // unique id for columns without data
    header: "",  // empty header
    cell: ({ row }) => {
      const status = row.original.status;
      let colourClass = "text-green-500";

      if( status == "blocked") colourClass = "text-red-500";
      return (
        <div className="flex justify-center">
          <AlertCircle className={`w-4 h-4 ${colourClass}`} />
        </div>
      )
    },
    size: 20, // optional: adjust width
  },
  {
    accessorKey: "name",
    header : "Name",
    size: 65
  },
  {
    accessorKey: "email",
    header : "Email",
    size: 100
  },
  {
  accessorKey: "role",
  header: "Role",
  size:65,
  cell: ({ row }) => {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="flex items-center justify-between">
        <span className="capitalize font-medium text-red-500">
          {row.original.role.replace("_", " ")}
        </span>
        <Edit
          className="w-4 h-4 cursor-pointer text-gray-500 xl:mr-6 md:mr-2 sm:mr-0"
          onClick={() => setOpen(true)}
        />

        {open && (
          <RoleDialog
            open={open}
            onOpenChange={setOpen}
            user={row.original}
          />
        )}
      </div>
    );
    },
  },
  {
    accessorKey: "permissions",
    header: "Permissions",
    size:150,
    cell: ({ row, getValue }) =>{
      const [open, setOpen] = React.useState(false);
      return (
        <div className="flex items-center justify-between">
          <span className="text-blue-600 font-medium">{getValue().join(", ")}</span>
          <Shield className="w-4 h-4 cursor-pointer text-gray-500 xl:mr-10 md:mr-4 sm:mr-0" onClick={()=> setOpen(true)}/>
          {open && <PermissionDialog
            open={open}
            onOpenChange={setOpen}
            user={row.original}
          />}
        </div>
      )
      // <span className="text-blue-600 font-medium">{getValue().join(", ")}</span>
    }
  }
];