"use client";

import {
  Button,
  Callout,
  Dialog,
  Flex,
  Text,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import BookTable from "../components/BookTable";

const Booklist = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [bookNumber, setBookNumber] = useState<string>("");

  const [bookEntries, setBookEntries] = useState<Array<any>>([]);
  const [error, setError] = useState("");

  function handleRemove(index: number) {
    const updatedEntries = [...bookEntries];
    updatedEntries.splice(index, 1);
    setBookEntries(updatedEntries);
  }

  const handleSubmit = async () => {
    try {
      await axios.post("/api/booklist", { title, author, bookNumber });
      router.push("/booklist");

      setBookEntries((prevEntries) => [
        ...prevEntries,
        { title, author, bookNumber },
      ]);

      // Clear input fields
      setTitle("");
      setAuthor("");
      setBookNumber("");
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
        <BookTable entries={bookEntries} onRemove={handleRemove} />
      </div>
    </>
  );
};

export default Booklist;
