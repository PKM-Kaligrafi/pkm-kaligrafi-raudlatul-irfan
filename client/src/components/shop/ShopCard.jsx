"use client";
import React from "react";
import Image from "next/image";

export default function ShopCard({ item }) {
  return (
    <div className="font-ptserif">
      <div className="relative flex aspect-[5/6] w-32 items-end justify-end rounded-2xl bg-[#092928] md:w-48 lg:w-56">
        <Image
          src="/webp/caligraphy01.webp"
          width={100}
          height={100}
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="absolute aspect-square w-12 translate-x-2 translate-y-2 rounded-full bg-[#E9B472] hover:bg-[#C6975D] md:w-12 lg:w-14">
          <Image
            src="/svg/icon/plus.svg"
            width={100}
            height={100}
            className="w-full p-4"
          />
        </div>
      </div>
      <h1 className="font-semibold md:text-lg lg:text-2xl">{item.item_name}</h1>
      <p className="md:text-md text-xs lg:text-xl">{item.price}</p>
    </div>
  );
}
