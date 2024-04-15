import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

function Games() {
  const [searchParams] = useSearchParams();
  const year = searchParams.get('year'); 
  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    const url = 'http://fs1.co.il/bus/xbox1.php';

    fetch(url)
      .then(response => response.json())
      .then(data => {
        let filteredGames;
        if (year) {
          filteredGames = data.filter(game => game.Year.toString() === year);
        } else {
          filteredGames = data;
        }
        setGamesData(filteredGames);
        console.table(filteredGames);
      })
  }, [year]);

  function renderGames() {
    if (gamesData.length > 0) {
      return gamesData.map((game, index) => (
        <li key={index}>
          <strong>{game.Game}</strong> | <span>{game.Year}</span>
        </li>
      ));
    } else {
      return <li>No games found</li>;
    }
  }

  function renderTitle() {
    if (year) {
      return <h1>Games of {year}</h1>;
    } else {
      return <h1>All Games</h1>;
    }
  }

  return (
    <div className='container'>
      {renderTitle()}
      <ul>
        {renderGames()}
      </ul>
    </div>
  );
}

export default Games;
