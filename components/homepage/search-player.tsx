"use client"
import React, { FormEvent } from "react";

function SearchPlayerInHomePage() {
  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form
      onSubmit={handleSearch}
      className="bg-blur-white backdrop-blur-md 
      flex flex-col lg:rounded-xl"
    >
      <h1 className="p-6 text-center text-3xl uppercase font-semibold text-black">
        Tìm thông tin người chơi
      </h1>
      <input
        placeholder="Enter Username"
        type="text"
        className="bg-[#4f4b4b6e] uppercase placeholder-white text-center h-16 text-2xl text-white outline-none"
      />
      <div className="flex items-center justify-center p-6">
        <button type="submit" className="bg-sky-600 hover:scale-105 hover:bg-sky-400 duration-500 uppercase w-[180px] 
        h-[52px] rounded-full text-white font-bold text-lg">
          Tìm kiếm
        </button>
      </div>
    </form>
  );
}

export default SearchPlayerInHomePage;
