import React, { useRef, useEffect, useState } from 'react';
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { Button, TextField, Dropdown } from "@vibe/core";
import "@vibe/core/tokens"; // Load CSS tokens

import { BasicMap } from "@levit0mer/smartmaps";

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
        <div style={{ padding: "0", maxWidth: "100%", height: "400px", margin: "auto" }}>
          <BasicMap
            center={[34.7818, 32.0853]} // Longitude, Latitude of Tel Aviv
            zoom={12} // Adjust zoom for a closer view
          />
        </div>
      </div>
    </>
  );
}

export default App;
