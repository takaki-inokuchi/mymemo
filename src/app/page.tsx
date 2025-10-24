"use client"
import { useState } from "react"

export default function Home() {
    const [memo, setMemo] = useState("");

  return (
    <div className="py-4">
      {memo}
    </div>
  );
}
