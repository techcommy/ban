import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
  Divider,
} from "@mui/material";

import { BankData, BankDataInterface } from "../config";

const DetailsPage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<BankDataInterface>();

  useEffect(() => {
    if (id) {
      const data = BankData.find(
        (item: BankDataInterface) => item.id === Number(id)
      );
      setDetails(data);
    }
  }, [id]);

  return (
    <Box py={10}>
      <Stack spacing={3}>
        <Grid container spacing={5} justifyContent="center">
          <Grid md={6} sm={8} xs={12} item>
            <Stack justifyContent="center">
              <Stack alignItems="center">
                <Box
                  component="img"
                  sx={{ height: "50px" }}
                  src={details?.img}
                ></Box>
              </Stack>

              <Stack spacing={2} pt={15}>
                <TextField fullWidth variant="outlined" placeholder="User ID" />
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="PIN"
                  type="password"
                />

                <Typography sx={{ color: "white" }}>
                  Forgot&nbsp;
                  <span style={{ textDecoration: "underline" }}>User ID</span>
                  &nbsp;or&nbsp;
                  <span style={{ textDecoration: "underline" }}>PIN</span>
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    background: "#ff0000a3",
                    height: "50px",
                    boxShadow: "none",
                    "&:hover": {
                      background: "#ff0000a3",
                      boxShadow: "none",
                    },
                  }}
                  fullWidth
                >
                  LOG IN
                </Button>

                <Divider sx={{ color: "white" }}>New to digibank?</Divider>

                <Button
                  variant="outlined"
                  sx={{
                    background: "transparent",
                    height: "50px",
                    color: "black",
                    boxShadow: "none",
                    "&:hover": {
                      background: "transparent",
                      boxShadow: "none",
                    },
                  }}
                  fullWidth
                >
                  GET Started
                </Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default DetailsPage;
