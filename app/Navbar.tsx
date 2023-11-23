import Link from "next/link";
import React from "react";
import { FaBookOpen } from "react-icons/fa";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Booklist", href: "/booklist" },
  ];
  return (
    <>
      <nav className="flex items-center mb-5 space-x-5 border-b h-14 px-5">
        <Link href="/" className="">
          <FaBookOpen />
        </Link>
        <ul className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-bold text-zinc-600 hover:text-zinc-900 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
