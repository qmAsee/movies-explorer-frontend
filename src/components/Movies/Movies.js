import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

import { useLocation } from 'react-router-dom';

export default function Movies() {

    const location = useLocation();

    return (
        <section className='movies'>
            {
            location.pathname === '/saved-movies' &&
            <ul className='movies__list' style={{'marginBottom': '90px'}}>
                <MoviesCard />
                <MoviesCard />
            </ul>
            }
            
            {
            location.pathname ==='/movies' && 
            <>
                <ul className='movies__list'>
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
                    <MoviesCard />
          
                 
                </ul>
                <button type='button' className='movies__more'>
                    Ещё
                </button>
            </>
            }
        </section>
    )
}