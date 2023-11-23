"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { FaBookOpen } from "react-icons/fa";
import classnames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

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
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                "hover:text-zinc-700 font-500 transition-colors": true,
              })}
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
