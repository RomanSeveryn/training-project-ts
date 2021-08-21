import React, {FC, useState} from 'react';

const ExampleEvents: FC = () => {
    const [value, setValue] = useState<string>('')
    const [valueMause, setValueMause] = useState<number>(1)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
        console.log(e)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        setValueMause(e.clientY)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>InputForButton</button>
            {valueMause}
        </div>
    );
};

export default ExampleEvents;