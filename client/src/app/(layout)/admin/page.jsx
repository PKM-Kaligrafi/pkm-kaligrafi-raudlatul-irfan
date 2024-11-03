import React from "react";
import Image from "next/image";
import ItemAdmin from "@/components/admin/ItemAdmin";

export default function Admin() {
  return (
    <>
      <div id="mainAdmin" className="py-12 mx-8 md:mx-16">
        <section
          id="contOPR"
          className="flex w-full flex-row items-center justify-around"
        >
          <div
            id="Order"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] md:aspect-[16/10] md:rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                Order
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Process"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] md:aspect-[16/10] md:rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                Process
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                12
              </p>
            </div>
          </div>
          <div
            id="Rating"
            className="relative flex aspect-square w-3/12 items-center justify-center rounded-2xl bg-[#092928] md:aspect-[16/10] md:rounded-3xl"
          >
            <div className="flex flex-col items-center justify-center gap-3">
              <p className="absolute top-0 my-2 font-ptserif text-sm font-medium tracking-wider text-[#FAF1EA] md:text-lg">
                Rating
              </p>
              <p className="font-ptserif text-4xl font-black text-[#FAF1EA]">
                4.8
              </p>
              <div
                id="custRat"
                className="absolute bottom-0 my-2 flex flex-row gap-1"
              >
                <p className="font-ptserif text-2xs font-light text-[#FAF1EA] md:text-sm">
                  15
                </p>
                <p className="font-ptserif text-2xs font-light text-[#FAF1EA] md:text-sm">
                  customer
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="addItem"
          className="relative mt-10 flex w-full flex-col justify-center gap-6 md:flex-row md:justify-start"
        >
          <div className="flex aspect-[16/9] w-full flex-col items-center justify-center gap-3 rounded-[3rem] bg-[#014E3E] md:aspect-[6/16] md:w-2/12 md:rounded-3xl">
            <Image
              src="/svg/icon/plus.svg"
              className=""
              width={30}
              height={20}
            />
            <p className="font-ptserif text-sm font-black tracking-wide text-[#FAF1EA]">
              Add Item
            </p>
          </div>
          <div className="flex h-full w-full flex-col gap-8 overflow-y-scroll">
            <ItemAdmin />
            <ItemAdmin />
            <ItemAdmin />
            <ItemAdmin />
          </div>
        </section>
      </div>
    </>
  );
}
