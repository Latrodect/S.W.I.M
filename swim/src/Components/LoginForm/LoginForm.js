import React, { useState } from "react";
import { Button, Box, TextField, Stack } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";

function LoginForm({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
    onLogin(username, password);
  };

  return (
    <div>
      <Stack
        direction="column"
        spacing={2}
        sx={{ width: "400px" }}
        alignItems="center"
        justifyContent="center"
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <AccountCircle sx={{ color: "orange", mr: 1, my: 0.5 }} />
          <TextField
            required
            sx={{ color: "#313131", width: "250px" }}
            id="outlined-required"
            label="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Box>
        <Box
          sx={{ display: "flex", borderRadius: "5px", alignItems: "center" }}
        >
          <LockIcon sx={{ color: "orange", mr: 1, my: 0.5 }} />
          <TextField
            required
            sx={{ color: "#313131", width: "250px" }}
            id="outlined-required"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <Button
            variant="outlined"
            sx={{
              background:
                "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
              color: "white",
              width: "200px",
              height: "50px",
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
      </Stack>
    </div>
  );
}

export default LoginForm;
