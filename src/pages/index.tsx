import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

import { BankData, BankDataInterface } from "../config";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box py={10}>
      <Stack spacing={3}>
        <Grid container spacing={5}>
          <Grid md={12} item>
            <Stack spacing={2}>
              <Typography variant="h5">Choose Payment Method</Typography>
              <Button
                variant="contained"
                sx={{
                  background: "#17CE7E",
                  textTransform: "none",
                  height: "50px",
                  boxShadow: "none",
                  "&:hover": {
                    background: "#17CE7E",
                    boxShadow: "none",
                  },
                }}
                fullWidth
              >
                Internet Banking FPX
              </Button>
            </Stack>
          </Grid>

          {BankData.map((item: BankDataInterface, key: number) => {
            return (
              <Grid item md={3} sm={4} xs={6} key={key}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    height: "80px",
                    borderColor: "#0000003d",
                    padding: "12px",
                  }}
                  onClick={() => navigate(`/detail/${item.id}`)}
                >
                  <Box
                    component="img"
                    sx={{ maxWidth: "100%", maxHeight: "100%" }}
                    src={item.img}
                    alt={item.name}
                  ></Box>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </Box>
  );
};

export default Dashboard;
