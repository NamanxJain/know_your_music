import React from "react";
import "./styles.css";
import { useState } from "react";

const MusicDB = {
  Arijit_Singh: [
    { name: "Meri Ashiqui", rating: "4/5" },
    { name: "Shayad", rating: "3.5/5" },
    {
      name: "Kesariya",
      rating: "3.5/5"
    },
    {
      name: "Do Pal",
      rating: "3.4/5"
    }
  ],

  Atif_Aslam: [
    {
      name: "Jeena Jeena",
      rating: "4.5/5"
    },
    {
      name: "Pehli Dafa",
      rating: "4.5/5"
    },
    {
      name: "Darasal",
      rating: "3.6/5"
    }
  ],

  Shankar_Mahadevan: [
    {
      name: "Mitwa",
      rating: "3.5/5"
    },
    {
      name: "Uff Teri Adaa",
      rating: "5/5"
    },
    {
      name: "Sajdaa",
      rating: "3.9/5"
    }
  ],
  Lata_Mangeshkar: [
    {
      name: "Do Pal",
      rating: "3.5/5"
    },
    {
      name: "Dekha Ek Khwaab",
      rating: "4.5/5"
    },
    {
      name: "Bholi si Surat",
      rating: "4.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Lata_Mangeshkar");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 🎶 Know Your Music Taste 🎶</h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Checkout my favorite songs. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(MusicDB).map((genre) => (
          <button
            key={genre}
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#c4b5fd",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {MusicDB[selectedGenre].map((songs) => (
            <li
              key={songs.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #c4b5fd",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {songs.name} </div>
              <div style={{ fontSize: "smaller" }}> {songs.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
