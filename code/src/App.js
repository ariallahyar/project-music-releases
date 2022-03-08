import React from 'react'
import data from './data.json'
import {Album} from 'components/Album.js'

console.log(data)

export const App = () => {
  return (
    <div>
      <Album 
        coverImage={data.albums.items[0].images[0].url}
        albumName={data.albums.items[0].name}
      />
    </div>
  )
}
