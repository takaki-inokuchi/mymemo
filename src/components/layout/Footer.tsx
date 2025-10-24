import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" bottom-0 left-0 w-full bg-pink-300 border-white fixed bottom-0 left-0 w-full h-12 z-10">
      <div className="flex">
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ホーム
        </Link>
        <Link
          href="/memo"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          メモ
        </Link>
        <Link
          href="/goal"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          目標
        </Link>
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ログイン
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
