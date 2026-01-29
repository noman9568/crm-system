import React, { useEffect } from 'react'
import { AdminTable } from './admins/AdminTable'
import { useDispatch, useSelector } from 'react-redux'
import { permissionColumns } from './admins/permission-column'
import { asyncUsers } from '@/store/actions/userAction'

const RoleAndPermission = () => {
  const dispatch = useDispatch();
  
  const { users } = useSelector(state => state.userReducer);
  
  useEffect(() => {
    dispatch(asyncUsers())
  }, [dispatch])

  return (
    <div className="px-5 py-8">
      {/* <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl border-b">Role And Permissions</h1>
      </div> */}
      <AdminTable
        data={users}
        columns={permissionColumns()}
      />
    </div>
  )
}

export default RoleAndPermission
