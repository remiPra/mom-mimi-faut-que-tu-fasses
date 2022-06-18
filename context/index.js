import React,{useReducer} from 'react';


const reducer = (state,action) => {
    switch(action.type){
        case "GET_FACTURES" :
            return{...state,factures:action.payload }
        default :
            return state;
    }
}

const initialState={
    factures:[],
    
}

const Context = React.createContext({})


const Provider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const value ={state,dispatch};
    return (<Context.Provider value={value}>{children}</Context.Provider>)
}

export {Provider,Context}