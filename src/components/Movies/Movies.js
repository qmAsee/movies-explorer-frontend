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

export default function Movies({ isLoggedIn, onSaveCard, onDeleteCard, savedCards }) {

    const [isLoading, setIsLoading] = useState(false);
    const [isNotFound, setIsNotFound] = useState(false)
    const [filteredCards, setFilteredCards] = useState([]);
    const [initialCards, setInitialCards] = useState([]);
    const [isMovieShort, setIsMovieShort] = useState(false);

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
        } else {
            setFilteredCards(initialCards);
        }

        localStorage.setItem('shorts', !isMovieShort)
    }

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
        if (localStorage.getItem('movies')) {
            const movies = JSON.parse(localStorage.getItem('movies'));
            setInitialCards(movies)

            if (localStorage.getItem('shorts') === 'true') {
                setFilteredCards(filterMovieDuration(movies))
            } else {
                setFilteredCards(movies)
            }
        } 
    }, []);

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
            
            <Footer />

        </section>
    )
}