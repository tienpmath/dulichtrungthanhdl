// Craft Imports
import { Section, Container } from "@/components/craft";
import Balancer from "react-wrap-balancer";

// Components
import Link from "next/link";

// Icons
import { File, Pen, Tag, Boxes, User, Folder } from "lucide-react";
import Footers from "@/components/footer/Footer";
import MainPage from "@/components/home/MainPage";
import { Snippet } from "next/font/google";
export const metadata = {
  title:
    "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt",
  description:
    "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi",
  openGraph: {
    title:
      "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt",
    description:
      "Thuê xe từ 4 chỗ, 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ du lịch Đà Lạt, Tour nội thành, ngoại thành Đà Lạt giá rẻ ✔️✔️ có tài, uy tín tại Đà Lạt.☎️ 0918 638 068 chuyên thuê ô tô xe đời mới✔️✔️ đưa đón tận nơi",
    images: "/images/logo.jpg",
  },
  icons: {
    icon: "/images/favicon.ico",
  },
};
// This page is using the craft.tsx component and design system
export default function Home() {
  return (
    <Section>
      <Container>
        <ExampleJsx />
      </Container>
    </Section>
  );
}

// This is just some example JS to demonstrate automatic styling from brijr/craft
const ExampleJsx = () => {
  return (
    <article className="prose-m-none">
      {/* <h1>
        <Balancer>
          Chào mừng - Hello World, welcome to the Next.js and WordPress Starter
          by <a href="https://9d8.dev">9d8</a>.
        </Balancer>
      </h1> */}
      <MainPage />
      {/* <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Make&nbsp;</span>
        <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
        <br />
        <span className={title()}>
          websites regardless of your design experience.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Beautiful, fast and modern React UI library.
        </div>
      </div> */}
      <div className="flex gap-3">
        <Link href="tel:0918 638 068">0918 638 068</Link>
      </div>
      <div className="mt-8">
        <span>DỊCH VỤ ĐẶT XE Ô TÔ CÓ TÀI XẾ 7 CHỖ, 16 CHỖ, 29 CHỖ ĐÀ LẠT</span>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Du lịch Trung Thành chuyên tổ chức các tour nội thành Đà Lạt,
              ngoại thành Đà Lạt, thuê xr 5, chỗ, 7 chỗ, 16 chỗ Đà Lạt
            </h2>
            <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
              Cùng khám phá thành phố ngàn hoa
            </p>
          </div>
          <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 7 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch nổi tiếng tại Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">900.000 đ</span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 16 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch nổi tiếng tại Đà Lạt, ngoại thành Đà
                Lạt, nội thành Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  1.300.000 đ
                </span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>
            {/* Pricing Card */}
            <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
              <h3 className="mb-4 text-2xl font-semibold">
                Xe 7 chỗ tham quan Đà Lạt 1 ngày
              </h3>
              <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                Đi qua nhiều điểm du lịch, tour săn mây đồi chè cầu đất Đà Lạt,
                nội thành Đà Lạt
              </p>
              <div className="flex justify-center items-baseline my-8">
                <span className="mr-2 text-5xl font-extrabold">
                  1.100.000 đ
                </span>
                <span className="text-gray-500 dark:text-gray-400">/ngày</span>
              </div>
              {/* List */}
            </div>{" "}
          </div>
        </div>
      </section>
      {/* Vercel Clone Starter */}
      <a
        className="h-16 block"
        href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2F9d8dev%2Fnext-wp&env=WORDPRESS_URL,WORDPRESS_HOSTNAME&envDescription=Add%20WordPress%20URL%20with%20Rest%20API%20enabled%20(ie.%20https%3A%2F%2Fwp.example.com)%20abd%20the%20hostname%20for%20Image%20rendering%20in%20Next%20JS%20(ie.%20wp.example.com)&project-name=next-wp&repository-name=next-wp&demo-title=Next%20JS%20and%20WordPress%20Starter&demo-url=https%3A%2F%2Fwp.9d8.dev"
      >
        {/* eslint-disable-next-line */}
        <img
          className="not-prose my-4"
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
        />
      </a>
      <p>
        This is <a href="https://github.com/9d8dev/next-wp">next-wp</a>, created
        as a way to build WordPress sites with Next.js at rapid speed. This
        starter is designed with <a href="https://ui.shadcn.com">shadcn/ui</a>,{" "}
        <a href="https://github.com/brijr/craft">brijr/craft</a>, and Tailwind
        CSS. Use <a href="https://components.bridger.to">brijr/components</a> to
        build your site with prebuilt components. The data fetching and
        typesafety is handled in <code>lib/WordPress.ts</code> and{" "}
        <code>lib/WordPress.d.ts</code>. Questions? Email 9d8dev@gmail.com
      </p>
      <div className="grid md:grid-cols-3 gap-4 mt-6 not-prose">
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts"
        >
          <Pen size={32} />
          <span>
            Posts{" "}
            <span className="block text-sm text-muted-foreground">
              All posts from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/pages"
        >
          <File size={32} />
          <span>
            Pages{" "}
            <span className="block text-sm text-muted-foreground">
              Custom pages from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/authors"
        >
          <User size={32} />
          <span>
            Authors{" "}
            <span className="block text-sm text-muted-foreground">
              List of the authors from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/tags"
        >
          <Tag size={32} />
          <span>
            Tags{" "}
            <span className="block text-sm text-muted-foreground">
              Content by tags from your WordPress
            </span>
          </span>
        </Link>
        <Link
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="/posts/categories"
        >
          <Boxes size={32} />
          <span>
            Categories{" "}
            <span className="block text-sm text-muted-foreground">
              Categories from your WordPress
            </span>
          </span>
        </Link>
        <a
          className="border h-48 bg-accent/50 rounded-lg p-4 flex flex-col justify-between hover:scale-[1.02] transition-all"
          href="https://github.com/9d8dev/next-wp"
        >
          <Folder size={32} />
          <span>
            Documentation{" "}
            <span className="block text-sm text-muted-foreground">
              How to use `next-wp`
            </span>
          </span>
        </a>
      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Review Dịch vụ đặt xe 7 chỗ, 16 chỗ Đà Lạt
            </h2>
            <p className="mb-8 font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
              Review Dịch vụ đặt xe Đà Lạt từ khách hàng Chất lượng dịch vụ là
              phương châm phát triển của chúng tôi !!!.
            </p>
          </div>
          <div className="grid mb-8 lg:mb-12 lg:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Bảng giá cho thuê xe ô tô Đà Lạt trong năm 2024
                </h3>
                <p className="my-4">
                  <p className="text-primary">
                    Thuê xe 7 chỗ tại Đà Lạt Sẵn sàng tư vấn và sắp xếp các loại
                    xe cũng như dịch vụ phù hợp với mục đích chuyến đi của bạn.
                    Quy trình đơn giản, thuận tiện; Đội ngũ nhân viên sẵn sàng
                    tư vấn 24/24. Đội ngũ hướng dẫn viên chuyên nghiệp, nhiệt
                    tình tư vấn miễn phí . Đặt xe trươc để được hưởng giá tốt
                    nhất, ưu đãi nhất, xe tốt nhất.
                  </p>{" "}
                </p>

                <p className="my-4">Chất lượng tốt</p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Anh Nam</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Công ty du lịch Đà Nẵng
                  </div>
                </div>
              </figcaption>
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
              <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Thuê xe Ford Transit đi Đà Lạt
                </h3>
                <p className="my-4">
                  <p className="text-primary">
                    Thuê xe Ford Transit đi Đà Lạt Vẻ ngoài của xe Ford Transit
                    16 Đà Lạt được đánh giá là “bề thế” và “vững chãi”. Xe được
                    thiết kế mang đậm chất cơ bắp của dòng xe Mỹ Xe được trang
                    bị kính cách nhiệt tối màu vì vậy khi ngồi trên xe không lo
                    ánh nắng gắt dội vào ảnh hưởng tới sức khỏe, làn da.
                  </p>
                </p>
                <p className="my-4">
                  Tôi rất hài lòng vì chuyến đi ấn tượng, thanh lịch của người
                  Đà Lạt
                </p>
              </blockquote>
              <figcaption className="flex justify-center items-center space-x-3">
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
                  alt="profile picture"
                />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>Anh Tiến</div>
                  <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Hà Nội
                  </div>
                </div>
              </figcaption>
            </figure>
            {/* <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-b border-gray-200 lg:border-b-0 md:p-12 lg:border-r dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Mindblowing workflow and variants
                      </h3>
                      <p className="my-4">
                        "As someone who mainly designs in the browser, I've been
                        a casual user of Figma, but as soon as I saw and started
                        playing with FlowBite my mind was 🤯.
                      </p>
                      <p className="my-4">
                        Everything is so well structured and simple to use (I've
                        learnt so much about Figma by just using the toolkit).
                      </p>
                      <p className="my-4">
                        Aesthetically, the well designed components are
                        beautiful and will undoubtedly level up your next
                        application."
                      </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Jese Leos</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Software Engineer at Facebook
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                  <figure className="flex flex-col justify-center items-center p-8 text-center bg-gray-50 border-gray-200 md:p-12 dark:bg-gray-800 dark:border-gray-700">
                    <blockquote className="mx-auto mb-8 max-w-2xl text-gray-500 dark:text-gray-400">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        Efficient Collaborating
                      </h3>
                      <p className="my-4">
                        "This is a very complex and beautiful set of elements.
                        Under the hood it comes with the best things from 2
                        different worlds: Figma and Tailwind.
                      </p>
                      <p className="my-4">
                        You have many examples that can be used to create a fast
                        prototype for your team."
                      </p>
                    </blockquote>
                    <figcaption className="flex justify-center items-center space-x-3">
                      <img
                        className="w-9 h-9 rounded-full"
                        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
                        alt="profile picture"
                      />
                      <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>Joseph McFall</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                          CTO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure> */}
          </div>
          <div className="text-center">
            <a
              href="/gioi-thieu"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              xem thuê xe nhiều hơn...
            </a>
          </div>
        </div>
      </section>

      <footer className="w-full flex items-center justify-center py-3">
        <Link href="/" title="nextui.org homepage">
          Thuê xe ô tô đi Đà Lạt, tham quan, đưa đón sân bay tại Đà Lạt
        </Link>
      </footer>

      <Footers />
      <div className="hotline-phone-ring-wrap">
        <div className="hotline-phone-ring">
          <div className="hotline-phone-ring-circle" />
          <div className="hotline-phone-ring-circle-fill" />
          <div className="hotline-phone-ring-img-circle">
            <a href="tel: 0918638068" className="pps-btn-img">
              <img
                src="https://wiki.minhduy.vn/wp-content/uploads/2022/07/icon-call-nh.png"
                alt="Gọi điện thoại"
                width={50}
              />
            </a>
          </div>
        </div>
        <div className="hotline-bar">
          <a href="tel: 0918638068">
            <span className="text-hotline"> 0918 638 068</span>
          </a>
        </div>
      </div>
    </article>
  );
};
