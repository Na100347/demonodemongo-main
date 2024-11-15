import express from "express";
import UserController from "../controllers/user_controller.mjs";

const router = express.Router();

router.get("/", UserController.index); // Trang hiển thị danh sách user
router.post("/create", UserController.create); // Thêm user mới
router.post("/update/:id", UserController.update); // Sửa user
router.post("/delete/:id", UserController.delete); // Xóa user

export default router;
