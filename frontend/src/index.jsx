import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { GlobalStyle } from './styles/globalStyles';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Provider store={store}>
          <GlobalStyle />
          <Routes>
            <Route path='/*' element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </>,
);
