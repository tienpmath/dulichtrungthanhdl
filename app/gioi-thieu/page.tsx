import Image from 'next/image';

export const metadata = {
  title: 'Giới thiệu dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ du lịch tham quan nội thành Đà Lạt',
  description:
    'Giới thiệu dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ ✔️✔️ du lịch tham quan nội thành Đà Lạt. ☎️ 0918 638 068 chuyên cho thuê ô tô xe đời mới✔️✔️ có tài xế đưa đón sân bay',
  openGraph: {
    title: 'Giới thiệu dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ du lịch tham quan nội thành Đà Lạt',
    description:
      'Giới thiệu dịch vụ thuê xe ô tô 7 chỗ Đà Lạt và xe ô tô 16 chỗ ✔️✔️ du lịch tham quan nội thành Đà Lạt. ☎️ 0918 638 068 chuyên cho thuê ô tô xe đời mới✔️✔️ có tài xế đưa đón sân bay',
    images: '/images/logo.jpg',
  },
};
const AboutPage = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl items-center gap-16 px-4 py-8 lg:grid lg:grid-cols-2 lg:px-6 lg:py-16">
          <div className="ext-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Giới thiệu Dịch vụ cho thuê xe ô tô du lịch Thành Trung Đà Lạt
            </h1>
            <strong className="mb-4">
              ⭐ Với 10 năm trong lĩnh vực cung cấp dịch vụ cho thuê xe 4, 5, 7, 9, 16, 24, 29 chỗ tại Đà Lạt, Cho thuê
              xe ô tô Thành Trung Đà Lat đã đáp ứng nhu cầu di chuyển đa dạng của cá nhân, tổ chức, doanh nghiệp và các
              trường học.
            </strong>
            <p>
              Chúng tôi đặt sự đầu tư vào chất lượng dịch vụ lên hàng đầu, đặc biệt là về hệ thống xe và đội ngũ tài xế.
              Tự hào mang đến bạn trải nghiệm thuê xe ô tô tại Đà Lạt an toàn, vui vẻ, thoải mái, tiết kiệm và nhanh
              chóng. Khi đến Đà Lạt, việc thuê xe du lịch luôn là lựa chọn hàng đầu của du khách. Chúng tôi giúp bạn
              thỏa mãn niềm đam mê khám phá thành phố xinh đẹp này bằng việc cung cấp xe đời mới, đảm bảo chất lượng và
              sự an toàn hơn rất nhiều so với việc sử dụng dịch vụ taxi truyền thống.
            </p>
            <p>
              Dịch vụ cho thuê xe ô tô du lịch tại Đà Lạt Thành Trung ô tô chuyên cung cấp dịch vụ cho thuê xe ô tô tại
              Đà Lạt với một loạt dịch vụ đi kèm và sẵn sàng tư vấn để đáp ứng mục đích chuyến đi của bạn. Với quy trình
              đơn giản, tiện lợi và đội ngũ nhân viên luôn sẵn sàng hỗ trợ 24/24, chúng tôi cam kết đảm bảo bạn có một
              hành trình đáng nhớ và thuận tiện tại Đà Lạt.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <Image src="/images/Gp1.jpg" alt="alt" width={100} height={100} className="w-full rounded-lg" />
            <Image
              src="/images/GP2.jpg"
              alt="alt"
              width={100}
              height={100}
              className="mt-4 w-full rounded-lg lg:mt-10"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
