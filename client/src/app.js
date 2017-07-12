import React from 'react';
import ReactDOM from 'react-dom';
import Container from './containers/Container.jsx'

window.addEventListener('load', function () {
  ReactDOM.render(
    <Container/>,
    document.getElementById('app')
  );
});
