import { useState } from "react";
import { TextField, Button, List, ListItem, ListItemText } from "@mui/material";

const Sidebar = ({ tasks, onAddTask }) => {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim()) {
      onAddTask({ id: Date.now(), text: newTask, date: new Date() });
      setNewTask("");
    }
  };

  return (
    <div>
      <TextField
        label="New Task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        fullWidth
      />
      <Button variant="contained" onClick={handleAddTask} fullWidth>
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem key={task.id}>
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;