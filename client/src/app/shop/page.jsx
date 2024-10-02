"use client";
import React, { useEffect, useState } from "react";
import SearchBar from "@/components/search-bar/SearchBar";
import ShopCard from "@/components/shop/ShopCard";

export default function Shop(key) {
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
    <div className="flex flex-col">
      <SearchBar />
      <div className="mx-3 mt-8 grid grid-cols-2 place-items-center gap-4 md:grid-cols-3 md:gap-8 lg:grid-cols-4">
        {items.map((item) => (
          <ShopCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
