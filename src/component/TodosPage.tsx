import React, {useEffect, useState} from 'react';
import {ITodos} from "../types/types";
import axios from "axios";
import List from "./List";
import TodoItem from "./TodoItem";

const TodosPage = () => {
    const [todos, setTodos] = useState<ITodos[]>([])

    useEffect(() => {
        fetchTodos()
    }, [])


    async function fetchTodos() {
        try {
            const response = await axios.get<ITodos[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
            setTodos(response.data)
        } catch (e) {
            alert(e)
        }
    }
    return (
        <div>
            <List items={todos} renderItem={(todo:ITodos) => <TodoItem todo={todo} key={todo.id}/>}/>
        </div>
    );
}

export default TodosPage;