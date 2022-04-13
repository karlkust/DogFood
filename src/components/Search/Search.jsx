import React, { useState } from 'react';
import './Search.css';
import srch from './img/ic-search.svg'
import close from './img/ic-close-input.svg'

const Search = ({searchText, searchHandler}) => {

    const [text, setText] = useState(searchText);
    const heandleInput = e => {
        setText(e.target.value);
        searchHandler(e.target.value);
    }

    return (
        <form className='search'>
            <input type='text' 
            placeholder='Поиск' 
            className={'search__input'} 
            value={text} 
            onInput={heandleInput} />

            <button className='search__btn'>
                {
                    text === '' ? <img src={srch} /> : <img src={close} />
                }
                
                
            </button>
        </form>
    )
}

export default Search
