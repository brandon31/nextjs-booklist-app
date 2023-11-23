import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Booklist = () => {
  return (
    <>
      <div>
        <Button className="cursor-pointer">
          <Link href="/booklist/new">New Book</Link>
        </Button>
      </div>
    </>
  );
};

export default Booklist;
