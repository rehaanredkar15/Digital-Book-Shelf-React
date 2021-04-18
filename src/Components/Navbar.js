import React, { useContext } from "react";
import { BookContext } from "../context/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="navbar">
      <h1> Rehaan's Book Shelf</h1>{" "}
      <p>
        Currently you have {books.length}
        books to get through...Happy Reading{" "}
      </p>{" "}
    </div>
  );
};

export default Navbar;
