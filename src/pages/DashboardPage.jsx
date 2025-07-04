import { useState } from "react";
import { Container, Grid } from "@mui/material";
import Sidebar from "../components/Sidebar";
import CalendarView from "../components/calenderView";
import SearchBar from "../components/SearchBar";

const DashboardPage = ({ user }) => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Sidebar tasks={filteredTasks} onAddTask={handleAddTask} />
        </Grid>
        <Grid item xs={12} md={8}>
          <SearchBar onSearch={handleSearch} />
          <CalendarView tasks={filteredTasks} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default DashboardPage;