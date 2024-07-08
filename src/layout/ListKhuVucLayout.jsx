const ListKhuVucLayout = ({
    luuTru, Link,
    LuuTruHCM, LuuTruHaNoi, LuuTruDaNang,

    isExpanded, displayedHCM, handleToggleHCM,

    isExpandedHaNoi, displayedHaNoi, handleToggleHaNoi,

    isExpandedDaNang, displayedDaNang, handleToggleDaNang,
}) => {
    return (
        <>
            <div className="mx-auto w-3/4 mt-5 pr-2 mb-2">
                <div>
                    <h2
                        className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                        id="more-popular-searches"
                    >
                        Tìm kiếm tại TP. Hồ Chí Minh
                    </h2>

                </div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedHCM.map((item) =>
                                <Link to={`/booking/chitiet/${item.id}`} >
                                    <>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </>
                                </Link>
                            )}

                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }

                </div>
                <div className="mt-1">
                    {LuuTruHCM.length >= 3 && (
                        <button
                            onClick={handleToggleHCM}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>

            <div className="mx-auto w-3/4 pr-2 mb-2">
                <div><h2
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm tại TP. Hà Nội
                </h2></div>
                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedHaNoi.map((item) =>
                                <>
                                    <Link to={`/booking/chitiet/${item.id}`}>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }
                </div>
                <div className="mt-1">
                    {LuuTruHaNoi.length >= 3 && (
                        <button
                            onClick={handleToggleHaNoi}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpandedHaNoi ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>

            <div className="mx-auto w-3/4 pr-2 mb-2">
                <h3
                    className="text-heading-l text-xl font-bold mb-3 px-0 l:px-4 2xl:px-0"
                    id="more-popular-searches"
                >
                    Tìm kiếm tại TP. Đà Nẵng
                </h3>

                <div className="grid grid-cols-3 gap-2">
                    {luuTru ? (
                        <>
                            {displayedDaNang.map((item) =>
                                <>
                                    <Link to={`/booking/chitiet/${item.id}`}>
                                        <div className="text-sm text-blue-300">Khách sạn {item.title}</div>
                                    </Link>
                                </>
                            )}
                        </>
                    ) : (
                        <>Chưa lấy được dữ liệu</>
                    )
                    }
                </div>
                <div className="mt-1">
                    {LuuTruDaNang.length >= 3 && (
                        <button
                            onClick={handleToggleDaNang}
                            className="px-4 py-2 text-sm text-white cursor-pointer bg-blue-500 hover:bg-blue-400 rounded"
                        >
                            {isExpandedDaNang ? 'Ẩn bớt' : 'Xem thêm'}
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default ListKhuVucLayout;