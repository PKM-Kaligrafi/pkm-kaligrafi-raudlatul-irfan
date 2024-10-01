"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Rating from "@/components/rating/Rating";

export default function Service() {
  const [items, setItems] = useState([]);

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
      <div id="mainRating" className="mx-10">
        <div
          id="navShop"
          className="mb-10 flex flex-row items-center justify-between gap-10 md:gap-14 md:justify-center"
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
