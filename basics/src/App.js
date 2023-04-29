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
        const headerStyle = {
            border: "2px solid green",
            borderRadius: "5px",
            backgroundColor: "#0000FF",
            color: "white",
            padding: '10px'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <h3 style={headerStyle}>State change with event and pass a method with props</h3>
                    <Book data={this.state.books} change={this.changeBookState} />

                    <h3>Input Change</h3>
                    <p>{ this.state.text }</p>
                    <input type='text' name='text' id='text' onChange={this.changeInputWithState} />
                </header>
            </div>
        );
    }
}

export default App;
