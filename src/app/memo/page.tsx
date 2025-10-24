"use client";
import React, { useState } from "react";

const page = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex">
      <div className="h-screen w-screen flex flex-col">
        <textarea
          className="flex-1 w-full h-full p-4 border-none outline-none resize-none"
          placeholder="メモを入力"
        />
      </div>
    </div>
  );
};

export default page;
