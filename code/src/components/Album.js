import React from "react";
import { Artists } from "components/Artist.js";

export const Album = ({ coverImage, albumUrl, albumName, artists }) => {
  return (
    <div className="albumWrapper">
      <div className="albumImageWrapper">
        <img className="albumImage" src={coverImage} alt="album cover" />
        <div className="albumOverlay">
          <img
            className="icon"
            src="../../icons/heart_white.svg"
            alt="like button"
          />
          <div className="playWrapper">
            <a href={albumUrl}>
              <img
                className="playIcon"
                src="../../icons/play_white.svg"
                alt="play button"
              />
            </a>
          </div>
          <img
            className="icon"
            src="../../icons/dots_white.svg"
            alt="more button"
          />
        </div>
      </div>
      <h2 className="albumName">
        <a href={albumUrl}>{albumName}</a>
      </h2>

      <Artists artists={artists} />
    </div>
  );
};
