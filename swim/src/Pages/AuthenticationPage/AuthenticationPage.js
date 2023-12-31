import React from "react";
import LoginForm from "../../Components/LoginForm/LoginForm";
import { Box, Divider, Stack, Typography } from "@mui/material";

function AuthenticationPage() {
  const handleLogin = (username, password) => {
    // Implement your authentication logic here
    console.log("Logged in as:", username);
  };

  return (
    <Box
      sx={{
        backgroundColor: "white",
        width: "290px",
        borderRadius: "10px",
        padding: 7,
        height: "400px",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:
          "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
      }}
    >
      <Stack
        direction="column"
        spacing={3}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h3" sx={{ color: "#313131" }}>
          S.W.I.M
        </Typography>
        <Typography sx={{ color: "#313131", fontSize: "12px", mt: 2 }}>
          Manage your social apps with your voice.
        </Typography>
        <Divider />
        <LoginForm onLogin={handleLogin} />
      </Stack>
      <Typography sx={{ color: "#313131", fontSize: "12px", mt: 10 }}>
        All rights reserved <strong>@OldThiefStudio</strong>
      </Typography>
    </Box>
  );
}

export default AuthenticationPage;
