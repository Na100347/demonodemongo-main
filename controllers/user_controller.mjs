import User from "../models/user.mjs";

class UserController {
    // Hiển thị danh sách user
    static async index(req, res) {
        let q = req.query.q || "";
        const re = new RegExp(`.*${q}.*`, "i");
        const users = await User.find({ name: re });
        res.render("user", { title: "User Management", users });
    }

    // Thêm user mới
    static async create(req, res) {
        const { name, email, role } = req.body;
        try {
            await User.create({ name, email, role });
            res.redirect("/users");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error creating user");
        }
    }

    // Cập nhật thông tin user
    static async update(req, res) {
        const { id } = req.params;
        const { name, email, role } = req.body;
        try {
            await User.findByIdAndUpdate(id, { name, email, role });
            res.redirect("/users");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error updating user");
        }
    }

    // Xóa user
    static async delete(req, res) {
        const { id } = req.params;
        try {
            await User.findByIdAndDelete(id);
            res.redirect("/users");
        } catch (error) {
            console.log(error);
            res.status(500).send("Error deleting user");
        }
    }
}

export default UserController;
