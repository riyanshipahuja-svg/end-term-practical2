import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";


function Home() {
  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home Page</p>
    </div>
  );
}


function About() {
  return (
    <div>
      <h2>About Page</h2>
      <p>This is the About Page</p>
    </div>
  );
}


function Contact() {
  return (
    <div>
      <h2>Contact Page</h2>
      <p>This is the Contact Page</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h1>React Router Example</h1>

        {/* Navigation Links */}
        <nav>
          <Link to="/" style={{ margin: "10px" }}>
            Home
          </Link>

          <Link to="/about" style={{ margin: "10px" }}>
            About
          </Link>

          <Link to="/contact" style={{ margin: "10px" }}>
            Contact
          </Link>
        </nav>

        <hr />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
