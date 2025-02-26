const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// فعال‌سازی CORS
app.use(cors());

// مسیر اصلی
app.get("/", (req, res) => {
  res.send("سرور Express با موفقیت راه‌اندازی شد!");
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`سرور در حال اجرا روی پورت ${PORT}`);
});
