"use client";
import React from "react";
import Image from "next/image";

export default function SearchBar({ item }) {
  return (
    <div className="flex w-full flex-row gap-3 px-8 md:px-16 md:gap-6">
      <input
        type="text"
        placeholder="Search"
        className="h-8 w-full rounded-full border border-black bg-transparent p-2 md:h-10"
      />
      <div className="aspect-square h-8 rounded-full bg-[#E9B472] md:h-10">
        <Image
          src="/svg/icon/love.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </div>
      <div className="aspect-square h-8 rounded-full bg-[#092928] md:h-10">
        <Image
          src="/svg/icon/cart.svg"
          width={100}
          height={100}
          className="w-full p-2"
        />
      </div>
    </div>
  );
}
