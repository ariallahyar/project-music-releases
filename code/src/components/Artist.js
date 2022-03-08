import React from 'react'

export const Artist = (props) => {
	return (
		// props.name is an array of one or several names

		// if (props.name.length === 1) {
		// 	// print out name

		// } else if (props.name.length === 1) {
		// 	// print out `array[0] & array[1]`

		// } else {
		// 	// const lastArtist = array.pop()
		// 	// const firstArtists = array.join(', ')
		// 	// `${firstArtists} & ${lastArtist}`
		// }

		<h3>{props.name}</h3>
	);
};