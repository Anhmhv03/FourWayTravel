import way from '../assets/img/bg4way.png';
const Hoatdong = () => {
	return (
		<>
			<div className="flex justify-around pt-8 max-width-80">
				<div className="flex flex-col w-1/3 gap-5 box1">
					<div className="text-3xl font-bold ">
						Với app FourwayTravel, khách sạn lý tưởng ngay trong tay bạn.
					</div>
					<div className="text-md">
						App FourwayTravel so sánh ngay hàng triệu khách sạn trên toàn thế giới, từ hàng trăm trang web
						đặt phòng khác nhau. Bạn chỉ cần tìm theo thành phố, địa chỉ hay điểm tham quan để tìm được
						khách sạn lý tưởng với mức giá hấp dẫn cho mình.
					</div>
					{/* app  */}
					<div className="flex gap-6">
						<div className="flex gap-4">
							<img
								className="object-cover w-9"
								src="https://media-cdn-v2.laodong.vn/storage/newsportal/2022/7/8/1066101/Anh-Chup-Man-Hinh-20-01.jpg"
								alt=""
							/>
							<div className="">
								<div className="text-xs ">GET IT ON</div>
								<div className="text-2xl font-bold">Google Play</div>
							</div>
						</div>
						<div className="flex gap-4">
							<img
								className="object-cover w-9"
								src="https://inkythuatso.com/uploads/images/2021/10/logo-apple-inkythuatso-01-28-13-19-50.jpg"
								alt=""
							/>
							<div className="">
								<div className="text-xs ">Download on the </div>
								<div className="text-2xl font-bold">App Store</div>
							</div>
						</div>
					</div>
				</div>
				<div className="w-2/6 box2">
					<img
						className=""
						src={way}
						alt=""
					/>
				</div>
			</div>
			{/* Hero_content2 */}
			<div className="flex justify-center gap-5 py-32 bg-sky-50">
				<div className="">
					Chỉ với một lần chạm, bạn có thể truy cập hàng triệu khách sạn, biến trivago thành app duy nhất mình
					cần cho lần đặt phòng tiếp theo.
				</div>
				<div className="">
					Khám phá địa điểm bằng bản đồ trivago, hoặc sử dụng địa điểm hiện tại để tìm những khách sạn gần
					bạn. Tính năng lý tưởng để đặt phòng phút chót khi đang trên đường.
				</div>
				<div className="">
					Đọc nhận xét về khách sạn tổng hợp từ nhiều trang đặt phòng khác nhau, để tìm hiểu thêm về trải
					nghiệm của những khách hàng khác.
				</div>
			</div>
		</>
	);
};

export default Hoatdong;
