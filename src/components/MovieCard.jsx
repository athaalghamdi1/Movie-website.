import React from "react"

const MovieCard = ({ item, isBookmarked, toggleBookmark }) => {
  const renderStars = (rating) => {
    const stars = [];
    const ratingOutOfFive = Math.round((parseFloat(rating) / 10) * 5);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} style={{ color: i <= ratingOutOfFive ? "gold" : "lightgray" }}>★</span>
      );
    }
    return stars;
  };

  return (
    <div className="movie-card">
      <img
        src={item.Poster !== "N/A" ? item.Poster : "https://via.placeholder.com/300x445?text=No+Image"}
        alt={item.Title}
        className="poster"
      />
      <p><strong>Title:</strong> {item.Title}</p>
      <p><strong>Year:</strong> {item.Year}</p>
      <p><strong>Rating:</strong> 
        {item.imdbRating && item.imdbRating !== "N/A"
          ? renderStars(item.imdbRating)
          : " No rating"}
      </p>
      <button onClick={() => toggleBookmark(item)} className="heart-button">
        {isBookmarked ? "💔" : "❤️"}
      </button>
    </div>
  );
};

export default MovieCard