
import React, { useState, useCallback , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setInput } from '../redux/action';

const Search = () => {

  const [username, setUsername] = useState("");
  
  const dispatch = useDispatch();

  function debounce(func, wait, immediate) {
    var timeout;
  
    return (...args) => {
      var context = this;
  
      var later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
  
      var callNow = immediate && !timeout;
  
      clearTimeout(timeout);
  
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  }


  useEffect(() => {
      verify(username);
  }, [username]);



  const verify = useCallback(
    debounce(name => {
      dispatch(setInput(name));
    }, 300),
    []
  );

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          data-testid = "input-text"
          onChange={(e) => setUsername(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search