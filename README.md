# Movie website

Project Start Date: May 28, Wednesday Night

## Overview

This React application enables users to search for movies, TV series, or episodes using the OMDb API and bookmark their favorite titles for easy access later. The app provides a clean, user-friendly interface with features to toggle between light and dark themes and display movie ratings.

## Features

- Search by title within a single category: Movie, Series, or Episode.
- Display search results in rows with up to three items each.
- Show essential details for each item: title, release year, poster image, and IMDb rating.
- Bookmark your favorite movies, series, or episodes for quick retrieval.
- Remove items from your bookmarks.
- View all bookmarked items on a dedicated page.
- Switch between light and dark themes for better usability.
- Movie ratings visually represented with star icons.

## Technologies Used

- React (functional components and hooks)
- React Router for client-side routing
- Axios for API requests
- OMDb API for movie and series data

## Getting Started

1. Clone the repository.
2. Run npm install to install dependencies.
3. Start the development server with npm start.
4. Use the search bar to find your desired movie, series, or episode.
5. Bookmark your favorite items by clicking the heart icon.
6. Navigate to the Bookmarks page to view or remove saved items.
7. Toggle the theme between light and dark using the button in the header.

## Component Structure

- App.jsx: Main component managing state, API calls, and routing.
- SearchBar.jsx: Handles user input for searching titles.
- MovieCard.jsx: Displays detailed info and bookmark toggle for each item.
- BookmarkPage.jsx: Displays all bookmarked items with options to remove them.
- ThemeToggle.jsx: Allows users to switch between light and dark modes.

## API Reference

- [OMDb API Documentation](https://www.omdbapi.com/)

## Local:
- (http://localhost:5173/) 
---