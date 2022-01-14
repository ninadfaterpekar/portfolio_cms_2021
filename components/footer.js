import Container from "./container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";

import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <AppBar
      style={{
        background: "transparent",
        boxShadow: "none",
        borderTop: "1px solid #e5e5e5",
        color: "black",
        bottom: 0,
      }}
      position="static"
    >
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2022 Ninad Faterpekar
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
