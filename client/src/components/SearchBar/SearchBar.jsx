import React , { useState } from 'react'
import { getByName } from '../../Redux/actions';
import { useDispatch } from 'react-redux'
import style from './SearchBar.module.css'

function SearchBar () {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleClick = () => {
        dispatch(getByName(input))
        setInput("")
    }
  return (
    <div>
        <input className={style.input} value={input} onChange={handleInput}  type="text" placeholder="Search..."/>
        <button className={style.button} onClick={handleClick} type="submit">Search</button>
    </div>
  )
}

export default SearchBar