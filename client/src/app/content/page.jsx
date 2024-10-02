"use client"
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SearchBar from "@/components/search-bar/SearchBar";

const Content = () => {
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

  console.log(Content);

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

        <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20">
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
            
            <div className="space-y-1">
              {items.map((item, index) => (
                <p key={index} className="text-md font-ptserif">
                  <b>Artist:</b> {item.artist_name}
                </p>
              ))}
              {items.map((item, index) => (
                <p key={index} className="text-md mb-8 font-ptserif">
                  <b>Created Date:</b> {item.created_date ? new Date(item.created_date.seconds * 1000).toLocaleString() : "No Date Available"}
                </p>
              ))}
              
            </div>
          </div>

          <div className="relative">
            <a
              href="#"
              className="text-md mb-6 mt-10 font-ptserif font-bold text-[#E9B472] underline"
            >
              See Reviews
            </a>
            <div className="w-44">
            {items.map((item, index) => (
              <p key={index} className="my-3 text-center font-ptserif text-xl font-bold">
                {item.price}
              </p>
            ))}
              
              <button className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold">
                Check Out
              </button>
            </div>
            <div className="absolute bottom-0 right-0 flex space-x-4">
              <Image
                src="/svg/icon/love.svg"
                alt="img love"
                className="h-10 w-10 rounded-full bg-[#E9B472] p-2"
                width={10}
                height={10}
              />
              <Image
                src="/svg/icon/cart.svg"
                alt="img cart"
                className="h-10 w-10 rounded-full bg-[#014E3E] p-2"
                width={10}
                height={10}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;