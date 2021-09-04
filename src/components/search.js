
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setInput } from '../redux/action';

const Search = () => {
  
  const dispatch = useDispatch();
  const onChange = (q) => {
    dispatch(setInput(q));
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search characters'
          
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  )
}

export default Search