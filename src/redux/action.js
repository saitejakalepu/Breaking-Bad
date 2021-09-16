export const setCharacters =(response)=>{
    return {
      type:"SET_CHARACTERS",
      payload : response
    }
  }

  export const setInput =(text)=>{
    return {
      type:"SET_INPUT",
      payload : text
    }
  }

  export const setLoading =(value)=>{
    return {
      type:"SET_LOADING",
      payload : value
    }
  }

  export const setError =(msg)=>{
    return {
      type:"SET_ERROR",
      payload : msg
    }
  }
