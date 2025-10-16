import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Message from "./components/Message"
import Home from './components/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex gap-4 p-4 bg-gray-800 text-white">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/message" 
            className={({ isActive }) =>
              isActive ? "text-yellow-400 font-bold" : "hover:text-yellow-200"
            }
          >
            Message
          </NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/message" element={<Message />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
