const Cohoi = () => {
	return (
		<>
			<div className="relative w-full h-2/4">
				<img
					className="object-cover "
					src="https://plus.unsplash.com/premium_photo-1661692676099-e9190a3dd0aa?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
				<div className="absolute flex flex-col w-2/4 gap-9 top-20 left-40">
					<div className="text-5xl font-bold text-white">Sự nghiệp của bạn ? </div>
					<div className="text-5xl font-bold text-white">Hãy để FourwayTravel lo. </div>
					<div className="text-white text-2x">
						Hãy tham gia cùng đội ngũ đa dạng của chúng tôi gồm hơn 600 nhân tài đến từ hơn 75 quốc gia và
						tạo ra tác động toàn cầu khi chúng tôi phát triển sản phẩm của mình.
					</div>
				</div>
			</div>
			{/* stic */}

			<div className="flex flex-wrap justify-around gap-1 max-w-80 ">
				<div className="w-1/3 mt-4 rounded-lg shadow-xl ">
					<div className="py-8 text-3xl font-bold text-center">Thực tập – Tài liệu kỹ thuật</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Công nghệ</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					{/* button */}
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Sinh viên – Hỗ trợ quản lý dự án</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Quản lý dự án (Nhóm)</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Sinh viên hỗ trợ khách hàng</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Bán hàng & Tài khoản</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Thực tập sinh mua phương tiện</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500"> Truyền thông & Tiếp thị</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Thực tập mua sắm toàn cầu</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Hoạt động kinh doanh khác</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh, Tiếng Đức</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Kỹ năng giao tiếp</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Trình độ giao tiếp tốt</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Thực tập sinh</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh & Tiếng Pháp</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">
						Kỹ sư độ tin cậy của trang web - Dữ liệu lớn
					</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Công nghệ</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Người lớn tuổi</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Chuyên gia báo cáo tài chính</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tài chính</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Mức giữa</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 rounded-lg shadow-xl">
					<div className="py-8 text-3xl font-bold text-center">Chuyên gia bảo mật CNTT</div>
					<div className="flex justify-around py-8 ">
						<div className="action1">
							<div className="my-2 text-l">Nhóm công việc</div>
							<div className="my-2 text-l">Cấp độ kinh nghiệm</div>
							<div className="my-2 text-l">Vị Trí</div>
							<div className="mb-6 text-l">Ngôn ngữ</div>
						</div>
						<div className="action2">
							<div className="my-2 text-xl cursor-pointer text-sky-500">Công nghệ</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Người lớn tuổi</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Düsseldorf</div>
							<div className="my-2 text-xl cursor-pointer text-sky-500">Tiếng Anh</div>
						</div>
					</div>
					<div className="w-40 h-12 py-4 mb-6 ml-16 leading-3 text-center bg-gray-200 border rounded-md cursor-pointer text-neutral-500 ">
						Xem công việc
					</div>
				</div>
				<div className="w-1/3 mt-4 text-xl text-center text-blue-500 cursor-pointer ">
					<div className="py-4 text-3xl "></div>
					Xem thêm
				</div>
			</div>
		</>
	);
};

export default Cohoi;
