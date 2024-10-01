"use client";
import React, { useEffect, useState } from "react";

const ProfileEdit = () => {
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    no_telp: "",
    address: "",
  });

  // Mengambil data pengguna dari server
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/customer");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("Fetched data:", data); // Tambahkan log untuk cek data
        setUserData(data); // Pastikan data yang di-set sesuai dengan state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProfile();
  }, []);

  // Menangani perubahan input
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // Mengirimkan data yang telah diperbarui ke server
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/customer", {
        method: "PUT", // Menggunakan PUT untuk memperbarui data
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Updated data:", data); // Log hasil submit
      alert("Data berhasil diperbarui!");
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Terjadi kesalahan saat memperbarui data.");
    }
  };

  return (
    <div className="mx-6 flex flex-col font-ptserif md:mx-28 md:gap-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-16 md:flex-row md:items-center md:gap-32"
      >
        <div className="flex justify-center">
          <div className="flex h-48 w-48 items-end justify-end rounded-[3rem] bg-[#014E3E] md:h-80 md:w-80">
            <div className="absolute h-16 w-16 translate-x-5 translate-y-5 rounded-full bg-[#E9B472] md:h-24 md:w-24"></div>
          </div>
        </div>
        <div className="justify-center">
          <div className="flex justify-center gap-10 text-lg md:gap-20 md:text-2xl">
            <div className="flex flex-col gap-8">
              <div className="font-semibold">Username</div>
              <div className="font-semibold">Email</div>
              <div className="font-semibold">No Phone</div>
              <div className="font-semibold">Address</div>
            </div>
            <div className="flex flex-col gap-8 pr-6">
              <input
                type="text"
                name="username"
                value={userData.username}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="text"
                name="no_phone"
                value={userData.no_phone}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
              <input
                type="text"
                name="address"
                value={userData.address}
                onChange={handleChange}
                className="flex border-b-2 border-[#C1C1C1] bg-[#FAF1EA]"
                required
              />
            </div>
          </div>
          <div className="mt-16 flex justify-center md:absolute md:my-20 md:justify-center md:text-2xl">
            <button
              type="submit"
              className="rounded-full border-[0.1rem] border-black px-8 md:h-12"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
