import React from 'react';
import ReactDOM from 'react-dom';
import { Reset } from 'styled-reset';
import {createGlobalStyle} from 'styled-components'

import MainPage from './components/MainPage/MainPage';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

ReactDOM.render(
  <>
    <Reset />
    <GlobalStyle />
    <MainPage />
  </>,
  document.getElementById('root')
);