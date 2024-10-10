import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import App from './App.tsx'
import MyReviews from './pages/MyReviews.tsx';
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/mis-reviews' element={<MyReviews />}/>
      </Routes>
    </Router>
  </StrictMode>,
)
