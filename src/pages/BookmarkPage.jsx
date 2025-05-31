import React from "react"
import MovieCard from "../components/MovieCard"

const BookmarkPage = ({ bookmarks, toggleBookmark }) => {
  const hasBookmarks = bookmarks.length > 0;

  return (
    <div className={hasBookmarks ? "content content--results" : "content content--centered"}>
      <h2>Your Favorites:</h2>
      {hasBookmarks ?  (
        <div className="results">
          {bookmarks.map((item) => (
            <MovieCard
              key={item.imdbID}
              item={item}
              isBookmarked={true}
              toggleBookmark={toggleBookmark}
            />
          ))}
        </div>
      ) : (
        <p>No Favorites yet.</p>
      )}
    </div>
  );
};

export default BookmarkPage