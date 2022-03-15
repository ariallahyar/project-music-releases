import React from "react";
import rawData from "./data-new.json";
import Header from "components/Header.js";
import { Album } from "components/Album.js";

const parseArtist = (rawArtist) => ({
  name: rawArtist.name,
  url: rawArtist.external_urls.spotify,
});

const data = {
  albums: rawData.albums.items.map((album) => ({
    id: album.id,
    name: album.name,
    coverImage: album.images[0].url,
    url: album.external_urls.spotify,
    artists: album.artists.map(parseArtist),
  })),
};

export const App = () => {
  return (
    <main>
      <Header />
      <div className="albumsWrapper">
        {data.albums.map((album) => {
          return (
            <Album
              key={album.id}
              coverImage={album.coverImage}
              albumName={album.name}
              albumUrl={album.url}
              artists={album.artists}
            />
          );
        })}
      </div>
    </main>
  );
};
