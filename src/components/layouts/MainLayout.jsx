import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Sidebar from './sidebar';

const MainLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#f9f9ff] overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 min-w-0 bg-[#f9f9ff]">
        {/* Navbar */}
        <Navbar />

        {/* Scrollable Main View (Padding removed so children align edge-to-edge) */}
        <main className="flex-1 overflow-y-auto bg-[#f9f9ff]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;