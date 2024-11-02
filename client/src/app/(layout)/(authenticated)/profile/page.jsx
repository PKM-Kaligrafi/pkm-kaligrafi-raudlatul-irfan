"use client";
import React, { useState } from "react";

const Profile = () => {
  // Hardcoded user data
  const [userData, setUserData] = useState({
    username: "Oshinobu",
    email: "Oshinobu@gmail.com",
    no_phone: "08123456789",
    address: "Universitas Multimedia Nusantara, Gading Serpong",
  });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you would handle the form submission logic
    console.log("Form Submitted:", userData);
  };

  return (
    <>
      <div className="mx-6 flex flex-col gap-10 py-12 font-ptserif md:justify-center md:px-5 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10 lg:gap-14">
          <div className="flex flex-row justify-center gap-2 md:flex-col md:gap-5">
            <div className="aspect-square w-48 min-w-48 rounded-3xl bg-[#014E3E] md:w-64">
              {/* Profile Picture */}
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-5 md:hidden md:w-0">
              <div className="flex flex-row justify-center gap-6">
                <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
                <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
              </div>
              <button className="rounded-full border border-black px-10 py-1 md:text-2xl">
                Edit
              </button>
            </div>
            <div className="hidden flex-row justify-center gap-10 md:relative md:bottom-0 md:flex">
              <div className="h-10 w-10 rounded-full bg-[#E9B472] md:h-14 md:w-14"></div>
              <div className="h-10 w-10 rounded-full bg-[#092928] md:h-14 md:w-14"></div>
            </div>
          </div>
          <div className="relative w-full gap-14">
            <div className="flex gap-10 md:items-center md:text-2xl">
              <div className="flex flex-col justify-center gap-8 py-5 md:py-5">
                <div className="text-lg font-semibold md:text-2xl">
                  Username
                </div>
                <div className="text-lg font-semibold md:text-2xl">Email</div>
                <div className="text-lg font-semibold md:text-2xl">
                  No Phone
                </div>
                <div className="text-lg font-semibold md:text-2xl">Address</div>
              </div>

              <div className="flex flex-col gap-5 border-l-2 border-black py-8 ps-8 md:py-5 md:ps-12">
                <div className="md:text-xl">{userData.username}</div>
                <div className="md:text-xl">{userData.email}</div>
                <div className="md:text-xl">{userData.no_phone}</div>
                <div className="md:text-xl">{userData.address}</div>
              </div>
            </div>
            <div className="md:flex md:pt-5">
              <div className="hidden justify-center md:flex md:justify-center md:text-2xl">
                <button className="rounded-full border border-black px-10 md:h-12">
                  Edit
                </button>
              </div>
              <div className="bottom-0 right-0 hidden justify-between md:absolute md:flex md:w-56">
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                  Order
                </button>
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                  Sent
                </button>
                <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
                  Rating
                </button>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-5 md:hidden md:w-56">
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Order</button>
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">Sent</button>
            <button className="h-14 w-14 rounded-xl bg-[#E9B472]">
              Rating
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;