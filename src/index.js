import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import reportWebVitals from './reportWebVitals';
import { StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import App from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
    <React.Fragment>
      <CssBaseline />
        <Container fixed>
          <App/>
        </Container>
    </React.Fragment>
      
    </StyledEngineProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
