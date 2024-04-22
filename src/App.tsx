import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import QuestionPage from './pages/QuestionPage';
import ResultPage from './pages/ResultPage';

function App():React.ReactElement { // typescript의 타입 선언

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/question' element={<QuestionPage />} />
        <Route path='/result' element={<ResultPage />} />
      </Routes>
    </Router>
  );
}

export default App;