"use client";

import { Button, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Link from "next/link";

// type inputValues = {
//   title: string;
//   author: string;
//   bookNumber: string;
// };

const NewBook = () => {
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [bookNumber, setBookNumber] = useState<string>("");

  //   const [values, setValues] = useState<inputValues[]>([]);

  const router = useRouter();

  const handleSubmit = async () => {
    await axios.post("/api/booklist", { title, author, bookNumber });
    router.push("/booklist");
  };
  return (
    <>
      <div className="max-w-xl space-y-3">
        <h1 className="text-2xl">New Book</h1>
        <p className="">Store your book locally.</p>
        <TextField.Root>
          <TextField.Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            placeholder="Author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input
            placeholder="ISBN#"
            onChange={(e) => setBookNumber(e.target.value)}
          />
        </TextField.Root>
        <div className="space-x-2 flex justify-end">
          <Button onClick={handleSubmit}>Add Book</Button>
          <Button>
            <Link href="..">Cancel</Link>
          </Button>
        </div>
      </div>
    </>
  );
};

export default NewBook;
