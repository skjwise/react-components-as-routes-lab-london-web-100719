import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, id)=> (
        <div key={id}>
          <h3>Name: {actor.name} </h3>
          <p>Movies:</p>
          <ul>
          {actor.movies.map((title, id)=> (
            <li key={id}> {title} </li>
          ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Actors;
