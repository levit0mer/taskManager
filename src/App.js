import React, { useRef, useEffect, useState } from 'react';
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import { Button, TextField, Dropdown } from "@vibe/core";
import "@vibe/core/tokens"; // Load CSS tokens

import { BasicMap } from "@levit0mer/smartmaps";

function App() {
  const preConfiguredList = [
    // {
    //   name: "Pickup food",
    //   location: "Tel Aviv"
    // }, {
    //   name: "Visit the Western Wall",
    //   location: "Jerusalem"
    // }, {
    //   name: "Buy a house",
    //   location: "Haifa"
    // }, {
    //   name: "Go to Mosh Beach",
    //   location: "Eilat"
    // }
  ]

  const [loading, setLoading] = useState(true);
  const [tasks, setTasks] = useState(preConfiguredList); // Task list
  const [taskInput, setTaskInput] = useState(""); // Task name input
  const [location, setLocation] = useState(""); // Task location

  const locationOptions = [
    { label: "Eilat", value: "Eilat" },
    { label: "Jerusalem", value: "Jerusalem" },
    { label: "Tel Aviv", value: "Tel Aviv" },
    { label: "Haifa", value: "Haifa" },
  ];

  // Add a new task
  const addTask = () => {
    if (taskInput.trim() && location) {
      setTasks([...tasks, { name: taskInput, location: location.value }]);
      setTaskInput(""); // Clear task name input
      setLocation(""); // Clear location
    }
  };

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
          <ol>
            <li>Enter a task</li>
            <li>Choose the task location</li>
            <li>Click `Add Task`</li>
          </ol>

          {/* Add task name */}
          <TextField
            placeholder="Enter a task name"
            value={taskInput}
            onChange={(value) => setTaskInput(value)}
            style={{ marginBottom: "10px" }}
          />

          {/* Choose task location */}
          <Dropdown
            options={locationOptions}
            placeholder="Select location"
            value={location}
            onChange={(value) => setLocation(value)}
            style={{ marginBottom: "10px" }}
          />

          {/* Add Task Button */}
          <Button onClick={addTask} style={{ marginBottom: "20px" }}>
            Add Task
          </Button>

          {/* Display tasks */}
          <h2>Tasks</h2>
          {tasks.length === 0 && <p>No tasks found.</p>}
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task.name} - <strong>{task.location}</strong>
              </li>
            ))}
          </ul>
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
