"use client";
import React from "react";
import Image from "next/image";

export default function Sent({ item }) {
  const { img, title, p1, p2, p3 } = item;

  return (
    <div className="mb-5 flex rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
      <div className="m-5 flex w-full flex-row items-center gap-3 md:m-6 md:my-5 md:gap-6">
        <Image
          src={`/webp/${img}`}
          width={100}
          height={100}
          className="w-20 aspect-square rounded-lg md:w-32"
        />
        <div className="flex flex-col gap-3 w-full">
          <div className="flex flex-col items-end">
            <p className="font-ptserif text-sm font-black tracking-wide text-[#C6975D] md:text-lg">
              On The Way
            </p>
            <p className="font-ptserif text-xs font-black md:text-base">{p3}</p>
          </div>

          <div className="flex flex-col gap-1">
            <h1 className="line-clamp-1 font-ptserif text-base font-black md:text-xl">
              {title}
            </h1>
            <div className="flex flex-row gap-2 tracking-wide">
              <p className="font-ptserif text-xs md:text-sm">{p1}</p>
              <p className="font-ptserif text-xs md:text-sm font-black">{p2}</p>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <button className="text-end font-ptserif font-black text-[#C11313] underline hover:text-black md:text-lg">
              Courier Detail
            </button>
          </div>
        </div>
      </div>
    </div>
    // <div id="cardOrders" className="flex flex-col pb-5">
    //         <div id="contOrder" className=" bg-[#FAF1EA] shadow-[0_0px_10px_rgba(0,0,0,0.25)] rounded-3xl h-56">
    //             <p className="font-black font-ptserif text-sm text-[#C6975D] flex justify-end p-4 tracking-wide">On The Way</p>
    //             <div className="flex flex-row justify-around">
    //                 <div className="flex items-center justify-center">
    //                     <Image
    //                         src={`/webp/${img}`}
    //                         alt="img item"
    //                         className="rounded-lg w-32 h-32"
    //                         width={32}
    //                         height={32}
    //                     />
    //                 </div>
    //                 <div className="flex flex-col gap-3">
    //                     <h1 className="font-black font-ptserif text-md">{title}</h1>
    //                     <div className="flex flex-row tracking-wide gap-2">
    //                         <p className="font-ptserif text-sm">{p1}</p>
    //                         <p className="font-ptserif text-sm font-black">{p2}</p>
    //                     </div>
    //                 </div>
    //                 <p className="font-black font-ptserif text-sm">{p3}</p>
    //             </div>
    //             <div className="flex justify-end">
    //                 <button className="text-[#C11313] font-black font-ptserif underline hover:text-black">Courier Detail</button>
    //             </div>
    //         </div>
    //     </div>
  );
}
