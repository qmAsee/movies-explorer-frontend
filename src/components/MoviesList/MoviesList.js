import React from "react";
import { useLocation } from "react-router-dom";

import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";

import { MAX_WIDTH_MOVIES_AMOUNT,
        MEDIUM_WIDTH_MOVIES_AMOUNT,
        MIN_WIDTH_MOVIES_AMOUNT,
        MAX_WIDTH,
        MEDIUM_WIDTH,
        MIN_WIDTH,
        MAX_ADDITIONAL_MOVIES,
        MIN_ADDITIONAL_MOVIES } from '../../utils/constanst';


export default function MoviesList({ cards, onSaveCard, onDeleteCard, savedCards, reqError, isSavedCard, isLoading, isNotFound }) {

    const location = useLocation();
    const [showedMovies, setShowedMovies] = React.useState(0);

    function showedAmount() {
        const displayWidth = window.innerWidth;

        if (displayWidth > MAX_WIDTH) {
            setShowedMovies(MAX_WIDTH_MOVIES_AMOUNT)
        } else if (displayWidth > MEDIUM_WIDTH) {
            setShowedMovies(MEDIUM_WIDTH_MOVIES_AMOUNT)
        } else if (displayWidth > MIN_WIDTH) {
            setShowedMovies(MIN_WIDTH_MOVIES_AMOUNT)
        }
    }

    React.useEffect(() => {
        showedAmount();
    }, []);

    React.useEffect(() => {
        setTimeout(() => {
            window.addEventListener('resize', showedAmount)
        }, 700)
    })

    function getSavedCard(savedCards, card) {
        return savedCards.find((savedCard) => savedCard.movieId === card.id);
    }

    function showMoreCards() {
        const displayWidth = window.innerWidth;

        if (displayWidth > MAX_WIDTH) {
            setShowedMovies(showedMovies + MAX_ADDITIONAL_MOVIES)
        } else if (displayWidth > MEDIUM_WIDTH) {
            setShowedMovies(showedMovies + MIN_ADDITIONAL_MOVIES)
        } else if (displayWidth < MEDIUM_WIDTH) {
            setShowedMovies(showedMovies + MIN_ADDITIONAL_MOVIES)
        }
    }

    return (
        <section className='movies'>
            {isLoading && <Preloader />}
            {!isLoading && isNotFound && <p className="movies__error">Ничего не найдено</p>}

            {!isNotFound && !isLoading && !reqError && (
                <>
                    {location.pathname === '/saved-movies' ? (
                        <>
                            <ul className='movies__list'>
                                {Array.from(cards).map((card) => (
                                    <MoviesCard 
                                        cards={cards}
                                        card={card}
                                        onSaveCard={onSaveCard}
                                        onDeleteCard={onDeleteCard}
                                        isSavedCard={isSavedCard}
                                        savedCards={savedCards}
                                        saved={getSavedCard(savedCards, card)}
                                        key={isSavedCard ? card._id : card.id}
                                    />
                                ))}
                            </ul>
                        </>
                    ) : (
                       <>
                            <ul className='movies__list'>
                                {Array.from(cards).slice(0, showedMovies).map((card) => (
                                    
                                    <MoviesCard 
                                        cards={cards}
                                        card={card}
                                        onSaveCard={onSaveCard}
                                        onDeleteCard={onDeleteCard}
                                        isSavedCard={isSavedCard}
                                        savedCards={savedCards}
                                        saved={getSavedCard(savedCards, card)}
                                        key={isSavedCard ? card._id : card.id}
                                    />
                                    
                                ))}
                            </ul>

                            {cards.length > showedMovies ? (
                                <button type='button' className='movies__more' onClick={showMoreCards}>
                                    Ещё
                                </button>
                            ) : (null)
                            }    
                       </> 
                    )}
                </>
            )}    
        </section>
    )
}