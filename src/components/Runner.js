import React from 'react';

const Runner = ({ name, description, url, fonzip, slug }) => {
  return (
    <a href={slug} title={name + ' | ' + description}>
      <div className="sk-runner-card">
        <div
          className="sk-runner-card-photo"
          style={{
            backgroundImage: 'url(' + url + ')',
          }}
        />
        <div className="sk-runner-card-context">
          <p className="name">{name}</p>
          <p className="description">{description}</p>
          <p>
            <a href={fonzip} target="_blank">
              Bagis Yap
            </a>
          </p>
        </div>
      </div>
    </a>
  );
};

export default Runner;
