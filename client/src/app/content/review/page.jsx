"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/search-bar/SearchBar";

const ContentReview = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    item_name: "",
    description: "",
    artist_name: "",
    created_date: "",
    price: "",
    image: "",
  });

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/item");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchItems();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/create/add-item", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  const handleEdit = (item) => {
    setFormData({
      item: item.item,
      description: item.description,
      artist: item.artist,
      createdDate: item.createdDate,
      price: item.price,
    });
  };

  console.log(ContentReview);

  return (
    <div id="mainService" className="flex flex-col gap-8">
      <SearchBar />
      <div className="md:mx-10 md:flex">
        <div className="space-y-4 px-9 md:flex-1 md:px-6 md:py-0 lg:flex lg:space-x-6 lg:space-y-0">
          <div className="aspect-[16/11] rounded-2xl bg-[#092928] md:aspect-square md:flex-1 lg:aspect-[16/11]">
            <Image
              src="/webp/caligraphy01.webp"
              width={100}
              height={100}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>

          <div className="flex justify-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4">
            <div className="aspect-square w-12 rounded bg-[#E9B472] lg:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#014E3E] lg:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#E9B472] lg:w-14"></div>
            <div className="aspect-square w-12 rounded bg-[#014E3E] lg:w-14"></div>
          </div>
        </div>

        <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20 md:ps-4 md:pe-3">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
            {items.map((item, index) => (
              <h2 key={index} className="font-ptserif text-3xl font-bold">
                {item.item_name}
              </h2>
            ))}
              
              <div className="flex">
                <Image
                  src="/svg/icon/star-yellow.svg"
                  alt="img star"
                  className="w-8 p-1"
                  width={5}
                  height={5}
                />
                <p className="font-ptserif text-2xl font-bold">4.9/5</p>
              </div>
            </div>
            {items.map((item, index) => (
              <p key={index} className="mb-7 font-ptserif text-lg">
                {item.description}
              </p>
            ))}
          </div>

          <div id="review">
          <div className="relative mb-4 flex rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
                <div className="m-7 my-9 flex w-full flex-row items-center gap-5">
                    <Image
                        src="/webp/caligraphy01.webp"
                        width={100}
                        height={100}
                        className="aspect-square w-26 rounded-lg md:w-28"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-ptserif text-sm font-black md:text-base">
                        User1289281828
                        </h1>
                        <div className="flex flex-row gap-2 tracking-wide">
                            <p className="line-clamp-3 font-ptserif text-xs md:text-sm">
                                Kualitas gambar bagus banget, detail sangat oke, tapi nunggunya sebulan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 my-4 me-4 flex flex-col items-end justify-between md:my-3 md:me-3">
                    <div className="flex items-end">
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-grey.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    </div>
                </div>
            </div>
            <div className="relative mb-4 flex rounded-3xl shadow-[0_0px_10px_rgba(0,0,0,0.25)]">
                <div className="m-7 my-9 flex w-full flex-row items-center gap-5">
                    <Image
                        src="/webp/caligraphy01.webp"
                        width={100}
                        height={100}
                        className="aspect-square w-26 rounded-lg md:w-28"
                    />
                    <div className="flex flex-col gap-2">
                        <h1 className="font-ptserif text-sm font-black md:text-base">
                        User1289281828
                        </h1>
                        <div className="flex flex-row gap-2 tracking-wide">
                            <p className="line-clamp-3 font-ptserif text-xs md:text-sm">
                              ashda jshd asg dhgda sag dsdhags dhagsdjha dhhhsgd h gsh ghbnbh jagdha sgdag sh jkgdasdga sdgas jdgashg dasgdhasgda ksgdagdashgda shkdga
                                Kualitas gambar bagus banget, detail sangat oke, tapi nunggunya sebulan.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 my-4 me-4 flex flex-col items-end justify-between md:my-3 md:me-3">
                    <div className="flex items-end">
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-yellow.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    <Image
                    src="/svg/icon/star-grey.svg"
                    alt="img star"
                    className="w-6 p-1"
                    width={5}
                    height={5}
                    />
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentReview;
