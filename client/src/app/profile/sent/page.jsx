"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Sent from "@/components/sent/Sent";

export default function Service(key) {
  const [items, setItems] = useState([
    {
      id: 1,
      img: "caligraphy01.webp",
      title: "Wireless Headphones",
      p1: "Tracking ID:",
      p2: "1234567890",
      p3: "Expected: Nov 5, 2024",
    },
    {
      id: 2,
      img: "caligraphy01.webp",
      title: "Smartphone Case",
      p1: "Tracking ID:",
      p2: "0987654321",
      p3: "Expected: Nov 7, 2024",
    },
    {
      id: 3,
      img: "caligraphy01.webp",
      title: "Bluetooth Speaker",
      p1: "Tracking ID:",
      p2: "1122334455",
      p3: "Expected: Nov 10, 2024",
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
        <div id="mainSent" className="mx-5 md:mx-10">
            <div id="navShop" className="mb-10 flex flex-row items-center justify-between gap-5 md:gap-14 md:justify-center">
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Order</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Sent</button>
                <button className="bg-[#E9B472] p-1 w-32 rounded-3xl font-ptserif font-black text-2xl text-[#FAF1EA] hover:bg-[#C6975D]">Rating</button>
            </div>
            {items.map((item) => (
            <Sent key={item.id} item={item}/>
          ))}            
          </div>
  );
}