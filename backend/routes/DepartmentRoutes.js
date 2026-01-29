import express from "express";
import Department from "../models/Department.js";
import { verifyToken, authorizeRoles, hasPermission } from "../middlerware/auth.js"; // note .js extension

const router = express.Router();

router.post("/registerDepartment", verifyToken, authorizeRoles("super_admin", "admin"), hasPermission("create_user"), async (req,res) =>{
  try{
    const { name, code, manager, isActive } = req.body;
    
    const existingDepartment = await Department.findOne({name});
    if(existingDepartment) return res.json({message : "Department already exists."});

    await Department.create({
      name,
      code,
      manager,
      isActive
    });
    return res.status(201).json({message : "Department registered successfully."});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})


router.get("/departments", verifyToken, authorizeRoles("super_admin", "admin"), async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});


router.post("/departmentStatusChange/:id", verifyToken, authorizeRoles("super_admin", "admin"), async (req,res) =>{
  try{
    const dept = await Department.findById(req.params.id);
    if (!dept) {
      return res.status(404).json({ message: "Department not found" });
    }
    
    dept.isActive = !dept.isActive;
    await dept.save();
    
    res.json({message : "Department status changed.", id: req.params.id, isActive : dept.isActive});
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
})


export default router;