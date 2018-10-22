import React from 'react';
import jimi from '../img/jimi.jpg';

const Runner = ({ name, description, url }) => {
  return (
    <a href="https://fonzip.com/sulukulegonulluleri/bagis#/" target="_blank">
      <div className="sk-runner-card">
        <div
          className="sk-runner-card-photo"
          style={{
            backgroundImage: 'url(' + url + ')',
          }}
        />
        <div className="sk-runner-card-context">
          <span className="name">{name}</span>
          <p>{description}</p>
        </div>
      </div>
    </a>
  );
};

export default Runner;
