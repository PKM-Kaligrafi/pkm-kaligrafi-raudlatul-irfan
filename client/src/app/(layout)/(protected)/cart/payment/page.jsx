"use client";

import React, { useEffect, useState } from "react";
import { isUserSignedIn } from "@/api/auth";
import { getAllData } from "@/api/apiClient";

export default function Payment() {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: reader.result, // Store the base64 string
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-center gap-10">
        <img
          src="/png/ornament.png"
          alt="Ornament"
          className="md-transform hidden scale-x-[-1] scale-y-[-1] md:block md:h-full md:w-72"
        />
        <div className="my-10 flex flex-col items-center justify-center md:mb-10 md:mt-0">
          <p className="font-ptserif text-4xl font-bold">Total</p>
          <p className="font-ptserif text-3xl font-normal">Rp. 1.000.000</p>
        </div>
        <img
          src="/png/ornament.png"
          alt="Ornament"
          className="hidden scale-y-[-1] md:block md:h-full md:w-72"
        />
      </div>

      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:justify-center">
        <div className="flex h-40 w-1/2 flex-col items-center justify-center gap-2 rounded-3xl bg-[#014E3E] md:h-60 md:w-1/3 md:gap-5">
          <p className="text-center font-ptserif font-bold text-white md:text-2xl">
            Bank Central Asia
          </p>
          <p className="text-center font-ptserif font-bold text-white md:text-3xl">
            1234567890
          </p>
          <p className="text-center font-ptserif font-light text-white md:text-lg">
            A. N. Nama Pemilik Transfer
          </p>
        </div>

        <div className="flex w-1/3 flex-col items-center justify-center gap-5 rounded-3xl md:gap-5 md:text-3xl">
          <label htmlFor="image" className="font-ptserif font-bold">
            Bukti Transfer
          </label>
          <input
            type="file"
            name="image"
            id="image"
            onChange={handleFileChange}
            className="rounded-lg border-2 border-dashed border-black md:text-xl"
          />
          <p className="w-80 items-center justify-center text-center text-xs text-gray-500">
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
          <button className="h-10 w-40 rounded-full border bg-[#E9B472] p-3 py-1 font-ptserif text-xs font-bold text-white hover:bg-[#C6975D] hover:text-white md:w-36 md:text-lg">
            Submit
          </button>
        </div>
      </div>

      <div className="mt-10 flex flex-row items-center justify-center gap-80">
        <img
          src="/png/ornament.png"
          alt="Ornament"
          className="md-transform hidden scale-x-[-1] md:block md:h-full md:w-72"
        />
        <img
          src="/png/ornament.png"
          alt="Ornament"
          className="hidden md:block md:h-full md:w-72"
        />
      </div>
    </div>
  );
}