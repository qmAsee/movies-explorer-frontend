import './App.css';
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import Header from "../Header/Header.js";
import Landing from '../Landing/Landing';
import SearchArea from '../SearchArea/SearchArea';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';
import Account from '../Account/Account';
import SignUp from '../SignUp/SignUp';
import SignIn from '../SignIn/SignIn';
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Preloader from '../Preloader/Preloader'

function App() {
  return (
    <Routes>

      <Route
      path='/pre'
      element={
        <>
          <Preloader />
        </>
      }
      />
      
      <Route
        path="/"
        element={
        <>
          <Header isLoggedIn={false} />
          <Landing />
        </>
      }
      />

      <Route
        path="/movies"
        element={
          <>
            <Header isLoggedIn={true} />
            <SearchArea />
            <Movies />
            <Footer />
          </>
        }
      />

      <Route
        path="/saved-movies"
        element={
          <>
            <Header isLoggedIn={true} />
            <SearchArea />
            <Movies />
            <Footer />
          </>
        }
      />
      <Route
        path="/account"
        element={
          <>
            <Header isLoggedIn={true} />
            <Account />
          </>
        }
      />

      <Route
        path="/signup"
        element={
          <>
            <SignUp />
          </>
        }
      />

      <Route
        path="/signin"
        element={
          <>
            <SignIn />
          </>
        }
      />

      <Route
        path="*"
        element={
          <>
            <NotFoundPage />
          </>
        }
      />
    </Routes>
    
  );
}

export default App;
