import React, { useState } from "react";
import axios from "axios";

const AddPlaylistForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create a new playlist object
    const newPlaylist = {
      title,
      description,
      songs: [], // Assuming we'll add songs to the playlist later
    };
    // Make a POST request to the backend to add the new playlist
    axios
      .post("http://localhost:3001/playlists", newPlaylist)
      .then((response) => {
        console.log("New playlist added:", response.data);
        // Clear the form after successful submission
        setTitle("");
        setDescription("");
      })
      .catch((error) => console.error("Error adding playlist:", error));
  };

  return (
    <div>
      <h2>Add New Playlist</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Playlist
        </button>
      </form>
    </div>
  );
};

export default AddPlaylistForm;
