import React from "react";
import { AlertCircle } from "lucide-react"; // optional Lucide icon

export const userColumn = () => [
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
    header: "Name",
    size: 100
  },
  {
    accessorKey: "email",
    header: "Email"
  },
  {
    accessorKey: "role",
    header: "Role"
  },
  {
    accessorKey: "status",
    header: "Status",
    size:80,
    cell: ({ row }) => (
      <span className={`${row.original.status=="active"? "text-green-600": "text-red-600"}`}>
        {row.original.status=="active"? "Active" : "Blocked"}
      </span>
    )
  },
];
