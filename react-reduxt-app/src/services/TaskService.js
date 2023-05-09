import axios from "axios";


export const getTodoData = async () => {
    let data = [];
    await axios.get("http://127.0.0.1:8000/api/todos/")
        .then(response => {
            data = response.data;
        })
        .catch(err=> console.log(err))
    return data;
}

{/**
 * Stone New Todo Data to database
 * @param { Object } todoData
 */
 }
export const storeTodoData = async (todo) => {
    let isAdded = false;
    await axios.post("http://127.0.0.1:8000/api/todos/", todo)
        .then(response => {
            isAdded = response.data;
        })
        .catch(err=> {return err.message});
    return isAdded;
}