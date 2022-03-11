import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
  return (
    <div className="albumWrapper">
      <div className='albumImageWrapper'>
        <img className='albumImage' src={props.coverImage} alt="album cover" />
        <div className='albumOverlay'>
          <img className="icon" src="../../icons/heart_white.svg" alt="like button" />
          <div className='playWrapper'>
            <a href={props.albumUrl}>
              <img className="playIcon" src="../../icons/play_white.svg" alt="play button" />
            </a>
          </div>
          <img className="icon" src="../../icons/dots_white.svg" alt="more button" />
        </div>
      </div>
      <h2 className="albumName">{props.albumName}</h2>
      <Artist
        name={props.artistName}
        url={props.artistUrl}
      />
    </div>
  );
};