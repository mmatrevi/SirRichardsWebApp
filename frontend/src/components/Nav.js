import React from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import { Grid } from "@material-ui/core";

export default function Nav() {
  const history = useHistory();

  const onClickRegister = (event) => {
    event.preventDefault();
    history.push("/register");
  };

  const onClickLogin = () => {
    history.push("/Login");
  };

  return (
    <nav className="top-nav">
      <>
        <div className="active">
          <b>
            <a href="/">SIR RICHARD</a>
          </b>
        </div>
        <Grid container>
          <Grid item className="SignUp" onClick={onClickRegister}>
            SignUp
          </Grid>
          <Grid item className="Login" onClick={onClickLogin}>
            Login
          </Grid>
        </Grid>
      </>
    </nav>
  );
}
