"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SearchBar({ item }) {
  return (
    <div className="flex w-full flex-row gap-3 px-8 md:gap-6 md:px-16">
      <input
        type="text"
        placeholder="Search"
        className="h-8 w-full rounded-full border border-black bg-transparent p-2 px-6 md:h-10"
      />
      <Link
        href="/wishlist"
        className="aspect-square h-8 rounded-full bg-[#E9B472] hover:bg-[#C6975D] md:h-10"
      >
        <Image
          src="/svg/icon/love.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </Link>
      <Link
        href="/cart"
        className="aspect-square h-8 rounded-full bg-[#092928] hover:bg-black md:h-10"
      >
        <Image
          src="/svg/icon/cart.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </Link>
    </div>
  );
}
