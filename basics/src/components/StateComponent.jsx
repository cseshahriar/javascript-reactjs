import React, {Component} from 'react';
import PersonClass from "./PersonClass";

class StateComponent extends Component {
    state = {
        books: [
            {
                id: 1,
                bookName: 'boo1',
                writer: 'Shahriar'
            },
            {
                id: 2,
                bookName: 'boo2',
                writer: 'Shahriar Hosen'
            }
        ]
    }
    render() {
        return (
            <div>
                {
                    this.state.books.map((book) => {
                        return (
                            <div className='person' key={book.id}>
                                <h1>{book.bookName}</h1>
                                <p>{book.writer}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default StateComponent;