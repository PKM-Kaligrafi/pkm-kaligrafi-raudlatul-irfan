"use client";
import React, { useEffect, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    no_telp: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3001/create/add-customer",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div class="font-ptserif">
      <div class="px-10 py-40">
        <div class="rounded-3xl justify-center items-center bg-[#FFFFFF] p-2 text-center shadow-xl">
          <div class="pt-12 text-xl font-bold">Login</div>
          <div class="pt-10">
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              class="box-border h-9 w-80 rounded-full border-2 border-black"
              placeholder="Username"
            />
          </div>
          <div class="py-5">
            <input
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
              class="box-border h-9 w-80 rounded-full border-2 border-black"
              placeholder="Password"
            />
          </div>
          <div class="flex items-center justify-center pt-4">
            <button class="h-9 w-20 rounded-3xl bg-[#E9B472]"
            onClick={handleSubmit}
            >Login</button>
          </div>
          <div class="flex items-center justify-center p-10">
            <div class="h-0.5 w-20 rounded-3xl bg-[#092928]"></div>
            <div class="px-8 font-semibold">Or</div>
            <div class="h-0.5 w-20 rounded-3xl bg-[#092928]"></div>
          </div>
          <div class="pb-20">
            <button
              type="button"
              class="box-border h-10 w-80 rounded-3xl border-2 border-black font-semibold"
            >
              Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
