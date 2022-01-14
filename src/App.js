import { Routes, Route } from "react-router-dom";

import { Home } from './pages/Home';
import { Companies } from './pages/Companies';
import { Assets } from './pages/Assets'



export function App() { 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="companies/:companyId" element={<Companies />} />
      <Route path="companies/:companyId/unit/:unitId" element={<Assets />} />
    </Routes>
  );

}