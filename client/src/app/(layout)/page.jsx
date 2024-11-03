import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="space-y-6 py-12 text-center md:py-52">
        <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
          Looking for Beautiful Calligraphy
        </h2>
        <div className="flex w-full flex-row justify-center gap-3 px-16 md:gap-6">
          <input
            type="text"
            placeholder=""
            className="h-7 w-60 rounded-full border border-black bg-transparent p-2 md:h-10 md:w-7/12"
          />
          <button className="w-32 rounded-full border border-black p-3 py-1 font-ptserif text-xs font-bold hover:bg-[#092928] hover:text-white md:w-36 md:text-lg">
            Search
          </button>
        </div>
        <div className="justify-center">
          <div className="flex items-center justify-center gap-5 text-xs md:gap-20 md:text-xl">
            <h1 className={`inline font-ptserif`}>Naski</h1>
            <h1 className={`inline font-ptserif`}>Tsuluts</h1>
            <h1 className={`inline font-ptserif`}>Farisi</h1>
            <h1 className={`inline font-ptserif`}>Diwani</h1>
          </div>
        </div>
      </div>

      <div id="pembatas" className="grid grid-cols-3">
        <div className="relative col-span-2 h-20 w-full rounded-e-2xl bg-[#092928] md:h-auto">
          <Image
            src="/webp/main-building.webp"
            layout="fill"
            objectFit="cover"
            className="rounded-e-2xl"
          />
          <div className="absolute inset-0 rounded-e-2xl bg-[#092928] opacity-50"></div>
        </div>
        <div className="bg-[#092928]] relative w-full rounded-s-2xl md:aspect-[16/4]">
          <Image
            src="/webp/building-certificate.webp"
            layout="fill"
            objectFit="cover"
            className="rounded-s-2xl"
          />
          <div className="absolute inset-0 rounded-s-2xl bg-[#092928] opacity-50"></div>
        </div>
      </div>

      <div id="collections" className="py-12 md:mx-8 md:space-y-6 md:py-52">
        <div className="text-center">
          <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
            Our Collections
          </h2>
        </div>

        <div className="justify-center space-y-3 p-6 md:flex md:gap-3 md:space-x-3 md:space-y-0">
          <div id="3Foto" className="space-y-3 md:flex-1 md:space-y-5">
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="relative col-span-2 w-full rounded-2xl bg-[#092928] py-20 md:aspect-video md:h-96 md:py-32">
                <Image
                  src="/webp/caligraphy02.webp"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="relative w-full rounded-2xl bg-[#092928] py-20 md:py-32">
                <Image
                  src="/webp/caligraphy03.webp"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="relative w-full rounded-2xl bg-[#092928] p-14 md:h-1/2 md:p-20">
              <Image
                src="/webp/caligraphy04.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>

          <div id="2Foto" className="space-y-3 md:flex-1 md:space-y-7">
            <div className="relative w-full rounded-2xl bg-[#092928] py-20 md:h-1/2">
              <Image
                src="/webp/caligraphy05.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
            <div className="relative aspect-video w-full rounded-2xl bg-[#014E3E] md:aspect-auto md:h-2/3">
              <Image
                src="/webp/caligraphy01.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        id="getToKnow"
        className="p-6 py-8 md:mx-8 md:flex md:items-center md:justify-center"
      >
        <div className="relative flex aspect-[5/1] w-full flex-col items-center justify-center gap-3 rounded-2xl py-16 md:h-1/2 md:gap-7">
          <Image
            src="/webp/main-building-front.webp"
            width={1000}
            height={1000}
            className="absolute -z-10 h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-[#092928] opacity-50"></div>

          <div className="text-shadow-lg z-10 text-center font-ptserif text-lg text-white md:text-2xl">
            <p>Let’s get to know</p>
            <p>the Raudlatul Irfan</p>
          </div>
          <button className="z-10 rounded-full bg-[#E9B472] px-6 py-1 font-ptserif font-semibold text-white hover:bg-[#C6975D]">
            <Link href="/about-us">Open</Link>
          </button>
        </div>
      </div>
    </>
  );
}