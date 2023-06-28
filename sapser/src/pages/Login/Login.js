import React from "react";
import Box from "@mui/material/Box";
import LoginPageImage from "../../asset/images/LoginPageImage.jpg";
import { Button, TextField, Typography } from "@mui/material";
// import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
// import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import GoogleLogo from "../../asset/images/GoogleLogo.png";
import axios from "axios";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleLogin = () => {
    if (email === "") {
      setError("*Please enter your email id");
      emailRef.current.focus();
    } else if (password === "") {
      setError("*Please enter your password");
      passwordRef.current.focus();
    } else {
      setError("");
    }
  };

  //   const handleGoogleLogin = useGoogleLogin({
  //     onSuccess: async (tokenResponse) => {
  //       console.log(tokenResponse);
  //       const userInfo = await axios.get(
  //         "https://www.googleapis.com/oauth2/v3/userinfo",
  //         { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
  //       );

  //       console.log(userInfo);
  //     },
  //     onError: (errorResponse) => console.log(errorResponse),
  //   });

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        boxSizing: "border-box",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "55%",
          height: "90%",
          display: "flex",
        }}
      >
        <Box sx={{ width: "50%", height: "100%" }}>
          <img
            src={LoginPageImage}
            alt="Login Image"
            width="100%"
            height="100%"
          />
        </Box>
        <Box
          sx={{
            width: "50%",
            height: "100%",
            display: "flex",
            // border: "1px solid black",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "90%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  letterSpacing: "0.15rem",
                  fontSize: "1.5rem",
                  fontStyle: "italic",
                  fontWeight: "700",
                }}
              >
                SAPSER
              </Typography>
            </Box>
            <Box sx={{ mt: "4rem", width: "80%" }}>
              <TextField
                size="small"
                className="textField"
                id="email"
                label="Email Id"
                variant="outlined"
                value={email}
                inputRef={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "black",
                    },
                  "& label.Mui-focused": {
                    color: "black",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "0.7rem", width: "80%" }}>
              <TextField
                size="small"
                className="textField"
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                value={password}
                inputRef={passwordRef}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: "black",
                    },
                  "& label.Mui-focused": {
                    color: "black",
                  },
                }}
              />
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <Typography
                sx={{
                  color: "red",
                  fontSize: "0.9rem",
                  fontWeight: "400",
                }}
              >
                {error}
              </Typography>
            </Box>
            <Box sx={{ width: "80%", mt: "1rem" }}>
              <Button
                onClick={handleLogin}
                variant="contained"
                sx={{
                  width: "100%",
                  backgroundColor: "#03059bfa",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "#03059bfa",
                  },
                }}
              >
                Log In
              </Button>
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <Typography>OR</Typography>
            </Box>
            <Box sx={{ mt: "1rem", width: "80%" }}>
              <Button
                variant="contained"
                disableElevation
                // onClick={handleGoogleLogin}
                sx={{
                  width: "100%",
                  padding: "0.7rem",
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                  backgroundColor: "white",
                  border: "1px solid black",
                  textTransform: "initial",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
              >
                <Box
                  sx={{
                    width: "1.4rem",
                    height: "1.4rem",
                    marginRight: "1rem",
                  }}
                >
                  <img src={GoogleLogo} width="100%" height="100%"></img>
                </Box>
                <Typography>Continue with Google</Typography>
              </Button>
            </Box>
            <Box sx={{ mt: "1rem" }}>
              <Typography sx={{ fontSize: "0.8rem" }}>
                <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                  Forgotten your password?
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: "2rem" }}>
              <Typography sx={{ fontSize: "1rem" }}>
                Don't have an account?&nbsp;
              </Typography>
              <Typography sx={{ fontSize: "1rem" }}>
                <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
                  Sign Up
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
