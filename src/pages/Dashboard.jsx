import { useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardTable from "../components/DashboardTable";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Sidebar - visible on md and up */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:shadow-none`}
      >
        <Sidebar />
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div className="flex-1 flex flex-col">
        {/* Mobile top bar with hamburger */}
        <header className="flex items-center justify-between bg-white p-4 shadow md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-label="Open sidebar"
          >
            {/* Hamburger icon */}
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <h1 className="text-xl font-bold text-gray-800">Articles</h1>
          <div /> {/* empty div for spacing */}
        </header>

        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          {/* On desktop, show title here */}
          <h1 className="hidden md:block text-3xl font-bold text-gray-800 mb-6 text-center">
            Articles
          </h1>
          <DashboardTable />
        </main>
      </div>
    </div>
  );
}
