const Tintuc = () => {
	return (
		<>
			<div className="flex justify-around w-3/4 py-10 mx-auto">
				<div className="max-w-md text-5xl font-bold text-gray-600 ">
					Làm thế nào chúng tôi có thể giúp đỡ cho bạn ?
				</div>
				<div className="max-w-3xl">
					<div className="max-w-2xl text-xl text-gray-700 ">
						Nếu bạn có bất kỳ câu hỏi nào liên quan đến báo chí, vui lòng điền vào biểu mẫu sau và chúng tôi
						sẽ liên hệ lại với bạn trong thời gian sớm nhất.
					</div>
					<div className="flex gap-8 py-5">
						<input
							type="text"
							placeholder="Họ và tên"
							className="w-full max-w-xs py-3 bg-gray-100 border border-none rounded px-9"
						/>
						<input
							type="text"
							placeholder="Địa chỉ email"
							className="w-full max-w-xs py-3 bg-gray-100 border border-none rounded px-9"
						/>
					</div>
					<textarea
						placeholder="         Ghi chú..."
						className="w-full h-40 max-w-2xl bg-gray-100 border textarea textarea-lg"
					></textarea>
					<div className="py-2 font-bold text-center bg-blue-500 rounded-md cursor-pointer text-slate-100 w-28">
						Gửi
					</div>
				</div>
			</div>
		</>
	);
};

export default Tintuc;
