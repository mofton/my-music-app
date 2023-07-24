markdown
Copy code

# Music Playlist App

![App Screenshot](screenshot.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [API Endpoint](#api-endpoint)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Music Playlist App is a React-based single-page application that allows users to create and manage personalized playlists. This project consists of both the frontend and backend components. The frontend provides an interactive user interface to view and add playlists, while the backend serves as a simple RESTful API to store and retrieve playlist data.

## Features

- View a list of user-created playlists
- Display individual playlist details (title, description, number of songs)
- Add new playlists with a title and description

## Technologies Used

- React: A JavaScript library for building user interfaces
- React Router: For client-side routing within the app
- Bootstrap: For styling and responsive design
- React Icons: For including icons in the user interface
- Axios: For making API requests to the backend
- json-server: For setting up a simple backend API

## Getting Started

### Prerequisites

- Node.js: Make sure you have Node.js installed on your system.

### Installation

1. Clone the repository:

git clone https://github.com/mofton/my-music-app-app.git
cd music-playlist-app

markdown
Copy code

2. Install frontend dependencies:

cd frontend
npm install

markdown
Copy code

3. Start the frontend server:

npm start

css
Copy code

4. In a new terminal, go back to the root directory and navigate to the backend folder:

cd backend

markdown
Copy code

5. Install backend dependencies:

npm install

markdown
Copy code

6. Start the backend server:

npm start

markdown
Copy code

The frontend will be accessible at `http://localhost:3000`, and the backend will be running at `http://localhost:3001`.

### API Endpoint

The frontend interacts with the backend API to fetch and store playlist data. The backend provides the following routes:

- GET /playlists: Retrieve all playlists
- POST /playlists: Create a new playlist
- GET /playlists/:id: Retrieve a specific playlist by ID

## Folder Structure

- `frontend/`: Contains the main source code for the frontend app.

  - `components/`: Contains reusable React components.
  - `App.js`: Main component that sets up routing and includes other components.
  - `index.js`: Entry point of the app that renders the main component to the DOM.
  - `App.css`: Additional CSS styles for the app.
  - `public/`: Contains the main HTML file and public assets.

- `backend/`: Contains the backend code and the "db.json" file acting as the JSON database.

## Screenshots

_Insert relevant screenshots of the app here._

## Contributing

Contributions to the Music Playlist App are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

The Music Playlist App is open-source and released under the [MIT License](LICENSE).
