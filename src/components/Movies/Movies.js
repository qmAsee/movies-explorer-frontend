import React from 'react';

import MoviesCard from '../MoviesCard/MoviesCard';

export default function Movies() {
    return (
        <section className='movies'>
            <ul className='movies__list'>
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
                <MoviesCard />
            </ul>
            <button type='button' className='movies__more'>
                Ещё
            </button>
        </section>
    )
}