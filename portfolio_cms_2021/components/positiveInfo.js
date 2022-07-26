import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import ideaicon from "../pages/icons/idea.png";

export default function PositiveInfo(props) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        bgcolor: "#dbf3fa",
        padding: "16px 0 16px 0",
        justifyContent: "center",
        gridTemplateRow: "1fr 2fr",
        borderBottom: "2px solid blue",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", gap: "8px" }}>
        <img src={ideaicon} />
        <h3 style={{ paddingBottom: 4, margin: 0 }}>This is the Header</h3>
      </Box>
      <Box>
        <p style={{ padding: 0, margin: 0, fontSize: "14px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </Box>
    </Container>
  );
}
