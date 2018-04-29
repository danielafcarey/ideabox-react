import React from 'react';

const Idea = ({ title, body, quality }) => {
  return (
    <div className="idea-card">
      <h1>{ title }</h1>
      <p>{ body }</p>
      <h3>{ quality }</h3>
    </div>
  )

}

export default Idea;
