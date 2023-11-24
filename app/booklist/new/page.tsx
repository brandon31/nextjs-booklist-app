"use client";

import { Button, Callout, TextField } from "@radix-ui/themes";
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

  const [error, setError] = useState("");

  //   const [values, setValues] = useState<inputValues[]>([]);

  const router = useRouter();

  const handleSubmit = async () => {
    try {
      await axios.post("/api/booklist", { title, author, bookNumber });
      router.push("/booklist");
    } catch (error) {
      setError("An unexpexted error occurred");
    }
  };
  return (
    <>
      <div className="max-w-xl ">
        {error && (
          <Callout.Root color="red" className="mb-4">
            <Callout.Text>An unexpected error occurred!</Callout.Text>
          </Callout.Root>
        )}
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
      </div>
    </>
  );
};

export default NewBook;
