import React from 'react'
import data from './data.json'
import { Album } from 'components/Album.js'

console.log(data)

export const App = () => {
  return (
    <div>
      {data.albums.items.map(album => {
        return <Album 
          coverImage={album.images[0].url}
          albumName={album.name}
          artistName= {album.artists.map(artist => {
            return artist.name
          })}
        />
      })}
    </div>
  );
};