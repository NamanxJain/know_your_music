import React from "react";
import "./styles.css";
import { useState } from "react";

const MusicDB = {
  Arijit_Singh: [
    { name: "Meri Ashiqui", rating: "4/5",description:"This is romantic sung by arijit for movie Ashihqui2" },
    { name: "Shayad", rating: "3.5/5",description:"This is romantic sung by arijit and directed by pritam for movie LoveAajKal" },
    {
      name: "Kesariya",
      rating: "3.5/5",
      description:"This is romantic song which has alia bhatt and ranveer kapoor and is sung with heart and soul by our favourite singer arijit for Bhramastra Movie "
    },
    {
      name: "Pal",
      rating: "3.4/5",
      description:"This is romantic song sung by arijit for movie for movie Jalebi "
    }
  ],

  Atif_Aslam: [
    {
      name: "Jeena Jeena",
      rating: "4.5/5",
      description:"This song just touches your soul and very well written by Dinesh Vijan "
    },
    {
      name: "Pehli Dafa",
      rating: "4.5/5",
      description:"This song is dedicated to all new lovers who fell in love for first time"
    },
    {
      name: "Darasal",
      rating: "3.6/5",
      description:"The Darasal song is  from ‘Raabta’, featuring Sushant Singh Rajput and Kriti Sanon in the lead. Directed by Dinesh Vijan, the music has been composed by Jam8."
    }
  ],

  Shankar_Mahadevan: [
    {
      name: "Mitwa",
      rating: "3.5/5",
      description:"Mitwa (From Kabhi Alvida Naa Kehna) is a Hindi language song and is sung by Shankar-Ehsaan-Loy, Shankar Mahadevan, Caralisa Monteiro and Shafqat Amanat Ali."
    },
    {
      name: "Uff Teri Adaa",
      rating: "5/5",
      description:"Uff Teri Adaa (From Karthik Calling Karthik) is a Hindi language song and is sung by Shankar Mahadevan and Alyssa Mendonsa. "
    },
    {
      name: "Sajdaa",
      rating: "3.9/5",
      description:"This beautiful is sung by Shankar-Ehsaan-Loy, Rahat Fateh Ali Khan, Shankar Mahadevan and Richa Sharma for movie(My name is Khan)" 
    }
  ],
  Lata_Mangeshkar: [
    {
      name: "Do Pal",
      rating: "3.5/5",
      description:"This masterpiece is from famous love story movie Veer-Zara and sung bu veteran lata ji with his disciple Sonu nigam"
    },
    {
      name: "Dekha Ek Khwaab",
      rating: "4.5/5",
      description:"This song featuring Amitabh Bacchan and star beautyqueen Rekhaji is so much smoothing to ear"
    },
    {
      name: "Bholi si Surat",
      rating: "4.5/5",
      description:"This song is sung by duo lataji and udit Narayan ji is all time versatile song"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Arijit_Singh");
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
              <div style={{ fontSize: "larger" }}> {songs.description} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
