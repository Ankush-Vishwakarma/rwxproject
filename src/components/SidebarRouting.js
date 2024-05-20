// SidebarRouting.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
// import PatentRenewals from '../pages/PatentRenewals';
import ReactVirtualizedTable from '../pages/ReactVirtualizedTable';
import PatentRenewals from '../pages/PatentRenewals';


const SidebarRouting = () => (
  <Routes>
    <Route path="/dashboard" element={<Home />} />
    <Route path="/my-portfolio" element={<PatentRenewals/>} />
    <Route path="/my-renewals" element={<PatentRenewals />} />
    <Route path="/analytics-reports" element={<ReactVirtualizedTable />} />
    <Route path="/my-renewals-option-1" element={<PatentRenewals />} />
    {/* Add other routes as needed */}
  </Routes>
);

export default SidebarRouting;
