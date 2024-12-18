"use client";

import type { ListingItemTypes } from "@/components/types";
import Image from "next/image";
import Link from "next/link";

import { Navigation, Pagination, Swiper, SwiperSlide } from "./slider";

export default function ListingCard({
  id,
  slides,
  title,
  price,
}: ListingItemTypes) {
  return (
    <>
      <div className="listing-card group/item relative inline-flex w-full flex-col">
        <div className="relative w-full overflow-hidden rounded-xl">
          <Link href="#">
            <div className="listing-item after:absolute after:bottom-0 after:left-0 after:z-[1] after:h-1/4 after:w-full after:bg-gradient-to-t after:from-black/25">
              <Swiper
                className="!static"
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                }}
                slidesPerView={1}
                navigation={{
                  nextEl: `.${id}-listing-item-button-next`,
                  prevEl: `.${id}-listing-item-button-prev`,
                }}
              >
                {slides?.map((slide, index) => (
                  <SwiperSlide key={`slide-${index}`}>
                    <Image
                      className="bg-gray-lighter aspect-[34/25]"
                      src={slide}
                      width={816}
                      height={600}
                      alt="boat"
                      priority
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Link>
        </div>
        <Link href="#">
          <div className="content pt-3">
            <h2 className="text-gray-dark text-ellipsis font-bold 2xl:mb-1.5">
              {title}
            </h2>
            <p className="text-gray-light mb-3 xl:mb-3">Đưa đón tại Đà Lạt</p>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-gray-light">
                <span className="text-gray-dark 3xl:text-xl font-bold xl:text-[18px]">
                  {price}
                </span>{" "}
                /ngày
              </p>
              <div className="flex items-center gap-3 leading-7">
                {/* <Rate
                  allowHalf
                  allowClear
                  defaultValue={rating}
                  characterClassName="h-[14px] w-[14px] 3xl:h-[18px] 3xl:w-[18px]"
                />
                ({ratingCount}) */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
