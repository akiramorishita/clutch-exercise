import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoanForm from './pages/LoanForm/LoanForm';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoanForm />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
