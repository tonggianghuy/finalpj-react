import React from 'react';
import { BrowserRouter as Router, Route, } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar"
import Books from "./pages/Books.js"
import Home from "./pages/Home.js"
import Signup from "./pages/Signup.js"

import { CartProvider } from "./contexts/Cart"


const User = () => <h2>User</h2>

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/" exact component={Home} />
          <Route path="/books" exact component={Books} />
          <Route path="/user" exact component={User} />
          <Route path="/signup" exact component={Signup} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
