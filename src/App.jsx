import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/Home'
import Message from './components/Message'
import Contact from './components/Contact'
import Settings from './components/Setting'

// Sidebar layout
function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white border-r-4 border-gray-200 flex flex-col p-6 fixed">
      <h1 className="text-xl font-bold text-gray-800 mb-8">My College</h1>

      <nav className="flex flex-col gap-2 text-gray-700">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`
          }
        >
        
          Contacts
        </NavLink>

        <NavLink
          to="/message"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`
          }
        >
         
          Messages
        </NavLink>

        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive ? 'bg-blue-50 text-blue-600 font-semibold' : ''
            }`
          }
        >
          
          Settings
        </NavLink>
      </nav>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 ml-64 p-8 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
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
