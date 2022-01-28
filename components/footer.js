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
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 auto",
            maxWidth: "900px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <Typography
            variant="body1"
            color="inherit"
            style={{ fontSize: "1.5=8vw", color: "#1b1b1b" }}
          >
            © 2022 Ninad Faterpekar | ninad.faterpekar@gmail.com
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
