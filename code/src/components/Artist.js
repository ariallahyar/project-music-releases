import React from 'react'

export const Artist = (props) => {

	let name = '';

	if (props.name.length === 1) {
		name = props.name[0];
		
	} else if (props.name.length === 2) {
		name = `${props.name[0]} & ${props.name[1]}`;

	} else {
		const lastArtist = props.name.pop();
		const firstArtists = props.name.join(', ');
		name = `${firstArtists} & ${lastArtist}`;
	}

	return (
			<h3>{name}</h3>
	);
};