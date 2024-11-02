"use client";
import React from "react";
import Image from "next/image";

export default function Order({ item }) {
  // Ensure item properties are handled safely
  const title = item?.title || "Default Item Title";
  const price = item?.price || "$50";
  const orderNumber = item?.orderNumber || "Order #0000";
  const imageSrc = item?.image || "/webp/caligraphy01.webp"; // Default image

  return (
    <div className="mb-5 flex h-56 rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
      <div className="ms-7 flex w-full flex-row items-center gap-6 md:ms-12">
        <Image
          src={imageSrc}
          alt="Item Image"
          width={100}
          height={100}
          className="h-32 w-32 rounded-lg"
        />
        <div className="flex flex-col gap-3 w-full me-7">
          <div className="items-end">
            <div className="flex flex-col items-end">
              <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
                Waiting
              </p>
              <p className="font-ptserif text-sm font-black md:text-base">
                {orderNumber}
              </p>
            </div>
          </div>
          <h1 className="font-ptserif text-base font-black md:text-xl">
            {title}
          </h1>
          <div className="flex flex-row gap-2 tracking-wide">
            <p className="font-ptserif text-xs md:text-sm">Quantity: 1</p>
            <p className="font-ptserif text-xs md:text-sm font-black">{price}</p>
          </div>
          <div className="flex flex-col items-end">
            <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA] md:w-28 md:text-lg">
              Cancel
            </button>
          </div>
        </div>
      </div>
      {/* <div className="my-4 me-5 flex flex-col items-end justify-between md:my-7 md:me-8">
        <div className="flex flex-col items-end">
          <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
            Waiting
          </p>
          <p className="font-ptserif text-sm font-black md:text-base">
            {orderNumber}
          </p>
        </div>
        <button className="w-24 rounded-3xl border-[0.12rem] border-[#C11313] p-1 font-ptserif font-black text-[#C11313] hover:bg-[#C11313] hover:text-[#FAF1EA] md:w-28 md:text-lg">
          Cancel
        </button>
      </div> */}
    </div>
  );
}
