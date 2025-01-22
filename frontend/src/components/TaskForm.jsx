import React, { useState } from "react";
import axios from "axios";


const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
    const [status, setStatus] = useState("pending");
    const [priority, setPriority] = useState("medium");
    const [createdAt, setCreatedAt] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTask = {
        title,
        description,
        status,
        priority,
        createdAt
    };

    try {
      const response = await axios.post(
        "http://localhost:5001/add",
        newTask
      );
      console.log("Task added:", response.data);
      
      setTitle("");
      setDescription("");
        setStatus("");
        setPriority("");
        setCreatedAt("");
    } catch (error) {
      console.error("Error adding Task:", error);
    }
  };

  return (
    <div>
      <div>
        <h1>Add Task</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Status:</label>
            <input
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Priority:</label>
            <input
              type="text"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Date:</label>
            <input
              type="date"
              value={createdAt}
              onChange={(e) => setCreatedAt(e.target.value)}
              required
            />
          </div>

          <button type="submit">Add task</button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
