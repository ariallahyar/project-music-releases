import React from 'react'
import { Artist } from './Artist'

export const Album = (props) => {
	return (
    <div className="albumWrapper">
      <div className='albumImageWrapper'>
        <img className='albumImage' src={props.coverImage} alt="album cover"/>
        <div className='albumOverlay'/>
      </div>
      <h2 className="albumName">{props.albumName}</h2>
      <Artist 
        name= {props.artistName}
      />
    </div>
	);
};