import React,{useReducer} from 'react';


const reducer = (state,action) => {
    switch(action.type){
        case "GET_FACTURES" :
            return{...state,factures:action.payload }
        case "LOADING_TRUE" :  
            return{...state,loading:true }
        case "LOADING_FALSE" :  
            return{...state,loading:false }
        default :
            return state;
    }
}

const initialState={
    factures:[],
    loading:false
    
}

const Context = React.createContext({})


const Provider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState);
    const value ={state,dispatch};
    return (<Context.Provider value={value}>{children}</Context.Provider>)
}

export {Provider,Context}