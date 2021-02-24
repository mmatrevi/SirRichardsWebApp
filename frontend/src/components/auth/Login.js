import React from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import Nav from "../Nav";

function Login() {
  const history = useHistory();

  function Logoutfunction(event) {
    history.push("/");
  }

  const submit = async (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Nav />
      <center>
        <div className="container">
          <form onSubmit={submit}>
            <label>
              <h2>Signup </h2>
            </label>
            <label>
              <b>Username</b>
            </label>

            <input
              type="text"
              id="register-username"
              required
              placeholder="Enter Username"
            ></input>
            <br></br>

            <label>
              <b>Password</b>
            </label>

            <input
              type="password"
              id="register-password"
              required
              placeholder="Enter Password"
            ></input>
            <br></br>

            <button type="submit" value="register">
              SignUp
            </button>

            <button
              type="button"
              className="cancelbtn"
              onClick={Logoutfunction}
            >
              Cancel
            </button>
            <br></br>
          </form>
        </div>
      </center>
    </div>
  );
}

export default Login;
