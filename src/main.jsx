import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx'
import { ThemeProvider } from './context/theme/ThemeProvider.jsx'
import "./index.css"
import Home from './pages/Home.jsx';
import MovieDetailPage from './pages/MovieDetails.jsx';
import NotFoundPage from './pages/NotFound.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>

        </App>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
