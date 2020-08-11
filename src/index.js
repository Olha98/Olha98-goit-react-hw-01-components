import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Components/Profile';
import user from './user.json';

ReactDOM.render(
  <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
  />,
  document.getElementById('root'),
);