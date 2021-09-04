

 export const charReducer=(state=[], {type,payload})=>{
    switch(type)
    {
        case "SET_CHARACTERS" : 
        return payload
        default :
        return state
    }
}


export const inputReducer=(state="", {type,payload})=>{
    switch(type)
    {
        case "SET_INPUT" : 
        return payload
        default :
        return state
    }
}


export const loadingReducer=(state=true, {type,payload})=>{
    switch(type)
    {
        case "LOADING" : 
        return false
        default :
        return state
    }
}