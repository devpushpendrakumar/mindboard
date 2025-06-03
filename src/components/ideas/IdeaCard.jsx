import React from "react";

function IdeaCard() {
  return (
    <div>
      <div>
        <h3>Goal</h3>
        <p>Idea Description/ Statement</p>
      </div>
      <div>
        <h3>Task</h3>
        <div>
          Map task and display with task card including todos
          {
            /* This is where the tasks related to the idea will be displayed */
            /* You can map through an array of tasks and display them here */
            // ["Task 1", "Task 2", "Task 3"].map((task, index) => (
            //     <div key={index} className="task-item">
            //     {task}
            //     </div>
            // ))
          }
        </div>
      </div>
    </div>
  );
}

export default IdeaCard;
