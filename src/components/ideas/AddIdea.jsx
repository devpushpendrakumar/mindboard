import React, { useState } from "react";

function NewIdea() {
  const [idea, setIdea] = useState("");

  const handleAutoTaskAdd = (e) => {
    e.preventDefault();
    console.log("Task generated automatically with AI");
  };

  const handleManualTaskAdd = (e) => {
    e.preventDefault();
    console.log("Task generated manually");
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Describe your new idea here..."
          value={idea}
          onChange={(e) => {
            setIdea(e.target.value);
          }}
        />
        <button type="submit" onClick={handleManualTaskAdd}>
          Add Task Manually
        </button>
        <button type="submit" onClick={handleAutoTaskAdd}>
          Add Task with AI
        </button>
      </form>
    </div>
  );
}

export default NewIdea;
