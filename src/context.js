import { useReducer } from "react/cjs/react.development";
import { createContext } from "react/cjs/react.production.min";

export const ThemeContext = createContext()

const INITIAL_STATE = { darkMode: false }

const themeReducer = (state, action)=>{
    switch (action.type) {
        case "TOGGLE":
            return {darkMode: !state.darkMode}    
        default:
            return state
    }
}

export const ThemeProvider = (props)=>{
    const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE)

    return (
        <ThemeContext.Provider value={{state, dispatch}}>{props.children}</ThemeContext.Provider>
    )
}