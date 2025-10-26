import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NewHome } from './pages/New/Home'

export const RevampApp = () => {
  return (
    <Router>
        <div>
            <Routes>
                <Route path="/" element={<NewHome />} />
            </Routes>
        </div>
    </Router>
  )
}
