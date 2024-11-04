"use client";

import React, { useEffect, useState } from "react";
import Item from "@/components/shop/Item";
import { isUserSignedIn } from "@/api/auth";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [uid, setUid] = useState("");

  useEffect(() => {
    console.log("isUserSignedIn", isUserSignedIn());
    const fetchCartData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const userResponse = await axios.get("http://localhost:3001/user", {
            headers: {
              Authorization: `${token}`,
            },
          });
          const userId = userResponse.data.user.uid;
          setUid(userId);

          const cartDataResponse = await axios.get(
            `http://localhost:3001/read/cart/${userId}`,
          );
          console.log("cartDataResponse", cartDataResponse);
          setCartItems(cartDataResponse.data);
        } catch (error) {
          console.error("Error fetching cart data:", error);
        }
      }
    };

    fetchCartData();
  }, []);

  return (
    <div className="flex flex-col py-12">
      <h1 className="text-center text-4xl font-bold">Cart</h1>
      <div className="mx-auto mt-12 flex w-1/3 flex-row justify-between rounded-full bg-[#092928] px-16 py-2 text-white">
        <h1 className="text-xl font-bold">Total</h1>
        <h1 className="text-xl font-bold">Rp. {total.toLocaleString()}</h1>
      </div>

      <div className="grid grid-cols-2 place-items-center gap-16 px-16 py-12 sm:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))]">
        {cartItems.length > 0 ? (
          cartItems.map((item, i) => (
            <Item
              key={item.item_id || i}
              image={item.image}
              name={item.item_name}
              price={item.price.toLocaleString()} // Ensure this is the correct format
            />
          ))
        ) : (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        )}
      </div>
    </div>
  );
}