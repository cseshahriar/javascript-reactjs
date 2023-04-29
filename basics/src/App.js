import Book from "./components/Book";
import {Component} from "react";
import './App.css';;

class App extends Component{
    state = {
        books: [
            { id: 1, bookName: 'book1', writer: 'Shahriar'},
            {id: 2, bookName: 'book3', writer: 'Shahriar Hosen'},
            {id: 3, bookName: 'book3', writer: 'Shahriar Hosen'}
        ],
        text: '',
    }
    changeBookState = () => {
        this.setState({
            books: [
                { id: 1, bookName: 'book1 name change', writer: 'Shahriar'},
                {id: 2, bookName: 'book3', writer: 'Shahriar Hosen'},
                {id: 3, bookName: 'book3', writer: 'Shahriar Hosen'}
            ]
        })
    }

    changeInputWithState = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h3>State change with event and pass a method with props</h3>
                    <Book data={this.state.books} change={this.changeBookState} />

                    <h1>Input Change</h1>
                    <p>{ this.state.text }</p>
                    <input type='text' name='text' id='text' onChange={this.changeInputWithState} />
                </header>
            </div>
        );
    }
}

export default App;
