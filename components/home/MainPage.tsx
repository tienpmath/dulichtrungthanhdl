import { revalidateTag } from "next/cache";
import DiaDiem from "./DiaDiemComponent";
import TopBoats from "./top-boats";

import Image from "next/image";
import LichTrinhComponent from "./lichTrinh";

const MainPage = async () => {
  let res = await fetch("https://dalatmobile.com/api/v1/products");
  // const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
  revalidateTag("bookings-data");
  const data = await res.json();
  // console.log(data?.data?.results);
  // console.log(data.data.results);
  return (
    <main className="flex min-h-screen w-full flex-col items-center p-0">
      <Image
        src="/images/bannnerxe.png"
        alt="Thuê xe Du Lịch Đà Lạt 7 chỗ, 16 chỗ có tài xế"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "100%", height: "auto" }}
      />
      <h1 className="mb-4 text-2xl font-bold">
        Chuyên cho thuê xe du lịch 5 chỗ, 7 chỗ, 16 chỗ, 29 chỗ Đà Lạt, Cam kết
        Giá thuê xe ô tô rẻ nhất trong khu vực
      </h1>
      <div>
        <span
          id="badge-dismiss-green"
          className="me-2 inline-flex items-center rounded bg-green-100 px-2 py-1 text-sm font-medium text-green-800 dark:bg-green-900 dark:text-green-300"
        >
          Giá thuê xe 7 chỗ chỉ từ 900.000 đ/ngày tham quan Đà Lạt
          <button
            type="button"
            className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-green-400 hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
            data-dismiss-target="#badge-dismiss-green"
            aria-label="Remove"
          >
            <svg
              className="size-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span
          id="badge-dismiss-yellow"
          className="me-2 inline-flex items-center rounded bg-yellow-100 px-2 py-1 text-sm font-medium text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
        >
          Giá thuê xe 16 chỗ chỉ từ 1.300.000 đ/ngày tham quan Đà Lạt
          <button
            type="button"
            className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-yellow-400 hover:bg-yellow-200 hover:text-yellow-900 dark:hover:bg-yellow-800 dark:hover:text-yellow-300"
            data-dismiss-target="#badge-dismiss-yellow"
            aria-label="Remove"
          >
            <svg
              className="size-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span
          id="badge-dismiss-indigo"
          className="me-2 inline-flex items-center rounded bg-indigo-100 px-2 py-1 text-sm font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
        >
          Giá thuê xe đưa đón tại sân bay Liên Khương Đà Lạt chỉ từ 250.000 đ
          <button
            type="button"
            className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-indigo-400 hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300"
            data-dismiss-target="#badge-dismiss-indigo"
            aria-label="Remove"
          >
            <svg
              className="size-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span
          id="badge-dismiss-purple"
          className="me-2 inline-flex items-center rounded bg-purple-100 px-2 py-1 text-sm font-medium text-purple-800 dark:bg-purple-900 dark:text-purple-300"
        >
          Giá thuê xe 29 chỗ Đà Lạt chỉ từ 2.500.000 đ/ngày
          <button
            type="button"
            className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-purple-400 hover:bg-purple-200 hover:text-purple-900 dark:hover:bg-purple-800 dark:hover:text-purple-300"
            data-dismiss-target="#badge-dismiss-purple"
            aria-label="Remove"
          >
            <svg
              className="size-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
        <span
          id="badge-dismiss-pink"
          className="me-2 inline-flex items-center rounded bg-pink-100 px-2 py-1 text-sm font-medium text-pink-800 dark:bg-pink-900 dark:text-pink-300"
        >
          Giá thuê xe 7 chỗ Đà Lạt tham quan nội, ngoại thành 1/2 ngày giá
          600.000 đ
          <button
            type="button"
            className="ms-2 inline-flex items-center rounded-sm bg-transparent p-1 text-sm text-pink-400 hover:bg-pink-200 hover:text-pink-900 dark:hover:bg-pink-800 dark:hover:text-pink-300"
            data-dismiss-target="#badge-dismiss-pink"
            aria-label="Remove"
          >
            <svg
              className="size-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Remove badge</span>
          </button>
        </span>
      </div>
      <h2 className="text-lg">
        Bảng giá cho xe đưa đón tận sân bay, tour tham quan nội thành Đà Lạt,
        ngoại thành Đà Lạt, tour trong ngày giá rẻ nhất Đà Lạt
      </h2>
      <TopBoats datas={data?.data?.results ?? []} metas={data?.data?.meta} />
      <LichTrinhComponent />
      <DiaDiem />
    </main>
  );
};
export default MainPage;
