"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getData } from "@/api/apiClient";
import { isUserSignedIn } from "@/api/auth";

const Profile = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      const user = await isUserSignedIn();

      if (user) {
        const userDataResponse = await getData("users", user.uid);
        const userData = userDataResponse.data;

        setUserData({
          ...userData,
          email: user.email,
        });
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="mx-6 flex flex-col gap-10 py-12 font-ptserif md:justify-center md:px-5 lg:px-8">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
        <div className="relative w-full gap-14">
          <div className="flex gap-10 md:items-center md:text-2xl">
            <div className="flex flex-col justify-center gap-8 py-5 md:py-5">
              <div className="text-lg font-semibold md:text-2xl">Username</div>
              <div className="text-lg font-semibold md:text-2xl">Email</div>
              <div className="text-lg font-semibold md:text-2xl">No Phone</div>
              <div className="text-lg font-semibold md:text-2xl">Address</div>
            </div>
            <div className="flex flex-col gap-6 border-l-2 border-black py-8 ps-8 md:py-5 md:ps-12">
              <div className="md:text-xl">{userData.username}</div>
              <div className="md:text-xl">{userData.email}</div>
              <div className="md:text-xl">{userData.phoneNumber}</div>
              <div className="md:text-xl">{userData.address}</div>
            </div>
          </div>
          <div className="md:flex md:pt-5">
            {/* <div className="hidden justify-center md:flex md:justify-center md:text-2xl">
              <button className="rounded-full border border-black px-10 shadow-lg md:h-12 dark:shadow-gray-400">
                <Link href="/profile/edit">Edit</Link>
              </button>
            </div> */}
            <div className="bottom-0 right-0 hidden justify-end gap-10 md:absolute md:flex md:w-56">
              <Link href="/profile/order">
                <button className="h-14 w-14 rounded-xl bg-[#E9B472] shadow-lg dark:shadow-gray-400">
                  Order
                </button>
              </Link>
              <Link href="/profile/sent">
                <button className="h-14 w-14 rounded-xl bg-[#E9B472] shadow-lg dark:shadow-gray-400">
                  Sent
                </button>
              </Link>
            </div>
          </div>
          <div className="my-10 flex items-center justify-center gap-5 md:mt-0 md:justify-start">
            <Link
              href="/profile/edit"
              className="h-12 rounded-full border border-black px-10 py-1 shadow-lg md:text-2xl dark:shadow-gray-400"
            >
              Edit
            </Link>
            <Link href="/cart">
              <div className="h-10 w-10 rounded-full bg-[#092928] shadow-lg dark:shadow-gray-400">
                <img
                  src="/svg/icon/cart.svg"
                  width={100}
                  height={100}
                  className="w-full p-2"
                  alt="Cart"
                />
              </div>
            </Link>
          </div>
        </div>
        <div className="flex justify-center gap-10 md:hidden md:w-56">
          <Link href="/profile/order">
            <button className="h-14 w-14 rounded-xl bg-[#E9B472] shadow-lg dark:shadow-gray-400">
              Order
            </button>
          </Link>
          <Link href="/profile/sent">
            <button className="h-14 w-14 rounded-xl bg-[#E9B472] shadow-lg dark:shadow-gray-400">
              Sent
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
