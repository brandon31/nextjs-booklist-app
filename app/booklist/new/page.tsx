"use client";

import { Button, TextField } from "@radix-ui/themes";
import React from "react";

const NewBook = () => {
  return (
    <>
      <div className="max-w-xl space-y-3">
        <TextField.Root>
          <TextField.Input placeholder="Title" />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder="Author" />
        </TextField.Root>
        <TextField.Root>
          <TextField.Input placeholder="ISBN#" />
        </TextField.Root>
        <Button>Add Book</Button>
      </div>
    </>
  );
};

export default NewBook;
