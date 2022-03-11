import React from 'react'

export const Artist = (props) => {

	if (props.name.length === 1) {
		return (
			<div>
				<a href={props.url[0]} alt=''>
					<h3 className="artistsName artistName">{props.name[0]}</h3>
				</a>
			</div>
		)

	} else if (props.name.length === 2) {
		return (
			<div>
				<h3 className='artistsName'>
					<a className='artistName' href={props.url[0]} alt=''>{props.name[0]}</a>
					&nbsp;&&nbsp;
					<a className='artistName' href={props.url[1]} alt=''>{props.name[1]}</a>
				</h3>
			</div>
		)

	} else {

		const lastArtist = props.name.pop();
		const lastLink = props.url.pop();

		return (
			<h3 className='artistsName'>

				{props.name.map((name) => {
					return <><a className='artistName' href={props.url[props.name.indexOf(name)]}>{name}</a>, &nbsp;</>
				})
				}
				&&nbsp;<a className='artistName' href={lastLink}>{lastArtist}</a>
			</h3>
		)
	}
};