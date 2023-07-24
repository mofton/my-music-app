import React, { useState, useEffect } from "react";
import axios from "axios";
import PlaylistCard from "./PlaylistCard";

const PlaylistList = () => {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    // Fetch playlists from the backend API using useEffect
    axios
      .get("http://localhost:3001/playlists")
      .then((response) => setPlaylists(response.data))
      .catch((error) => console.error("Error fetching playlists:", error));
  }, []);

  return (
    <div>
      <h2>My Playlists</h2>
      <div className="list-group">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </div>
  );
};

export default PlaylistList;
