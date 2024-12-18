const LichTrinhComponent = () => {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <button
          type="button"
          className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <h2 className="text-center">BẢNG GIÁ THUÊ XE DU LỊCH ĐÀ LẠT</h2>
          <span className="ms-2 inline-flex size-4 items-center justify-center rounded-full bg-blue-200 text-xs font-semibold text-blue-800">
            12
          </span>
        </button>
        <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="p-2">STT</th>
              <th className="px-6 py-3">LỊCH TRÌNH</th>
              <th className="px-6 py-3">XE 4 CHỖ</th>
              <th className="px-6 py-3">XE 7 CHỖ</th>
              <th className="px-6 py-3">XE 16 CHỖ</th>

              <th className="px-6 py-3">XE 29 CHỖ</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">1</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đón/Tiễn Sân bay Liên Khương - Đà Lạt
              </td>
              <td className="px-6 py-4">250.000 đ</td>
              <td className="px-6 py-4">350.000 đ</td>
              <td className="px-6 py-4">700.000 đ</td>
              <td className="px-6 py-4">1.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">2</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Tham quan nội thành Đà Lạt 1 ngày
              </td>
              <td className="px-6 py-4">800.000 đ</td>
              <td className="px-6 py-4">900.000 đ</td>
              <td className="px-6 py-4">1.300.000 đ</td>
              <td className="px-6 py-4">2.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">3</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Tham quan ngoại thành Đà Lạt 1 ngày
              </td>
              <td className="px-6 py-4">1.000.000 đ</td>
              <td className="px-6 py-4">1.100.000 đ</td>
              <td className="px-6 py-4">1.500.000 đ</td>
              <td className="px-6 py-4">3.000.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">4</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Tham quan Đà Lạt 1/2 ngày
              </td>
              <td className="px-6 py-4">500.000 đ</td>
              <td className="px-6 py-4">600.000 đ</td>
              <td className="px-6 py-4">800.000 đ</td>
              <td className="px-6 py-4">1.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">5</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đà Lạt - Nha Trang (1 chiều)
              </td>
              <td className="px-6 py-4">1.500.000 đ</td>
              <td className="px-6 py-4">1.600.000 đ</td>
              <td className="px-6 py-4">2.300.000 đ</td>
              <td className="px-6 py-4">4.000.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">6</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đón/Tiễn Sân bay + Tham quan Đà Lạt 1 ngày
              </td>
              <td className="px-6 py-4">1.200.000 đ</td>
              <td className="px-6 py-4">1.300.000 đ</td>
              <td className="px-6 py-4">1.700.000 đ</td>
              <td className="px-6 py-4">3.000.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">7</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đón/Tiễn Sân bay + Tham quan Đà Lạt 1/2 ngày
              </td>
              <td className="px-6 py-4">750.000 đ</td>
              <td className="px-6 py-4">900.000 đ</td>
              <td className="px-6 py-4">1.500.000 đ</td>
              <td className="px-6 py-4">2.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">8</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đà Lạt - Phan Thiết (1 chiều)
              </td>
              <td className="px-6 py-4">1.500.000 đ</td>
              <td className="px-6 py-4">1.600.000 đ</td>
              <td className="px-6 py-4">2.300.000 đ</td>
              <td className="px-6 py-4">4.000.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">9</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đà Lạt - TP Hồ Chí Minh (1 chiều)
              </td>
              <td className="px-6 py-4">3.600.000 đ</td>
              <td className="px-6 py-4">4.000.000 đ</td>
              <td className="px-6 py-4">5.000.000 đ</td>
              <td className="px-6 py-4">7.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">10</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đà Lạt - Buôn Mê Thuật (1 chiều)
              </td>
              <td className="px-6 py-4">2.400.000 đ</td>
              <td className="px-6 py-4">2.500.000 đ</td>
              <td className="px-6 py-4">3.500.000 đ</td>
              <td className="px-6 py-4">5.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">11</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Đà Lạt - Bảo Lộc (1 chiều)
              </td>
              <td className="px-6 py-4">1.100.000 đ</td>
              <td className="px-6 py-4">1.300.000 đ</td>
              <td className="px-6 py-4">1.800.000 đ</td>
              <td className="px-6 py-4">3.500.000 đ</td>
            </tr>
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
              <td className="p-2">12</td>
              <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                Phí phát sinh sau 17h30
              </td>
              <td className="px-6 py-4">100.000/giờ đ</td>
              <td className="px-6 py-4">100.000/giờ</td>
              <td className="px-6 py-4">100.000/giờ</td>
              <td className="px-6 py-4">150.000/giờ</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LichTrinhComponent;
