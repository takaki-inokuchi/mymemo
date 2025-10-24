import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-pink-300 border-white">
      <div className="flex">
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ホーム
        </Link>
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ホーム
        </Link>
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ホーム
        </Link>
        <Link
          href="/"
          className="flex-1 text-center py-3 border-r border-white text-white"
        >
          ホーム
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
