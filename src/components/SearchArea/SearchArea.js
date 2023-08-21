import { useState, useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import { useLocation } from 'react-router-dom';

export default function SearchArea({ isShort, onSearch, onFilter }) {

    const location = useLocation()
    const [query, setQuery] = useState('')
    const [isErrorQuery, setIsErrorQuery] = useState(false);

    useEffect(() => {
        if (location.pathname === '/movies' && localStorage.getItem('movie-query')) {
            const userMovieQuery = localStorage.getItem('movie-query');
            setQuery(userMovieQuery);
        }
    }, [location]);

    function handleQuery(evt) { 
        setQuery(evt.target.value)
    }

    function handleSubmitQuery(evt) {
        evt.preventDefault();

        if (query.trim().length === 0) {
            setIsErrorQuery(true);
        } else {
            setIsErrorQuery(false);
            onSearch(query)
        }
    }

    return (
        <div className='searcharea'>
            <form className='searcharea__form' onSubmit={handleSubmitQuery}>
                <div className='searcharea__search'>
                    <input className='searcharea__input' name='query' type='text' id='searcharea-input' placeholder='Фильм' onChange={handleQuery} value={query || ''} ></input>
                    <button className='searcharea__button' type='submit'>Найти</button>
                </div>
                {isErrorQuery && <span className='searcharea__error'>Введите запрос</span>}
                <FilterCheckbox isShort={isShort} onFilter={onFilter} />
            </form>
        </div>
    )
} 