import { Box, TextField, Button, Typography } from "@mui/material";
import { styled } from "@mui/material";
import { useState } from "react";

const Component = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#482c3d",
});

const Wrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#a38893",
  padding: "2rem",
  borderRadius: "1rem",
});

const LoginButton = styled(Button)({
  marginTop: "1rem",
  backgroundColor: "#735453",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#634443",
  },
  width: "80%",
});

const SignupButton = styled(Button)({
  marginTop: "1rem",
  backgroundColor: "#e6dcdb",
  color: "#482c3d",
  "&:hover": {
    backgroundColor: "#f6dfdb",
  },
  width: "80%",
});

const Text = styled(Typography)({
  marginTop: "1rem",
  color: "#555",
  fontSize: "0.875rem",
  textAlign: "center",
});

const Login = () => {
  const [account, setAccount] = useState("login");

  const toggleOption = () => {
    setAccount((prev) => (prev === "login" ? "signup" : "login"));
  };

  console.log("Account type:", account);

  return (
    <Component>
      {account === "login" ? (
        <Wrapper>
          <TextField variant="standard" label="Username" />
          <TextField variant="standard" label="Password" />
          <LoginButton variant="contained">Login</LoginButton>
          <Text variant="body2" color="textSecondary" align="center">
            OR
          </Text>
          <SignupButton variant="outlined" onClick={() => toggleOption()}>
            New Account
          </SignupButton>
        </Wrapper>
      ) : (
        <Wrapper>
          <TextField variant="standard" label="Name" />
          <TextField variant="standard" label="Username" />
          <TextField variant="standard" label="Password" />
          <SignupButton variant="contained">Sign Up</SignupButton>
          <Text variant="body2" color="textSecondary" align="center">
            OR
          </Text>
          <LoginButton variant="outlined" onClick={() => toggleOption()}>
            Existing Account
          </LoginButton>
        </Wrapper>
      )}
    </Component>
  );
};
export default Login;
