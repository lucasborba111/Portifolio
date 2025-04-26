import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Project from '../pages/Project.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Project/:id" element={<Project/>} />
    </Routes>
  </BrowserRouter>
)
