import React, {useEffect} from 'react';
import {useState} from "react";

const Book = (props) => {
    const [books, setBooks] = useState([
        {
            id: 1,
            bookName: 'book1',
            writer: 'Shahriar'
        },
        {
            id: 2,
            bookName: 'book2',
            writer: 'Shahriar Hosen'
        }
    ]);

    let changeBookState = () => {
        const newBooks = [
            {
                id: 1,
                bookName: 'book1',
                writer: 'Shahriar'
            },
            {
                id: 2,
                bookName: 'book2',
                writer: 'Shahriar Hosen'
            },
            {
                id: 3,
                bookName: 'book3',
                writer: 'Shahriar alam'
            },
        ]
        setBooks(newBooks);
    }
    return (
        <div className='box'>
            <h1>Book list</h1>
            {
                books && books.map((book) => {
                    return (
                        <div className='person' key={book.id}>
                            <h1>{book.bookName}</h1>
                            <p>{book.writer}</p>
                        </div>
                    );
                })
            }
            <button onClick={changeBookState}>Change State</button>
        </div>
    );
};

export default Book;