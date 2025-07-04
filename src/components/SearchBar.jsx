import { useState } from "react"; // ✅ Import useState
import { TextField } from "@mui/material";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <TextField
      label="Search Tasks"
      value={query}
      onChange={handleSearch}
      fullWidth
      margin="normal"
    />
  );
};

export default SearchBar;