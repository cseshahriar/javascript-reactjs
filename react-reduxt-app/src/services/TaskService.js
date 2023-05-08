import axios from "axios";

export const getTodosData = async () => {
    let data = [];
    await axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            data = response.data;
        })
    return data;
}