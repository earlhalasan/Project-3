import "./App.css";
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import NoteIndexPage from "../NoteIndexPage/NoteIndexPage";
import TodoIndexPage from "../TodoIndexPage/TodoIndexPage";
import TodoNewPage from "../TodoNewPage/TodoNewPage";
import CategoryIndexPage from "../CategoryIndexPage/CategoryIndexPage";
import HomePage from "../HomePage/HomePage";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main>
      {user ? (
        <>
          <div className="App flex flex-row">
            <NavBar user={user} setUser={setUser} />
            <Routes>
              <Route path="/notes" element={<NoteIndexPage />} />
              <Route path="/todos" element={<TodoIndexPage />} />
              <Route path="/todos/new" element={<TodoNewPage />} />
              <Route path="/categories" element={<CategoryIndexPage />} />
              <Route path="/" element={<HomePage user={user} />} />
              {/* redirect to Homepage if path in address bar hasn't matched a <Route> above */}
              {/* <Route path="/*" element={<Navigate to="/" />} /> */}
            </Routes>
          </div>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
