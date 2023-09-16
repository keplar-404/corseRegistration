import React, { useState } from "react";

export default function Checkout({ cardsData }) {
  const { id ,creditRemain, courses, totalCredit, totalPrice } = cardsData;

  return (
    <>
      <section className="w-[20.5rem] bg-white rounded-[0.75rem] flex justify-center items-center">
        <div className="w-[17.5rem] py-[1.5rem]">
          <p className="text-[#2F80ED] text-[1.25rem] font-bold">
            Credit Hour Remaining <span>{creditRemain}</span> hr
          </p>
          <hr className="mt-4 w-full h-[2px] bg-gray-400" />
          <div className="flex flex-col gap-y-4 mt-4">
            <p className="text-[1.25rem] font-bold">Course Name</p>
            <div className="mt-[0.31rem]">
              {courses.map((data, index) => (
                <p
                  key={data}
                  className="leading-[1.875rem] text-[1rem] text-gray-500"
                >
                {index + 1}  {data}
                </p>
              ))}
            </div>
            <hr className="mt-[0.5rem] w-full h-[2px] bg-gray-400" />
            <p className="text-[1rem] font-medium text-black opacity-[80%]">
              Total Credit Hour : <span>{totalCredit}</span>
            </p>
            <hr className="w-full h-[2px] bg-gray-400" />
            <p className="text-[1rem] font-semibold text-black opacity-[80%]">
              Total Price : <span>{totalPrice}</span> USD
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
