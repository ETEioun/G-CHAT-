const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// فعال‌سازی CORS
app.use(cors());

// مسیر اصلی
app.get("/", (req, res) => {
  res.send("سرور Express برای G-CHAT- با موفقیت راه‌اندازی شد!");
});

// اجرای سرور
app.listen(PORT, () => {
  console.log(`سرور G-CHAT- در حال اجرا روی پورت ${PORT}`);
});
