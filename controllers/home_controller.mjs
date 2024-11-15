import City from "../models/city.mjs";

class HomeController {
  static async index(req, res) {
    try {
      // Lấy tất cả các thành phố từ cơ sở dữ liệu
      let data = await City.find({});

      // Kiểm tra tham số 'city' trong query string
      let city = req.query.city;

      // Nếu không có tham số 'city', hiển thị tất cả thành phố
      if (!city) {
        return res.render("index", { title: "Home Page", data, plate_no: null, selectedCity: null });
      }

      // Nếu có tham số 'city', tìm thành phố tương ứng
      let selectedCity = data.find(c => c.city === city);

      if (!selectedCity) {
        // Nếu không tìm thấy thành phố, hiển thị thông báo lỗi
        return res.render("index", { title: "Home Page", data, plate_no: null, error: "City not found" });
      }

      // Nếu tìm thấy thành phố, lấy plate_no tương ứng
      let plate_no = selectedCity.plate_no;

      // Render lại trang với thông tin thành phố và biển số
      return res.render("index", { title: "Home Page", data, plate_no, selectedCity });

    } catch (error) {
      console.error("Error fetching cities:", error);
      return res.status(500).send("Internal Server Error");
    }
  }
}

export default HomeController;
