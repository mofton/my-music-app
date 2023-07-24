import React from "react";
import { RiPlayList2Line } from "react-icons/ri";

const PlaylistCard = ({ playlist }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{playlist.title}</h3>
        <p className="card-text">{playlist.description}</p>
        <p className="card-text">
          <RiPlayList2Line /> Number of Songs: {playlist.songs.length}
        </p>
      </div>
    </div>
  );
};

export default PlaylistCard;
