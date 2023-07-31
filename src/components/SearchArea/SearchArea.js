import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchArea() {
    return (
        <section className='searcharea'>
            <form className='searcharea__form'>
                <input className='searcharea__input' type='text' id='searcharea-input' placeholder='Фильм'></input>
                <button className='searcharea__button' type='submit'>Найти</button>
            </form>
            <FilterCheckbox />
        </section>
    )
} 