import React from 'react';
import { useLocation } from 'react-router-dom';

import MoviePicture from '../../images/MoviePicture.png'

export default function MoviesCard() {
    const [saveMovie, setSaveMovie] = React.useState(false)
    const location = useLocation();

    const toggleSaveMovie = () => {
        setSaveMovie(!saveMovie)
    }

    return (
        <>
            <li className='movie'>
                <img className='movie__picture' src={MoviePicture} alt='постер'></img>
                <div className='movie__info'>
                    <div className='movie__description'>
                        <h2 className='movie__name'>33 слова о дизайне</h2>
                        <span className='movie__duration'>1ч42м</span>
                    </div>
                    <button onClick={toggleSaveMovie} className={location.pathname === '/saved-movies' ? 'movie__save_delete' : !saveMovie ? 'movie__save' : 'movie__save movie__save_saved'}></button>
                </div>
            </li>
        </>
    )
}