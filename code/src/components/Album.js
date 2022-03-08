import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
	return (
    <div className="albumWrapper">
      <img src={props.coverImage} alt="album cover"/>
      <h2>{props.albumName}</h2>
      <Artist 
        name= {props.artistName}
      />
    </div>
	);
};