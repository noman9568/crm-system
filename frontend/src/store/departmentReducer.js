import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  departments: [],
}

const departmentSlice = createSlice({
  name: "departments",
  initialState,
  reducers:{
    updateDepartment: (state, action) =>{
      state.departments = action.payload;
    },
    departmentStatusChange: (state, action) =>{
      const department = state.departments.find(u => u._id === action.payload);
      if(department){
        department.isActive = !department.isActive;
      }
    }
  }
});


export const { updateDepartment, departmentStatusChange } = departmentSlice.actions;

export default departmentSlice.reducer;