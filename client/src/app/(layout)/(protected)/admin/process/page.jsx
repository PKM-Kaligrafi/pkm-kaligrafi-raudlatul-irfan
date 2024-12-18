"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getAllData, deleteData, updateData } from "@/api/apiClient";
import SideBar from "@/components/admin/SideBar";

export default function Process() {
  const [process, setProcess] = useState([]);

  useEffect(() => {
    const fetchProcess = async () => {
      try {
        const usersResponse = await getAllData("users");
        const users = usersResponse.data;

        const allProcess = [];

        for (const user of users) {
          const userId = user.id;
          const processDataResponse = await getAllData(
            "users/" + userId + "/process",
          );

          const userProcess = processDataResponse.data.map((process) => ({
            ...process,
          }));

          allProcess.push(...userProcess);
        }
        console.log("userProcess:", allProcess);

        setProcess(allProcess);
      } catch (error) {
        console.error("Error fetching users with process:", error);
      }
    };

    fetchProcess();
  }, []);

  const handleDelete = async (processId, userId) => {
    try {
      console.log(`Deleting processId: ${processId} for userId: ${userId}`);
      await deleteData(`users/${userId}/process`, processId);
      console.log("Process deleted successfully");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const updateProcessData = async (item, status) => {
    try {
      const { id, ...processWithoutId } = item;
      const updatedProcess = {
        ...processWithoutId,
        status,
      };
      await updateData(`users/${item.user_id}/process`, id, updatedProcess);
    } catch (error) {
      console.error("Error updating process data:", error);
    }
  };

  const handleStatusChange = (item, status) => {
    setProcess((prevProcess) => {
      const updatedProcess = prevProcess.map((i) =>
        i.id === item.id ? { ...i, status } : i,
      );
      try {
        updateProcessData(item, status);
      } catch (error) {
        console.error("Error updating status:", error);
      }
      return updatedProcess;
    });
  };

  return (
    <>
      <SideBar />
      <div className="py-12" id="mainAdminOrder">
        <section>
          <div className="sm:ml-48">
            <div className="flex flex-col items-center gap-5">
              <h1 className="item-center justify-center font-ptserif text-2xl font-black">
                Order Process
              </h1>

              <div className="w-3/5 overflow-x-scroll rounded-lg shadow-md 2xl:overflow-hidden">
                <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
                  <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        NAME
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ITEM
                      </th>

                      <th scope="col" className="px-6 py-3">
                        ADDRESS
                      </th>

                      <th scope="col" className="px-6 py-3">
                        PRICE
                      </th>
                      <th scope="col" className="px-6 py-3">
                        STATUS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        ACTION
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {process.length === 0 ? (
                      <tr>
                        <td colSpan="9" className="p-4 text-center text-black">
                          No process found
                        </td>
                      </tr>
                    ) : (
                      process.map((item, i) => (
                        <tr
                          key={i}
                          className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]"
                        >
                          <th
                            scope="row"
                            className="whitespace-nowrap px-6 py-4 font-medium text-[#092928]"
                          >
                            {item.user_name}
                          </th>
                          <td className="px-6 py-4 text-[#092928]">
                            {item.item_name}
                          </td>

                          <td className="px-6 py-4 text-[#092928]">
                            {item.user_address}
                          </td>

                          <td className="px-6 py-4 text-[#092928]">
                            {item.item_price}
                          </td>
                          <td className="px-6 py-4 text-[#092928]">
                            {item.status}
                          </td>
                          <td className="flex items-center gap-3 px-6 py-4 text-[#092928]">
                            <select
                              className="rounded-md bg-[#014E3E] p-2 text-[#FAF1EA]"
                              value={item.status}
                              onChange={(e) =>
                                handleStatusChange(item, e.target.value)
                              }
                            >
                              <option value="Pending">Pending</option>
                              <option value="Processing">Processing</option>
                              <option value="Shipped">Shipped</option>
                              <option value="Delivered">Delivered</option>
                            </select>
                            <Image
                              onClick={() =>
                                handleDelete(item.id, item.user_id)
                              }
                              src={`/svg/icon/delete.svg`}
                              alt="delete"
                              className="cursor-pointer"
                              width={25}
                              height={25}
                            />
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
