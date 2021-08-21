import React, {FC} from 'react';
import {ITodos} from "../types/types";

interface PropsTodoItem {
    todo: ITodos
}
const TodoItem: FC<PropsTodoItem> = ({todo}) => {
    return (
        <div>
            <input type='checkbox' checked={todo.completed}/>
            {todo.id} {todo.title}
        </div>
    );
};

export default TodoItem;