"use client";
import { useState, FormEvent } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const [inputValue, setInputValue] = useState("");

  const {push} = useRouter();
  const handleSubmit = (event: FormEvent) => {
      event.preventDefault();
      push(`/prediction/${inputValue}`);
  };
  return (
     <div className = "min-h-screen flex items-center justify-center bg-gray-100">
      <div className = "p-4 shadow-md bg-white rounded-md">
        <h1 className="text-2xl font-semibold mb-4 text-black">
          Enter Your Name</h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input 
          type="text"
          placeholder="Type your name..."
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          className="w-full p-2 border border-gray-300 rounded text-black"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        >
          Submit
        </button>
      </form>
     </div>
  );
}
