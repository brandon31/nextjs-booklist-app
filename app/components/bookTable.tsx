// import { Button, Table } from "@radix-ui/themes";
// import React from "react";

import { Table } from "@radix-ui/themes";

// interface props {
//   bookTitle: string;
//   bookAuthor: string;
//   bookDigits: string;
// }

// const BookTable = ({ bookTitle, bookAuthor, bookDigits }: props) => {
//   return (
//     <>
//       <Table.Root>
//         <Table.Header>
//           <Table.Row>
//             <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
//             <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
//             <Table.ColumnHeaderCell>ISBN#</Table.ColumnHeaderCell>
//             <Table.ColumnHeaderCell>Action</Table.ColumnHeaderCell>
//           </Table.Row>
//         </Table.Header>

//         <Table.Body>
//           <Table.Row>
//             <Table.RowHeaderCell>{bookTitle}</Table.RowHeaderCell>
//             <Table.Cell>{bookAuthor}</Table.Cell>
//             <Table.Cell>{bookDigits}</Table.Cell>
//             <Table.Cell>
//               <Button variant="solid" color="red">
//                 x
//               </Button>
//             </Table.Cell>
//           </Table.Row>
//         </Table.Body>
//       </Table.Root>
//     </>
//   );
// };

// export default BookTable;

interface BookEntry {
  title: string;
  author: string;
  bookNumber: string;
}

interface BookTableProps {
  entries: BookEntry[];
}

const BookTable = ({ entries }: BookTableProps) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Author</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>ISBN#</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {entries.map((entry, index) => (
          <Table.Row key={index}>
            <Table.Cell>{entry.title}</Table.Cell>
            <Table.Cell>{entry.author}</Table.Cell>
            <Table.Cell>{entry.bookNumber}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};

export default BookTable;
