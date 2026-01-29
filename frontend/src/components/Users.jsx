import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { AdminTable } from "./admins/AdminTable"
// import { userColumns } from "./admins/admin-columns"
import { userColumns } from "./admins/admin-columns"

import {
  asyncDeleteEmployee,
  asyncUsers,
  asyncUserStatus,
} from "../store/actions/userAction"
import { Input } from "./ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { useToast } from "@/hooks/use-toast"

const Users = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [search, setSearch] = React.useState("")
  const [roleFilter, setRoleFilter] = React.useState("all")
  const { toast } = useToast()


  const { users } = useSelector((state) => state.userReducer)
  // console.log(users);
  

  useEffect(() => {
    dispatch(asyncUsers())
  }, [dispatch])

  const filteredUsers = users?.filter((u) => {
    const matchesSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())

    const matchesRole =
      roleFilter === "all" ? true : u.role === roleFilter

    return matchesSearch && matchesRole
  }) || []
  
  const handleEditUser = async (id) =>{
    navigate(`/users/edit/${id}`);
  }

  const handledeleteUser = async (id) =>{
    try{
      await dispatch(asyncDeleteEmployee(id));
      toast({
        title: "User deleted",
        description: "The user has been removed successfully",
        duration : 1000
      })
    } catch (err) {
      toast({
        title: "Delete failed",
        description: err.message,
        variant: "destructive",
      })
    }
  }

  const handleUserStatus = async (id, status) =>{
    try{
      await dispatch(asyncUserStatus(id, status));
      
      const message = status=="active" ? "Blocked" : "Unblocked";
      toast({
        title: `User ${message}`,
        description: `The user has been ${message.toLocaleLowerCase()} successfully`,
        duration: 1000
      })
    } catch(err) {
      toast({
        title: "Delete failed",
        description: err.message,
        variant: "destructive",
      })
    }
  }


  return (
    <div className="px-5 py-3">
      {/* <div className="flex jus mb-6">
        <h1 className="text-2xl border-b">Users</h1>
      </div> */}
      {/* <button
        onClick={() => navigate("/users/register")}
        className="bg-black text-white px-4 py-2 rounded-md mb-4"
      >
        Register User
      </button> */}

      <div className="flex mb-6 justify-between mb-6">
        <div className="flex gap-4">
        <Input
          placeholder="Search by name or email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        <Select value={roleFilter} onValueChange={setRoleFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent className="bg-white">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="employee">Employee</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="super_admin">Super Admin</SelectItem>
          </SelectContent>
        </Select>
        </div>
        <button
          onClick={() => navigate("/users/register")}
          className="bg-black text-white px-4 py-2 rounded-md"
        >
          Register User
        </button>

      </div>


      <AdminTable
        data={filteredUsers}
        columns={userColumns(
          (id) => handleEditUser(id),
          (id) => handledeleteUser(id),
          (id, status) => handleUserStatus(id, status))
        }
      />

    </div>
  )
}

export default Users
