import React, { useEffect } from 'react';
import '../stylesheets/Books.css';

const Book = props => {
    console.log(props)

    return (
        <div className='Book'>
            {
                props.data.map((book) => (
                    <div className='person' key={book.id}>
                        <h1>{book.bookName}</h1>
                        <p>{book.writer}</p>
                    </div>
                ))
            }
            <button onClick={props.change}>Change State</button>
        </div>

    );
};

export default Book;