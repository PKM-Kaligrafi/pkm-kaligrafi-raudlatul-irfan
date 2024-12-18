"use client";
import { useState } from "react";
import { loginUser } from "@/api/apiClient";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const router = useRouter();
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await loginUser(formData);
      setSuccessMessage(response.data.message);
      localStorage.setItem("token", response.data.token);
      router.push("/");
    } catch (error) {
      setError(
        error.response?.data?.message ||
          "Something went wrong. Please try again.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative flex h-3/5 w-4/5 justify-end rounded-3xl bg-[#092928] lg:w-2/3 2xl:w-1/2">
      <img
        src="/webp/allCaligraphyRight.webp"
        alt="Login"
        className="hidden h-full w-1/2 rounded-l-3xl object-cover md:flex"
      />
      <div className="relative flex h-full w-full flex-col justify-center rounded-3xl bg-white md:w-1/2 md:rounded-l-none md:rounded-r-3xl">
        <h1 className="text-center text-3xl font-bold">Login</h1>
        <form
          className="relative mt-8 flex w-full flex-col items-center justify-center gap-4"
          onSubmit={handleSubmit}
        >
          {error && <p className="text-red-500">{error}</p>}
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute flex aspect-square h-full items-center justify-center rounded-l-full bg-[#D9D9D9]">
              <Image
                src="/svg/icon/email-black.svg"
                width={50}
                height={50}
                className="w-6"
                alt="Email Icon"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
              id="email"
              aria-label="Email address"
              placeholder="Email"
            />
          </div>
          <div className="relative w-4/5 rounded-full border-2 border-black">
            <div className="absolute flex aspect-square h-full items-center justify-center rounded-l-full bg-[#D9D9D9]">
              <Image
                src="/svg/icon/password.svg"
                width={50}
                height={50}
                className="w-6"
              />
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-full px-2 py-1 pl-10"
              id="password"
              aria-label="Password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className={`rounded-full ${isLoading ? "bg-gray-400" : "bg-[#E9B472]"} px-8 py-2`}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <Link href="/register" className="hover:text-[#C6975D]">
            Don't Have an Account? Register Here!
          </Link>
        </form>
      </div>
    </div>
  );
}
