import React from "react";
import Nav from "./components/Navbar";
import BookList from "./components/BookList";
import "./App.css";
import ThemeContextProvider from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import AuthContextProvider from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Nav />
          <BookList />
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
