import { useEffect, useState } from 'react';
import { moviesApi } from '../../utils/MoviesApi';

import MoviesList from '../MoviesList/MoviesList';
import SearchArea from '../SearchArea/SearchArea';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { 
    filterMoviesQuery,
    filterMovieDuration
} from '../../utils/utils';

import { getMoviesAmount } from '../../utils/utils';
import { useDebounce } from '../../hooks/useDebounce';

export default function Movies({ isLoggedIn, onSaveCard, onDeleteCard, savedCards }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false)
    const [filteredCards, setFilteredCards] = useState([]);
    const [initialCards, setInitialCards] = useState([]);
    const [isMovieShort, setIsMovieShort] = useState(false);
    const [cardsAmount, setCardsAmount] = useState(getMoviesAmount());
    const [isMoreButtonVisible, setIsMoreButtonVisible] = useState(true)

    function renderFilteredCards(movies, query, shorts) {
        const moviesList = filterMoviesQuery(movies, query, shorts);
      
        setInitialCards(moviesList);
        setFilteredCards(shorts ? filterMovieDuration(moviesList) : moviesList)

        localStorage.setItem('movies', JSON.stringify(moviesList));
        localStorage.setItem('all-movies', JSON.stringify(movies))
    }

    function onSearch(query) {
        localStorage.setItem('movie-query', query);
        localStorage.setItem('shorts', isMovieShort);

        if (localStorage.getItem('all-movies')) {
            const allMovies = JSON.parse(localStorage.getItem('all-movies'))
            renderFilteredCards(allMovies, query, isMovieShort)
        } else {
            setIsLoading(true);

            moviesApi
                .getInitialMovies()  
                .then((cards) => {
                    renderFilteredCards(cards, query, isMovieShort)
                })
                .catch((err) => {
                    console.log(err)
                })
                .finally(() => {
                    setIsLoading(false)
                })
        }
    }

    function filterShortMovies() {
        setIsMovieShort(!isMovieShort);

        if (!isMovieShort) {
            setFilteredCards(filterMovieDuration(initialCards))
            console.log(filterMovieDuration(initialCards)) // тут в массиве только короткометражки
        } else {
            setFilteredCards(initialCards.slice(0, cardsAmount.totalCards));
            console.log(initialCards)
        }
        
        localStorage.setItem('shorts', !isMovieShort)
    }
    
    function showMoreCards() {
        const addedMoviesAmount = initialCards.slice(filteredCards.length, filteredCards.length + cardsAmount.addedCards);

        setFilteredCards([...filteredCards, ...addedMoviesAmount])
    }

    function handleResize() {
        setCardsAmount(getMoviesAmount());
    }

    const useResize = useDebounce(handleResize);

    useEffect(() => {
        window.addEventListener('resize', useResize);
        return () => window.removeEventListener('resize', useResize)
    }, [useResize])

    useEffect(() => {
        setFilteredCards(initialCards.slice(0, cardsAmount.totalCards));

        if (localStorage.getItem('movies')) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialCards(movies)

            if (localStorage.getItem('shorts') === 'true') {
                setFilteredCards(filterMovieDuration(movies))
            } else {
                setFilteredCards(movies.slice(0, cardsAmount.totalCards))
            }
        } 
    }, [cardsAmount])

    useEffect(() => {
        if (localStorage.getItem('movie-query')) {
            if (filteredCards.length === 0) {
                setIsNotFound(true);
            } else {
                setIsNotFound(false);
            }
        } else {
            setIsNotFound(false);
        }
    }, [filteredCards])

    useEffect(() => {
        if (localStorage.getItem('shorts') === 'true') {
            setIsMovieShort(true);
        } else {
            setIsMovieShort(false);
        }
    }, [])

    useEffect(() => {
        setIsMoreButtonVisible(filteredCards.length < initialCards.length);
    }, [filteredCards, initialCards])

    return (
        <section className='movies'>

            <Header isLoggedIn={isLoggedIn} />

            <SearchArea
                isShort={isMovieShort}
                onSearch={onSearch}
                onFilter={filterShortMovies}
            />
            
            <MoviesList
                cards={filteredCards}
                onSaveCard={onSaveCard}
                onDeleteCard={onDeleteCard}
                savedCards={savedCards}
                isSavedCard={false}
                isLoading={isLoading}
                isNotFound={isNotFound}
            />
            { isMoreButtonVisible ? (
                        <button type='button' className='movies__more' onClick={showMoreCards}>
                            Ещё
                        </button>
                    ) : (null)
            }  
            
            <Footer />

        </section>
    )
}