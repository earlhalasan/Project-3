import './App.css';
import { useState } from 'react'
import AuthPage from '../AuthPage/AuthPage';
import NoteIndexPage from '../NoteIndexPage/NoteIndexPage';
import HomePage from '../HomePage/HomePage';
import { Routes, Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service'

export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ?
      <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/notes" element={<NoteIndexPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
      </>
      :
      <AuthPage setUser={setUser} />}
    </main>
  );
}
