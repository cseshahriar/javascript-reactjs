import React, {useEffect} from 'react';
import {useState} from "react";

const Book = props => {
    console.log(props)

    return (
        <div>
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