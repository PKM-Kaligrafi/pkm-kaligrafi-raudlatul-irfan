"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [achievement, setAchievement] = useState([]);

  useEffect(() => {
    const fetchAchievement = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/achievement");
        const data = await response.json();
        setAchievement(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAchievement();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-8 font-ptserif md:gap-12">
        <section className="relative mx-6 flex aspect-[17/9] items-end rounded-2xl bg-[#092928] bg-opacity-50 px-4 py-6 text-white md:mx-16 md:aspect-[17/7] md:rounded-[3rem] md:px-16">
          <div className="absolute inset-0 -z-10 rounded-2xl md:rounded-[3rem]">
            <Image
              src="/webp/main-building.webp"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl md:rounded-[3rem]"
            />
          </div>
          <div className="w-2/3 md:py-20">
            <h1 className="mb-2 text-xl font-semibold md:mb-6 md:text-5xl">
              Raudlatul Irfan
            </h1>
            <p className="text-justify text-4xs md:text-lg">
            Yayasan Raudlatul Irfan adalah lembaga pendidikan Islam yang berdedikasi untuk memberikan pendidikan berkualitas berbasis nilai-nilai Islami. Kami tidak hanya menyediakan pendidikan formal yang membentuk generasi berakhlak mulia, tetapi juga mendukung pengembangan seni kaligrafi melalui Workshop Kaligrafi Raudlatul Irfan. Karya kaligrafi kami telah diakui secara internasional, mencerminkan keahlian para pengrajin kami yang berbakat dan berkualitas tinggi. Melalui dedikasi pada pendidikan dan seni, kami berkomitmen untuk melestarikan nilai-nilai budaya Islam dan memperkenalkannya ke seluruh dunia
            </p>
          </div>
        </section>
        <section className="relative aspect-[16/3] w-screen bg-[#092928] bg-opacity-50 bg-cover object-contain md:aspect-[16/2]">
          <div className="absolute inset-0 -z-10">
            <Image
              src="/webp/3-caligraphy.webp"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        <section className="flex flex-row items-center justify-end gap-4 md:gap-16">
          <div className="flex w-2/5 flex-col items-end">
            <h1 className="text-xl font-semibold md:mb-6 md:text-4xl">
              Our Mission
            </h1>
            <p className="ml-2 text-end text-3xs leading-tight md:text-lg">
            Memperkenalkan kaligrafi sebagai seni dan teknik yang menekankan pada keindahan bentuk-bentuk, huruf, dan merangkai tulisan secara tersusun, menjalankan bisnis kaligrafi yang berorientasi pada kepuasan konsumen dan mitra, mengupayakan agar kaligrafi menjadi pendorong kegiatan ekonomi masyarakat.
            </p>
          </div>
          <div className="relative aspect-[16/11] w-3/5 rounded-l-xl bg-[#092928] bg-opacity-50 md:aspect-[16/8] md:w-1/2 md:rounded-l-[2.5rem]">
            <div className="absolute inset-0 -z-10">
              <Image
                src="/webp/rapat01.webp"
                layout="fill"
                objectFit="cover"
                className="rounded-l-xl md:rounded-l-[2.5rem]"
              />
            </div>
          </div>
        </section>
        <section className="mx-16 flex flex-col items-center">
          <h1 className="mb-4 text-center text-xl font-semibold md:text-4xl">
            Achievement
          </h1>
          <div className="w-full md:hidden">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1.6}
              coverflowEffect={{
                rotate: 0,
                stretch: 50,
                depth: 300,
                modifier: 1,
              }}
              pagination={{ dynamicBullets: true }}
              modules={[EffectCoverflow, Pagination]}
              loop={true}
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col items-center">
                    <img
                      className="rounded-3xl"
                      src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
                    />
                    {activeIndex === index && (
                      <div className="flex w-full flex-col items-center justify-center rounded-3xl">
                        <h1 className="text-center text-lg font-semibold">
                          1st Medal Caligraphy Olimpiade
                        </h1>
                        <p className="pb-6 text-center text-sm">
                          Lorem ipsum dolor ist amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="hidden w-full md:block">
            <Swiper
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              spaceBetween={200}
              pagination={{ dynamicBullets: true }}
              modules={[Pagination]}
              loop={true}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index}>
                  <div className="relative flex flex-col items-center">
                    <img
                      className="rounded-3xl"
                      src={`https://swiperjs.com/demos/images/nature-${index + 1}.jpg`}
                    />
                    <div className="flex w-full flex-col items-center justify-center rounded-3xl">
                      <h1 className="text-center text-lg font-semibold md:text-xl">
                        1st Medal Caligraphy Olimpiade
                      </h1>
                      <p className="pb-6 text-center text-sm md:text-base">
                      Joko Anwar berhasil meraih medali pertama kaligrafi internasional
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
}
