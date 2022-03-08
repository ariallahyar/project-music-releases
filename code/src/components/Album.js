import React from 'react'

export const Album = (props) => {
	return (
    <div className="albumWrapper">
      <img src={props.coverImage} alt="album cover"/>
      <h2>{props.albumName}</h2>
    </div>
	);
};