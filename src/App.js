import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import PplCards from "./Components/PplCards";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("https://reqres.in/api/users?page=2");
      setUsers(data);
        console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <h2>Image Gallery with Mui</h2>
      <Grid container spacing={10} style={{ pading: "2" }}>
        {users.map((user) => (
        <Grid item xm={12} ms={6} md={4} lg={4} xl={3}   key={user.id}>
            <PplCards
              key={user.id}
              image={user.avatar}
               email={user.email}
              firstName={user.first_name}
              lastName={user.last_name}
            />
          </Grid>
           ))}
      </Grid>
    </div>
  );
}

export default App;
