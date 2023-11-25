"use client";

import { Button, Callout, TextField, Text } from "@radix-ui/themes";
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
  return (
    <>
      <div className="max-w-xl ">
        <div className="max-w-xl space-y-3">
          <Text as="label" size="7">
            New Book
          </Text>
          <Text as="p" size="2" className="px-1" color="gray">
            Store your book locally.
          </Text>
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
