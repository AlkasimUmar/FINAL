# Movie Recommendation App

## Overview
Full-stack app for user authentication, movie search/discovery (TMDB), favorites, watchlists, and reviews.

## Features
- Register/Login (JWT, bcrypt)
- Search/filter movies (TMDB API)
- Save favorites/watchlists
- Rate/review movies
- Responsive UI

## Setup
- `cd backend && npm install`
- `cd frontend && npm install`
- Add `.env` with `TMDB_API_KEY` and `JWT_SECRET`
- Run both servers

## Deployment
- Frontend: [Netlify URL]
- Backend: [Render URL]

## API Endpoints
- `POST /auth/register`
- `POST /auth/login`
- `GET /movies/search`
- `POST /user/favorites`
- `GET /user/favorites`