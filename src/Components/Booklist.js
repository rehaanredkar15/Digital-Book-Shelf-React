import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { read } from "fs";
import BookDetails from "./BookDetails";

export default function Booklist() {
  const { books } = useContext(BookContext);

  return books.length ? (
    <div className="book-list">
      <ul>
        {books.map((books) => {
          return <BookDetails books={books} key={books.id} />;
        })}
      </ul>
    </div>
  ) : (
    <div className="empty"> NO bOOks to read.Go ahead Add some </div>
  );
}
