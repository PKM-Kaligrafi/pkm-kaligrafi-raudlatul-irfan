"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import { getData, updateData } from "@/api/apiClient";
import { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import Link from "next/link";

export default function Content({ params }) {
  const [selectedItem, setSelectedItems] = useState([]);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getData("kaligraphyItem", params.uid);
        setSelectedItems(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const fetchUser = async () => {
      const user = await isUserSignedIn();
      if (!user) return;
      setUserId(user.uid);
    };

    fetchUser();

    fetchData();
  }, []);

  const addToCart = async () => {
    try {
      const response = await updateData(
        `users/${userId}/cart`,
        params.uid,
        selectedItem,
      );
      console.log("Item added to cart:", response.data);
      window.location.href = "/cart";
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="mainService" className="flex flex-col gap-8 py-12">
      {selectedItem ? (
        <div className="space-y-4 px-9 md:flex-1 md:px-6 md:py-0 xl:flex xl:space-x-6 xl:space-y-0">
          <div className="aspect-[16/11] rounded-2xl bg-[#092928] md:aspect-square md:flex-1 2xl:aspect-[16/11]">
            <img
              src={selectedItem.image}
              className="object-fit h-full w-full rounded-2xl shadow-xl"
            />
          </div>

          <div className="content-center space-y-10 p-9 md:flex-1 md:space-y-20">
            <div className="">
              <h2 className="font-ptserif text-3xl font-bold">
                {selectedItem.name}
              </h2>
              <p className="mb-7 font-ptserif text-lg">
                {selectedItem.description}
              </p>
            </div>
            <div className="flex flex-col items-center justify-center md:mt-5 md:items-start">
              <p className="my-3 text-center font-ptserif text-xl font-bold">
                Rp. {selectedItem.price}
              </p>
              {userId ? (
                <button
                  onClick={addToCart}
                  className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold shadow-xl hover:border-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]"
                >
                  Add to Cart
                </button>
              ) : (
                <Link
                  href="/login"
                  className="w-44 rounded-full border border-black py-1 font-ptserif text-lg font-bold shadow-xl hover:border-[#092928] hover:bg-[#092928] hover:text-[#FAF1EA]"
                >
                  Sign in to add to cart
                </Link>
              )}
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
