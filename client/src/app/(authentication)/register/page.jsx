"use client";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    phonenumber: "",
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative flex h-3/5 w-1/2 rounded-3xl bg-[#092928]">
      <div className="relative flex h-full w-1/2 flex-col justify-center rounded-l-3xl bg-white">
        <h1 className="text-center text-3xl font-bold">Register</h1>
        <form
          className="relative mt-8 flex w-full flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute aspect-square h-full rounded-l-full bg-[#D9D9D9]"></div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
            />
          </div>

          <button type="submit" className="rounded-full bg-[#E9B472] px-8 py-2">
            Register
          </button>
          <Link href="/login">Already Have an Account? Login Here!</Link>
        </form>
      </div>
    </div>
  );
}