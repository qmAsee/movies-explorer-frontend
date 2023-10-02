import './App.css';
import React from 'react';
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

import Header from "../Header/Header.js";
import Landing from '../Landing/Landing';
import Movies from '../Movies/Movies';
import Account from '../Account/Account';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import ProtectedRouteElement from '../ProtectedRoute/ProtectedRoute';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import { CurrentUserContext } from '../../context/CurrentUserContext';
import SavedMovies from '../SavedMovies/SavedMovies';

import { mainApi } from '../../utils/MainApi';

function App() {

  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [savedCards, setSavedCards] = React.useState([])
  const [signinMessage, setSigninMessage] = React.useState('')
  const [signupMessage, setSignupMessage] = React.useState('')
  const [popupSuccess, setPopupSuccess] = React.useState(false)
  const [isPopupOpened, setIsPopupOpened] = React.useState(false)
  const [updateError, setUpdateError] = React.useState('')

  const location = useLocation()

  const navigate = useNavigate()

  React.useEffect(() => {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      mainApi
        .getData(jwt)
        .then((res) => {
          if(res) {
            localStorage.removeItem('all-movies');
            setIsLoggedIn(true);
          }
          navigate(location.pathname)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }, [])

  React.useEffect(() => {
    if (isLoggedIn) {
      mainApi
        .getUserData()
        .then((userData) => {
          setCurrentUser(userData)
        })
        .catch((err) => {
          console.log(err)
        });

        mainApi
          .getCards()
          .then((cardsData) => {
            setSavedCards(cardsData.reverse());
          })
          .catch((err) => {
            console.log(err)
          })
    }
  }, [isLoggedIn])

  function handleSignUp(name, email, password) {
    mainApi
      .signup(name, email, password)
      .then(() => {
        handleSignIn(email, password)
      })
      .catch((err) => {
        setSignupMessage(err.message)
      })
  }

  function handleSignIn(email, password) {
    mainApi
      .signin(email, password)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token)
          setIsLoggedIn(true)
          navigate('/movies', {replace: true})
        }
      })
      .catch((err) => {
        console.log(err)
        setSigninMessage(err.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  };

  function handleSignOut() {
    setIsLoggedIn(false)
    localStorage.removeItem('movies')
    localStorage.removeItem('movie-query')
    localStorage.removeItem('shorts')
    localStorage.removeItem('all-movies')
    localStorage.removeItem('jwt')
    navigate('/', {replace: true})
  }

  function handleUpdateUser(userData) {
    setIsLoading(true);

    mainApi
      .setUserData(userData)
      .then((data) => {
        setCurrentUser(data)
        setIsPopupOpened(true)
        setPopupSuccess(true)
        setUpdateError('')
      })
      .catch((err) => {
        setUpdateError(err.message)
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  function handleClosePopup() {
    setIsPopupOpened(false)
  }

  function handleLikeCard(card) {
    mainApi
      .addCard(card)
      .then((movie) => {
        setSavedCards([movie, ...savedCards]);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleDeleteCard(card) {
    mainApi
      .deleteCard(card._id)
      .then(() => {
        setSavedCards((state) => state.filter((item) => item._id !== card._id))
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
        <Routes>
          
            <Route
              path="/"
              element={
              <>
                <Header isLoggedIn={isLoggedIn} />
                <Landing />
              </>
            }
            />
            <Route
                path="/profile"
                element={
                  <ProtectedRouteElement
                    element={Account}
                    onUpdateData={handleUpdateUser}
                    isLoggedIn={isLoggedIn}
                    isLoading={isLoading}
                    onSignOut={handleSignOut}
                    updateError={updateError}
                  />
                }
              />
              <Route 
                path='/movies'
                element={
                  <ProtectedRouteElement
                    element={Movies}
                    isLoggedIn={isLoggedIn}
                    savedCards={savedCards}
                    onSaveCard={handleLikeCard}
                    onDeleteCard={handleDeleteCard}
                  />
                }
              />
              <Route
                path="/saved-movies"
                element={
                  <>
                    <main className='main'>
                      <SavedMovies
                        isLoggedIn={isLoggedIn}
                        savedCards={savedCards}
                        onDeleteCard={handleDeleteCard}
                      />
                    </main>
                  </>
                }
              />
              
            <Route
              path="/signup"
              element={
                <>
                  <main className='main'>
                    <SignUp
                      onSignUp={handleSignUp}
                      isLoading={isLoading}
                      message={signupMessage}
                      isLoggedIn={isLoggedIn}
                    />
                  </main>
                </>
              }
            />

            <Route
              path="/signin"
              element={
                <>
                  <main className='main'>
                    <SignIn
                      onSignIn={handleSignIn}
                      message={signinMessage}
                      isLoggedIn={isLoggedIn}
                    />
                  </main>
                </>
              }
            />
            <Route
              path="*"
              element={
                <>
                  <main className='main'>
                    <NotFoundPage />
                  </main>
                </>
              }
            />
          </Routes>
        </CurrentUserContext.Provider>

        <InfoTooltip
          isSuccess={popupSuccess}
          isOpened={isPopupOpened}
          onClose={handleClosePopup}
        />

      </>
  );
}

export default App;
