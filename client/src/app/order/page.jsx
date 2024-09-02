import React from "react";
import Image from "next/image";
import Order from "@/components/order/Order";

export default function Service() {
  return (
    <>
        <div id="mainOrder" className="">
            <div id="navShop" className="flex flex-row gap-8 items-center justify-center mb-10">
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Order</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Sent</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Rating</button>
            </div>
            <Order img="tester.webp" title="Kaligrafi Surah Yasin 20x40" p1="Total 1 Product:" p2="Rp 1.250.000" p3="1x"/>
            <Order img="tester.webp" title="Kaligrafi Surah Al-Fatihah 40x40" p1="Total 2 Product:" p2="Rp 4.250.000" p3="2x"/>
        </div>
    </>
  );
}