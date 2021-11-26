import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const GREETING = 'Homework 3 from Denis Dorogov';
const ADMIN_MESSAGE = {
  author: 'Admin',
  text: 'Your message is accepted!'
};





ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <React.Fragment>
      <CssBaseline />
        <Container fixed>
          <App greeting={GREETING}/>
        </Container>
    </React.Fragment>
      
    </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
