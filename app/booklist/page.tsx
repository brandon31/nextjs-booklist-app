"use client";

import {
  Button,
  Callout,
  Dialog,
  Flex,
  Table,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import bookTable from "../components/bookTable";

const Booklist = () => {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [bookNumber, setBookNumber] = useState<string>("");

  const [values, setValues] = useState<[]>([]);

  const [error, setError] = useState("");
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
      <div>
        <Dialog.Root>
          <Dialog.Trigger>
            <Button className="cursor-pointer mb-6">New Book</Button>
          </Dialog.Trigger>
          <Dialog.Content style={{ maxWidth: 450 }}>
            <Dialog.Title>Add new book</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Store your book locally.
            </Dialog.Description>

            <div className="flex flex-col space-y-3 max-w-xl">
              {error && (
                <Callout.Root color="red" className="mb-4">
                  <Callout.Text>An unexpected error occurred!</Callout.Text>
                </Callout.Root>
              )}
              <label>
                <Text as="div" size="2" className="mb-2 font-medium">
                  Title
                </Text>
                <TextField.Input
                  placeholder="Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label>
                <Text as="div" size="2" className="mb-2 font-medium">
                  Author
                </Text>
                <TextField.Input
                  placeholder="Author"
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </label>
              <label>
                <Text as="div" size="2" className="mb-2 font-medium">
                  ISBN#
                </Text>
                <TextField.Input
                  placeholder="ISBN#"
                  onChange={(e) => setBookNumber(e.target.value)}
                />
              </label>
            </div>

            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button variant="solid" color="red">
                  Cancel
                </Button>
              </Dialog.Close>
              <Button onClick={handleSubmit} type="submit">
                Add Book
              </Button>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
        <bookTable
          bookTitle={title}
          bookAuthor={author}
          bookDigits={bookNumber}
        />
      </div>
    </>
  );
};

export default Booklist;
