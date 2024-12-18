import type { DestinationTypes } from "@/components/types";

const destinations = [
  {
    name: "Vườn hoa thành phố Đà Lạt",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/vuonhoadl.jpg",
  },
  {
    name: "Dinh 3 bảo đại",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/dinh3.jpg",
  },
  {
    name: "Vườn dâu Đà Lạt",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/vuondaudl.jpg",
  },
  {
    name: "Rừng thông mơ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/rungthong.jpg",
  },
  {
    name: "Đường hầm điêu khắc ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/duongham.jpg",
  },
  {
    name: "Thuyền viện trúc lâm",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/thienvientruclam.jpg",
  },
  {
    name: "Thác đatanla ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/thacdatala.jpg",
  },
  {
    name: "Dinh 1 bảo đại",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/dinh1.jpg",
  },
  {
    name: "Coffe mountain view ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/cafe.jpg",
  },
  {
    name: "Chùa linh Phước ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/chualinhphuoc.jpg",
  },
  {
    name: "Vườn Cẩm tú cầu",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/camtucau.jpg",
  },
  {
    name: "Vườn ánh sáng ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/vuonanhsang.jpg",
  },
  {
    name: "Đồi chè cầu đất( ngoại thành)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/doiche.jpg",
  },
  {
    name: "Đỉnh LangBiang ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/langbiang.jpg",
  },
  {
    name: "Thung lũng tình yêu ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/tinhyeu1.jpg",
  },
  {
    name: "Thung lũng vàng (ngoại thành)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/thunglungvang.jpg",
  },
  {
    name: "Chika Farm",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/nong_trai_chika_farm_1.jpg",
  },
  {
    name: "Pupi fram ( nông trại cún)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/traicun.jpg",
  },
  {
    name: "Cf thuý thuận tà nung ( ngoại thành)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/cafethuythuan.jpg",
  },
  {
    name: "Làng cù lần ( ngoại thành)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/langculan.jpg",
  },
  {
    name: "Cáp treo đồi robin ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/captreo.jpg",
  },
  {
    name: "Cổng trời bali ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/cong-troi-bali.jpg",
  },
  {
    name: "Vườn thú zoodoo ( ngoại thành + 300k)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/vuonthu.jpg",
  },
  {
    name: "Vườn thượng uyển bay",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/thuonguyenbay.jpg",
  },
  {
    name: "Cf combilen ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/kombi-land-da-lat.jpg",
  },
  {
    name: "Biệt thự hằng Nga",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/biet-thu-hang-nga-da-lat-1.jpg",
  },
  {
    name: "Biệt thự Trần lệ Xuân ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/biet-dien-tran-le-xuan-tong-quan-3.jpg",
  },
  {
    name: "Rừng lá phong",
    slug: "#",
    location: "Đà Lạt",
    thumbnail:
      "/images/destinations/Review-khu-du-lich-La-Phong-Da-Lat-duong-di-gia-ve.jpg",
  },
  {
    name: "Chùa linh ứng ( ngoại thành)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/chua-linh-an-da-lat-1-1605.jpg",
  },
  {
    name: "Thác pouguar (ngoại thành+ 300k)",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/thac_pongour_3.jpg",
  },
  {
    name: "Khu vực tà nung ( ngoại thành ) ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/Deo Ta Nung  - Da Lat.jpg",
  },
  {
    name: "Cao nguyên hoa dalat",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/maxresdefault.jpg",
  },
  {
    name: "Chuyện của nắng ",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/chuyencuanang.jpg",
  },
  {
    name: "Trạm ký ức",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/25_tram-ky-uc-da-lat-bk-1.jpg",
  },

  {
    name: "Săn mây Đồi ché Cầu Đất",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/1.jpg",
  },
  {
    name: "Núi Lang Biang",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/langbiang.jpg",
  },
  {
    name: "Thác Datanla",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/datala.jpg",
  },
  {
    name: "Dinh Bảo Đại",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/dinhbaodai.jpg",
  },
  {
    name: "Vườn dâu tây Đà Lạt",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/vuondau.jpg",
  },
  {
    name: "Hoa Đà Lạt",
    slug: "#",
    location: "Đà Lạt",
    thumbnail: "/images/destinations/hoadalat.jpg",
  },
];

const DiaDiem = () => {
  return (
    <>
      <h2 className="block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        Thuê xe đi địa điểm Du lịch Đà Lạt, xe có tài xế Tour nội thành Đà Lạt,
        Lá xe đưa đón Tour ngoại thành Đà Lạt, Tour Săn mây Đà Lạt
      </h2>
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Danh sách các địa điểm tour nội thành Đà Lạt, ngoại thành Đà Lạt - thuê
        xe dịch vụ 7 chỗ, 16 chỗ tham quan Đà Lạt.
      </h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {destinations?.map((item: DestinationTypes, index: number) => (
          <div key={index}>
            <a
              href="/"
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 md:max-w-xl md:flex-row dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="size-auto rounded-lg"
                src={item.thumbnail}
                alt={item.name}
              />
            </a>{" "}
            <h3 className="mb-2 text-center text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </>
  );
};

export default DiaDiem;
