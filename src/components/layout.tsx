import React from "react";
import { Container, Stack, Box } from "@mui/material";
import BackgroundImg from "../assets/img/background.png";
import { useLocation } from "react-router-dom";

const Layout = ({ children }: { children: any }) => {
  const router = useLocation();
  return (
    <Stack sx={{ position: "relative" }}>
      {router.pathname != '/' &&
        < Box
          component="img"
          src={BackgroundImg}
          sx={{
            position: "absolute",
            height: "100vh",
            width: "100vw",
            zIndex: -1,
          }}
        ></Box>
      }
      <Container>{children}</Container>
    </Stack >
  );
};

export default Layout;
