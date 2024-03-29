import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function BookLayout() {
  return (
    <div>
      <h1>BooksLayout</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to="/books/new">New book</Link>

      <Outlet/>
    </div>
  );
}

export default BookLayout