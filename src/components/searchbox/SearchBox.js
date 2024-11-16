import React, { useState } from "react";
import axios from "axios";
import "./searchbox.css";
import { Card, CardContent, Typography } from "@mui/material";
function SearchBox() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/user_profiles/user_data/?search=${query}`
      );
      console.log("res", response.data);
      setResults(response.data);
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-button" onClick={handleSubmit}>
        🔍
      </button>

      <div>
        {results.map((user) => (
          <Card key={user.id} className="user-card">
            <CardContent>
              <Typography variant="h6" component="p" className="user-name">
                {user.first_name} {user.last_name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default SearchBox;
