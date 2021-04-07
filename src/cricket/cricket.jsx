import React, { useEffect, useState } from 'react';
// import logo from "../img/vs.png";
//import "./App.css";
import Navbar from "../components/Navbar";
import MyCard from "../components/Mycard";
import { getMatches } from "../api/cricket_matches_api";
import { Container, Grid, Typography } from "@material-ui/core";
function Cricket() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log(data);
        setMatches(data.matches);
      })
      .catch((error) => {});
  }, []);

  return (
    <div className="App">
      <Navbar></Navbar>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            {matches.map((match) => (
              <MyCard match={match}></MyCard>
            ))}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Cricket;