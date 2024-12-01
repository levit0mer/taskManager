import React, { useRef, useEffect, useState } from 'react';
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { Button, TextField, Dropdown } from "@vibe/core";
import "@vibe/core/tokens"; // Load CSS tokens

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }


  return (
    <>
      <Navbar />
      <div style={{margin: "auto" }}>
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
          <h1>Your Simple Task Manager</h1>
        </div>
      </div>
    </>
  );
}

export default App;
