import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useValue = () => {
    const [todos, setTodos] = useState({ myPokemon: [] })

    useEffect(() => {
        const data = AsyncStorage.getItem("MY-P");
        const { myPokemon } = data;
        setTodos({ myPokemon: myPokemon ? myPokemon : [] });
    }, [])

    return {
        todos,
        setTodos
    }
}

export const TodoContext = React.createContext()

export const TodoProvider = (props) => {
    return (
        <TodoContext.Provider value={useValue()}>
            {props.children}
        </TodoContext.Provider>
    )
}