import React from "react";
import Image from "next/image";

function Home() {
  return (
    <div id="mainHome" className="">
      <div className="space-y-6 py-16 text-center md:h-screen md:relative">
        <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
          Looking for Beautiful Calligraphy
        </h2>
        <div className="flex w-full flex-row justify-center gap-3 px-16 md:gap-6">
          <input
            type="text"
            placeholder=""
            className="h-7 w-60 rounded-full border border-black bg-transparent p-2 md:h-10 md:w-7/12"
          />
          <button className="text-xs w-32 p-3 rounded-full border border-black py-1 font-ptserif font-bold md:w-36 md:text-lg hover:bg-[#092928] hover:text-white">
            Search
          </button>
        </div>
        <div className="justify-center">
          <div className="flex items-center justify-center md:gap-20 gap-5 text-xs md:text-xl">
            <h1 className={`inline font-ptserif`}>Naski</h1>
            <h1 className={`inline font-ptserif`}>Tsuluts</h1>
            <h1 className={`inline font-ptserif`}>Farisi</h1>
            <h1 className={`inline font-ptserif`}>Diwani</h1>
          </div>
        </div>

        <div id="pembatas" className="grid grid-cols-3 py-20">
          <div className="relative col-span-2 w-full rounded-e-2xl bg-[#092928]">
            <Image
              src="/webp/main-building.webp"
              layout="fill"
              objectFit="cover"
              className="rounded-e-2xl"
            />
            <div className="absolute inset-0 rounded-e-2xl bg-[#092928] opacity-50"></div>
          </div>
          <div className="relative aspect-[16/7] w-full rounded-s-2xl bg-[#092928]] md:aspect-[16/4]">
            <Image
              src="/webp/building-certificate.webp"
              layout="fill"
              objectFit="cover"
              className="rounded-s-2xl"
            />
            <div className="absolute inset-0 rounded-s-2xl bg-[#092928] opacity-50"></div>
          </div>
        </div>
      </div>

      

      <div id="collections" className="py-3 md:h-screen md:space-y-6 md:mx-7">
        <div className="text-center">
          <h2 className="font-ptserif text-2xl font-bold md:text-3xl">
            Our Collections
          </h2>
        </div>

        <div className="justify-center space-y-3 p-6 md:flex md:space-x-3 md:space-y-0 md:gap-3">
          <div id="3Foto" className="space-y-3 md:flex-1 md:space-y-5">
            <div className="grid grid-cols-3 gap-3 md:gap-5">
              <div className="relative col-span-2  w-full rounded-2xl bg-[#092928] py-20 md:aspect-video md:py-32 md:h-96">
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
            <div className="relative w-full rounded-2xl bg-[#092928] p-14 md:p-20 md:h-1/2">
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

      <div id="getToKnow" className="p-6 md:h-screen md:items-center md:justify-center md:flex md:mx-7">
        <div className="relative flex aspect-[5/1] w-full flex-col items-center justify-center gap-3 rounded-2xl py-16 md:gap-7 md:h-1/2">
          <Image
            src="/webp/main-building-front.webp"
            width={1000}
            height={1000}
            className="absolute -z-10 h-full w-full rounded-2xl object-cover"
          />
          <div className="absolute inset-0 rounded-2xl bg-[#092928] opacity-50"></div>

          <div className="z-10 text-center font-ptserif text-lg text-white md:text-2xl text-shadow-lg">
            <p>Let’s get to know</p>
            <p>the Raudlatul Irfan</p>
          </div>
          <button className="z-10 rounded-full bg-[#E9B472] px-6 py-1 font-ptserif font-semibold text-white hover:bg-[#C6975D]">
            Open
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
