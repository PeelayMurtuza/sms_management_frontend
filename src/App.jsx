import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Message from './components/Message'
import Contact from './components/Contact'
import Settings from './components/Setting'
import Dashboard from './components/Dashboard'

function Sidebar({ isOpen }) {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-white border-r-4 border-gray-200 flex flex-col p-6 transition-all duration-300 z-40
      ${isOpen ? 'w-64' : 'w-20'}`}
    >
      <h1
        className={`text-xl font-bold text-gray-800 mb-8 transition-all duration-300 overflow-hidden whitespace-nowrap ${
          isOpen ? 'opacity-100' : 'opacity-0 w-0'
        }`}
      >
        My College
      </h1>

      <nav className="flex flex-col gap-2 text-gray-700">
        {[
          { path: '/', label: 'Home' },
          { path: '/dashboard', label: 'Dashboard' },
          { path: '/contacts', label: 'Contacts' },
          { path: '/message', label: 'Messages' },
          { path: '/settings', label: 'Settings' },
        ].map((link, index) => (
          <NavLink
            key={index}
            to={link.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
                isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
              }`
            }
          >
            <span
              className={`transition-all duration-300 ${
                isOpen ? 'opacity-100' : 'opacity-0 w-0 hidden'
              }`}
            >
              {link.label}
            </span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

function App() {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => setIsOpen(!isOpen)

  return (
    <BrowserRouter>
      <div className="flex">
        {/* Toggle Button (Visible in both desktop & mobile) */}
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow-md hover:bg-blue-700 transition"
        >
          {isOpen ? '✖' : '☰'}
        </button>

        {/* Sidebar */}
        <Sidebar isOpen={isOpen} />

        {/* Main Content Area */}
        <div
          className={`flex-1 p-8 bg-gray-50 min-h-screen transition-all duration-300 ${
            isOpen ? 'ml-64' : 'ml-20'
          }`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/message" element={<Message />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
