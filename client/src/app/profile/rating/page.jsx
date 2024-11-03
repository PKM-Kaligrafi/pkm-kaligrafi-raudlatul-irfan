"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Service() {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "caligraphy01.webp",
      title: "Delicious Cake sfsdf sdfsd sdfsdf",
      p1: "Price:",
      p2: "$20",
      p3: "Delivered on: 2024-10-22",
    },
    {
      id: 2,
      img: "caligraphy01.webp",
      title: "Fresh Bread",
      p1: "Price:",
      p2: "$15",
      p3: "Delivered on: 2024-10-20",
    },
    {
      id: 3,
      img: "caligraphy01.webp",
      title: "Tasty Cookies",
      p1: "Price:",
      p2: "$10",
      p3: "Delivered on: 2024-10-18",
    },
  ]);

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
  
  console.log(items);

  return (
    <>
      <div id="mainRating" className="mx-5 md:mx-10">
        <div
          id="navShop"
          className="mb-10 flex flex-row items-center justify-between gap-5 md:gap-14 md:justify-center"
        >
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Order
          </button>
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Sent
          </button>
          <button className="w-32 rounded-3xl bg-[#E9B472] p-1 font-ptserif text-2xl font-black text-[#FAF1EA] hover:bg-[#C6975D]">
            Rating
          </button>
        </div>
        {items.map((item) => (
          <Rating key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
}
