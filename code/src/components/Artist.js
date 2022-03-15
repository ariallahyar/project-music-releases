import React from "react";

export const Artists = ({ artists }) => {

  if (artists.length === 1) {
    return (
      <div>
        <a href={artists[0].url} alt="">
          <h3 className="artistsName artistName">{artists[0].name}</h3>
        </a>
      </div>
    );
  } else if (artists.length === 2) {
    return (
      <div>
        <h3 className="artistsName">
          <a className="artistName" href={artists[0].url} alt="">
            {artists[0].name}
          </a>
          {" & "}
          <a className="artistName" href={artists[1].url} alt="">
            {artists[1].name}
          </a>
        </h3>
      </div>
    );
  } else {
    const lastArtist = artists.pop();

    return (
      <h3 className="artistsName">
        {artists.map((artist, index) => {
          return (
            <span key={index}>
              <a className="artistName" href={artist.url}>
                {artist.name}
              </a>
              {", "}
            </span>
          );
        })}
        {"& "}
        <a className="artistName" href={lastArtist.url}>
          {lastArtist.name}
        </a>
      </h3>
    );
  }
};
