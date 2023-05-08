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

export const createTodoData = async (todo) => {
    await axios.post("http://127.0.0.1:8000/api/todos/", todo)
        .then(response => {
            console.log('crete todo', response.data)
            return response.data;
        })
        .catch(err=> {return err.message});
}