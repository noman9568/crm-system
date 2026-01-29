import express from "express";
import { verifyToken, authorizeRoles, hasPermission } from "../middlerware/auth.js"; // note .js extension
import { deleteUserById, getUserById, getUsers, userLogin, userPermissionChange, userRegister, userRoleChange, userStatusChange } from "../controllers/UserController.js";


const router = express.Router();



router.post("/registerUser", verifyToken, authorizeRoles("super_admin", "admin"), hasPermission("create_user"), userRegister);

router.post("/login", userLogin);

router.get("/users", verifyToken, authorizeRoles("super_admin", "admin"), getUsers);

router.get("/employee/:id", verifyToken, authorizeRoles("super_admin", "admin", "employee"), getUserById);

router.post("/deleteUser/:id", verifyToken, authorizeRoles("super_admin", "admin"), deleteUserById);

router.post("/userStatusChange/:id", verifyToken, authorizeRoles("super_admin", "admin"), userStatusChange);

router.post("/userRoleChange/:id", verifyToken, authorizeRoles("super_admin", "admin"), userRoleChange)

router.post("/userPermissionChange/:id", verifyToken, authorizeRoles("super_admin", "admin"), userPermissionChange)



export default router;