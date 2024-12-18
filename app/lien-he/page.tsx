export const metadata = {
  title: 'Liên hệ  dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ du lịch tham quan nội thành Đà Lạt',
  description:
    'Liên hệ  dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ ✔️✔️ du lịch tham quan nội thành Đà Lạt. ☎️ 0918 638 068 chuyên cho thuê ô tô xe đời mới✔️✔️ có tài xế đưa đón sân bay',
  openGraph: {
    title: 'Liên hệ dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ du lịch tham quan nội thành Đà Lạt',
    description:
      'Liên hệ dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ ✔️✔️ du lịch tham quan nội thành Đà Lạt. ☎️ 0918 638 068 chuyên cho thuê ô tô xe đời mới✔️✔️ có tài xế đưa đón sân bay',
    images: '/images/logo.jpg',
  },
};
const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center">
            <h1 className="font-medium text-blue-500 dark:text-blue-400">
              Liên hệ Thuê xe du lịch Đà Lạt - tham quan Đà Lạt - Đưa đón sân bay
            </h1>
            <h2 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Liên hệ thuê xe ô tô 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt
            </h2>
            <p className="mt-3 text-gray-500 dark:text-gray-400">
              Chúng tôi cam kết giá cả cạnh tranh, tư vấn miễn phí, tài xế đưa đón tận tình, chu đáo
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Email</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">
                Liên hệ thuê xe 7 chỗ, 16 chỗ Đà Lạt, chúng tôi phản hồi nhanh chóng
              </p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">Trungthanhdalattravel@gmail.com</p>
            </div>

            <div className="flex flex-col items-center justify-center text-center">
              <span className="rounded-full bg-blue-100/80 p-3 text-blue-500 dark:bg-gray-800">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </span>
              <h2 className="mt-4 text-lg font-medium text-gray-800 dark:text-white">Phone</h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400">Làm việc từ 6h-20h mỗi ngày</p>
              <p className="mt-2 text-blue-500 dark:text-blue-400">0918 638 068</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
