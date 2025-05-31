import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import axios from "axios"
import SearchBar from "./components/SearchBar"
import MovieCard from "./components/MovieCard"
import BookmarkPage from "./pages/BookmarkPage"
import ThemeToggle from "./components/ThemeToggle"
import "./App.css"

const API_KEY = "455a4a83";

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [bookmarks, setBookmarks] = useState([]);
  const [theme, setTheme] = useState("light");


  const fetchMovieDetails = async (imdbID) => {
    const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`);
    return res.data;
  };



  const searchItems = async (query, type) => {
    try {
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}&type=${type}`);
      if (res.data.Search) {
        const detailedResults = await Promise.all(
          res.data.Search.map(async (item) => {
            const details = await fetchMovieDetails(item.imdbID);
            return { ...item, imdbRating: details.imdbRating };
          })
        );
        setSearchResults(detailedResults);
      } else {
        setSearchResults([]);
      }
    } catch (err) {
      console.error("Error fetching data", err);
      setSearchResults([]);
    }
  };



  const toggleBookmark = (item) => {
    const exists = bookmarks.find((b) => b.imdbID === item.imdbID);
    if (exists) {
      setBookmarks(bookmarks.filter((b) => b.imdbID !== item.imdbID));
    } else {
      setBookmarks([...bookmarks, item]);
    }
  };



  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const hasResults = searchResults.length > 0;

  

  return (
    <Router>
      <div className={`app ${theme}`}>
        <header className="header">
          <div className="header-links">
            <Link to="/">Home</Link>
            <Link to="/bookmarks" className="heart-link">❤️</Link>
            <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
          </div>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <div className={hasResults ? "content content--results" : "content content--centered"}>
                <h1>Welcome! Find and save your movies and series&#x1F3AC;</h1>
                <SearchBar onSearch={searchItems} />
                <div className="results">
                  {searchResults.map((item) => (
                    <MovieCard
                      key={item.imdbID}
                      item={item}
                      isBookmarked={bookmarks.some((b) => b.imdbID === item.imdbID)}
                      toggleBookmark={toggleBookmark}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/bookmarks"
            element={
              <BookmarkPage bookmarks={bookmarks} toggleBookmark={toggleBookmark} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App