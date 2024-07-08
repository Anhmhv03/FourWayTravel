const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
// Sử dụng JSON parser cho request body
app.use(express.json());
app.use(cors());
// Cài đặt cổng cho máy chủ
const PORT = process.env.PORT || 3000;

// Tạo một transporter để gửi mail
const transporter = nodemailer.createTransport({
	service: 'gmail', // Thay đổi nếu bạn dùng dịch vụ mail khác
	auth: {
		user: 'dangminhtai15052002@gmail.com', // Thay đổi email của bạn ở đây
		pass: 'uizm psxs mtsc zquc', // Mật khẩu ứng dụng (đối với Gmail)
	},
});

// Endpoint để gửi mail
app.post('/sendmail', (req, res) => {
	const { to, subject, html } = req.body;

	const mailOptions = {
		from: 'dangminhtai15052002@gmail.com', // Địa chỉ email người gửi
		to: to, // Danh sách người nhận
		subject: subject, // Chủ đề email
		html: html, // Nội dung email
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			res.status(500).send('Error: ' + error.message);
		} else {
			res.status(200).send('Email sent: ' + info.response);
		}
	});
});

// Khởi động máy chủ
app.listen(PORT, () => {
	console.log(`Server đang chạy trên port ${PORT}`);
});
