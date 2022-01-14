import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { fontSize } from "@mui/system";

export default function Intro() {
  return (
    <Container
      maxWidth="md"
      sx={{ paddingTop: "24px", display: "flex", flexDirection: "column" }}
    >
      <Box
        className="HelloUnited"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "teal",
            height: "75px",
            width: "75px",
            borderRadius: "50% 50%",
            marginRight: "16px",
          }}
        />
        <Box
          sx={{
            fontSize: 56,
          }}
        >
          Ninad Faterpekar
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            fontSize: 16,
            padding: "16px 0 16px 0",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Box>
      </Box>
    </Container>
  );
}
