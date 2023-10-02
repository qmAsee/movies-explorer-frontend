import { useState } from 'react';

import { convertDuration } from '../../utils/utils';
import { BASE_URL } from '../../utils/constanst';

export default function MoviesCard({ card, onSaveCard, onDeleteCard, savedCards, saved, isSavedCard }) {
    const [saveMovie, setSaveMovie] = useState(false)

    function onCardSave() {

        if (saved) {
            onDeleteCard(savedCards.filter((movieCard) => movieCard.movieId === card.id)[0]);
            setSaveMovie(false);
        } else {
            onSaveCard(card)
            setSaveMovie(true)

        }
    }

    function onCardDelete() {
        onDeleteCard(card)
    }

    return (
        <>
            <li className='movie'>

                <a href={card.trailerLink} className='movie__link' target="_blank" rel='noreferrer'>
                    <img className='movie__picture' src={isSavedCard ? card.image : `${BASE_URL}${card.image.url}`} alt={card.nameRU}></img>
                </a>

                <div className='movie__info'>
                    <div className='movie__description'>
                        <h2 className='movie__name'>{card.nameRU}</h2>
                        <span className='movie__duration'>{convertDuration(card.duration)}</span>
                    </div>
                    {
                        !isSavedCard &&
                        <button
                            type='button'
                            className={saved ? 'movie__save movie__save_saved' : !saveMovie ? 'movie__save' : 'movie__save'}
                            onClick={onCardSave}>
                        </button>
                    }

                    {
                        isSavedCard &&
                        <button
                            type='button'
                            className={saveMovie ? 'movie__save movie__save_delete' : !saveMovie ? 'movie__save movie__save_delete' : 'movie__save movie__save_delete'}
                            onClick={onCardDelete}>
                        </button>
                    }
 
                </div>
 
            </li>
        </>
    )
}