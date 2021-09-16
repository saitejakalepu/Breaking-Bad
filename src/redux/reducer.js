const initialState= {
    loading : true,
    data :[],
    input :'',
    error : ''
}

 export const reducer=(state=initialState, {type,payload})=>{
    switch(type)
    {
        
        case "SET_CHARACTERS" :
            return{
                ...state,
                loading : false,
                data : payload,
                error : ''
            }
        case "SET_INPUT":
            return{
                ...state,
                loading : false,
                input : payload,
            }
         case "SET_ERROR":
                return{
                    ...state,
                    loading : true,
                    error : payload,
                }
        default :
        return state
    }
}


