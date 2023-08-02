import React from 'react';

import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

export default function SearchArea() {
    return (
        <section className='searcharea'>
            <form className='searcharea__form'>
                <div className='searcharea__search'>
                    <input className='searcharea__input' type='text' id='searcharea-input' placeholder='Фильм' required></input>
                    <button className='searcharea__button' type='submit'>Найти</button>
                </div>
                <FilterCheckbox />
            </form>
        </section>
    )
} 