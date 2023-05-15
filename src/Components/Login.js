import React, { useState, setError } from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import { Button } from "@mui/material";
// import { useNavigate } from "react-router-dom";
import UserShow from "./UserShow";
import "../index.css";
import axios from "axios";
import { Box, Paper, Button } from "@mui/material";

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSumbit = (event) => {
    console.log("in handleSubmit");
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then((response) => {
        axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        localStorage.setItem("user_id", response.data.user_id);
        const user_id = window.localStorage.getItem(`user_id`);
        event.target.reset();
        event.preventDefault();
        window.location.href = "/profile"; //change this to hide a model, redirect to a specific page etc.
      })
      .catch((error) => {
        console.log(error.reponse);
        setError(["Invalid Email or Password"]);
      });
  };

  return (
    // ORIGINAL LOGIN COMPONENT
    // <div id="login">
    //   <h1> Login</h1>
    //   <ul>
    //     {errors.map((error) => (
    //       <li key={error}> {error}</li>
    //     ))}
    //   </ul>
    //   <form onSubmit={handleSumbit}>
    //     <div>
    //       Email: <input name="email" type="email" />
    //     </div>
    //     <div>
    //       Password: <input name="password" type="password" />
    //     </div>
    //     <button type="submit">Login</button>
    //   </form>
    //   <br />
    //   <br />

    //   {/* user_id currently logged in: {user} */}
    //   {/* <UserShow user={user}/> */}
    //   {/* #need to padd user to UserShow */}
    // </div>

    // 2ND ITERATION
    // <Box
    //   sx={{
    //     display: "flex",
    //     justifyContent: "center",
    //     marginTop: "50px",
    //   }}
    // >
    //   <form>
    //     {/* <!-- Email input --> */}
    //     <div class="form-outline mb-4">
    //       <input type="email" id="form2Example1" class="form-control" />
    //       <label class="form-label" for="form2Example1">
    //         Email address
    //       </label>
    //     </div>

    //     {/* <!-- Password input --> */}
    //     <div class="form-outline mb-4">
    //       <input type="password" id="form2Example2" class="form-control" />
    //       <label class="form-label" for="form2Example2">
    //         Password
    //       </label>
    //     </div>

    //     {/* <!-- 2 column grid layout for inline styling --> */}
    //     <div class="row mb-4">
    //       <div class="col d-flex justify-content-center">
    //         {/* <!-- Checkbox --> */}
    //         <div class="form-check">
    //           <input
    //             class="form-check-input"
    //             type="checkbox"
    //             value=""
    //             id="form2Example31"
    //             checked
    //           />
    //           <label class="form-check-label" for="form2Example31">
    //             {" "}
    //             Remember me{" "}
    //           </label>
    //         </div>
    //       </div>

    //       <div class="col">
    //         {/* <!-- Simple link --> */}
    //         <a href="#!">Forgot password?</a>
    //       </div>
    //     </div>

    //     {/* <!-- Submit button --> */}
    //     <button type="button" class="btn btn-primary btn-block mb-4">
    //       Sign in
    //     </button>

    //     {/* <!-- Register buttons --> */}
    //     <div class="text-center">
    //       <p>
    //         Not a member? <a href="#!">Register</a>
    //       </p>
    //       <p>or sign up with:</p>
    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-facebook-f"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-google"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-twitter"></i>
    //       </button>

    //       <button type="button" class="btn btn-link btn-floating mx-1">
    //         <i class="fab fa-github"></i>
    //       </button>
    //     </div>
    //   </form>
    // </Box>

    // 3rd ITERATION W/REGISTER
    <>
      {/* // <!-- Pills navs --> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          flexDirection: "column",
        }}
      >
        <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              role="tab"
              aria-controls="pills-login"
              aria-selected="true"
            >
              Login
            </a>
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="tab-register"
              data-mdb-toggle="pill"
              href="#pills-register"
              role="tab"
              aria-controls="pills-register"
              aria-selected="false"
            >
              Register
            </a>
          </li>
        </ul>
        {/* // <!-- Pills navs --> */}
        {/* // <!-- Pills content --> */}
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form>
              <div class="text-center mb-3">
                <p>Sign in with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

              <p class="text-center">or:</p>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="loginName" class="form-control" />
                <label class="form-label" for="loginName">
                  Email or username
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  class="form-control"
                />
                <label class="form-label" for="loginPassword">
                  Password
                </label>
              </div>

              {/* <!-- 2 column grid layout --> */}
              <div class="row mb-4">
                <div class="col-md-6 d-flex justify-content-center">
                  {/* <!-- Checkbox --> */}
                  <div class="form-check mb-3 mb-md-0">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      checked
                    />
                    <label class="form-check-label" for="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div class="col-md-6 d-flex justify-content-center">
                  {/* <!-- Simple link --> */}
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-4">
                Sign in
              </button>

              {/* <!-- Register buttons --> */}
              <div class="text-center">
                <p>
                  Not a member? <a href="#!">Register</a>
                </p>
              </div>
            </form>
          </div>
          <div
            class="tab-pane fade"
            id="pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form>
              <div class="text-center mb-3">
                <p>Sign up with:</p>
                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-facebook-f"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-google"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-twitter"></i>
                </button>

                <button type="button" class="btn btn-link btn-floating mx-1">
                  <i class="fab fa-github"></i>
                </button>
              </div>

              <p class="text-center">or:</p>

              {/* <!-- Name input --> */}
              <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" />
                <label class="form-label" for="registerName">
                  Name
                </label>
              </div>

              {/* <!-- Username input --> */}
              <div class="form-outline mb-4">
                <input type="text" id="registerUsername" class="form-control" />
                <label class="form-label" for="registerUsername">
                  Username
                </label>
              </div>

              {/* <!-- Email input --> */}
              <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" />
                <label class="form-label" for="registerEmail">
                  Email
                </label>
              </div>

              {/* <!-- Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerPassword">
                  Password
                </label>
              </div>

              {/* <!-- Repeat Password input --> */}
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  class="form-control"
                />
                <label class="form-label" for="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              {/* <!-- Checkbox --> */}
              <div class="form-check d-flex justify-content-center mb-4">
                <input
                  class="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  checked
                  aria-describedby="registerCheckHelpText"
                />
                <label class="form-check-label" for="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              {/* <!-- Submit button --> */}
              <button type="submit" class="btn btn-primary btn-block mb-3">
                Sign in
              </button>
            </form>
          </div>
        </div>
      </Box>
      {/* // <!-- Pills content --> */}
    </>
  );
}

export default Login;
