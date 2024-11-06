"use client";
import React, { useEffect, useState } from "react";
import { getAllData } from "@/api/apiClient";

export default function Rating() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const kaligraphyItemsResponse = await getAllData("kaligraphyItem");
        const kaligraphyItems = kaligraphyItemsResponse.data;

        const allReviews = [];

        for (const kaligraphyItem of kaligraphyItems) {
          const kaligraphyItemId = kaligraphyItem.id;
          const cartDataResponse = await getAllData(`review/${kaligraphyItemId}`);

          const kaligraphyItemReviews = cartDataResponse.data.map(review => ({
            kaligraphyItemId: kaligraphyItemId,
            reviewId: review.id,
            ...review
          }));

          allReviews.push(...kaligraphyItemReviews);
        }

        setReviews(allReviews);
      } catch (error) {
        console.error("Error fetching kaligraphy item reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <>
      <div className="py-12" id="mainAdminRating">
        <section>
          <div className="flex flex-col items-center gap-5">
            <h1 className="item-center justify-center font-ptserif text-2xl font-black">
              Customer Ratings
            </h1>

            <div className="overflow-x-auto rounded-lg shadow-md">
              <table className="w-full text-left font-ptserif text-sm tracking-wide text-[#FAF1EA]">
                <thead className="bg-[#014E3E] text-xs uppercase text-[#FAF1EA]">
                  <tr>
                    <th scope="col" className="p-4"></th>
                    <th scope="col" className="px-6 py-3">
                      Nama
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Item
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Review
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Rating
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {reviews.map((review) => (
                    <tr
                      key={review.id}
                      className="border-b bg-[#FAF1EA] dark:border-gray-700 dark:hover:bg-[#CBC7C4]"
                    >
                      <td className="w-4 p-4">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            id={`checkbox-table-search-${review.id}`}
                            className="h-5 w-5"
                          />
                        </div>
                      </td>
                      <th
                        scope="row"
                        className="whitespace-nowrap px-6 py-4 font-medium text-[#092928]"
                      >
                        {review.customer_name}
                      </th>
                      <td className="px-6 py-4 text-[#092928]">
                        {review.item_name}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">
                        {review.review}
                      </td>
                      <td className="px-6 py-4 text-[#092928]">
                        {review.rating}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
