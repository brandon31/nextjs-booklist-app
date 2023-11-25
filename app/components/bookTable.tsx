import { Button, Table } from "@radix-ui/themes";
import { MdDelete } from "react-icons/md";

interface BookEntry {
  title: string;
  author: string;
  bookNumber: string;
}

interface BookTableProps {
  entries: BookEntry[];
  onRemove: (index: number) => void;
}

const BookTable = ({ entries, onRemove }: BookTableProps) => {
  return (
    <Table.Root className="mt-5">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ISBN#</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {entries.map((entry, index) => (
          <Table.Row key={index}>
            <Table.Cell>{entry.title}</Table.Cell>
            <Table.Cell>{entry.author}</Table.Cell>
            <Table.Cell>{entry.bookNumber}</Table.Cell>
            <Table.Cell>
              <Button
                variant="soft"
                color="red"
                onClick={() => onRemove(index)}
              >
                <MdDelete />
              </Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default BookTable;
