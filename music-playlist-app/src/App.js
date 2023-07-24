import React from "react";
import { Routes, Route } from "react-router-dom";
import PlaylistList from "./components/PlaylistList";
import AddPlaylistForm from "./components/AddPlaylistForm";
import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<PlaylistList />} />
        <Route path="/my-playlists" element={<AddPlaylistForm />} />
        {/* Add more routes for About and other components */}
      </Routes>
    </div>
  );
};

export default App;
