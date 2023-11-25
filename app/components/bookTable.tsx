import { Button, Table } from "@radix-ui/themes";
import React from "react";

interface props {
  bookTitle: string;
  bookAuthor: string;
  bookDigits: string;
}

const bookTable = ({ bookTitle, bookAuthor, bookDigits }: props) => {
  return (
    <>
      <Table.Root>
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>ISBN#</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.RowHeaderCell>{bookTitle}</Table.RowHeaderCell>
            <Table.Cell>{bookAuthor}</Table.Cell>
            <Table.Cell>{bookDigits}</Table.Cell>
            <Table.Cell>
              <Button variant="solid" color="red">
                x
              </Button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </>
  );
};

export default bookTable;
