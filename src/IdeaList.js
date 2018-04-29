import React, { Component } from 'react';
import Idea from './Idea';

const IdeaList = ({ ideasArray }) => {
  let ideas = ideasArray.map(ideaObj => {
    return <Idea title={ ideaObj.titleInput } 
                 body={ ideaObj.bodyInput } 
                 quality={ ideaObj.quality } />
  })

  return (
    <div className="Idea-list">
      { ideas }
    </div>
  )

}

export default IdeaList;
