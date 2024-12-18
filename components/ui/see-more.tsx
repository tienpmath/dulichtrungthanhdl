"use client";

import Link from "next/link";

export default function SeeMore() {
  return (
    <Link
      href="tel:0918638068"
      className="mb-2 me-2 rounded-lg bg-gradient-to-r from-teal-200 to-lime-200 px-5 py-2.5 text-center text-sm font-medium text-gray-900 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:outline-none focus:ring-4 focus:ring-lime-200 dark:focus:ring-teal-700"
    >
      0918 638 068
    </Link>
  );
}
