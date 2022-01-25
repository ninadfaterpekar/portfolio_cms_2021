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
            backgroundImage: "url(/ninadPic.jpg)",
            backgroundSize: "cover",
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
          UX | UI Designer based in Hickory, NC. I write about UX design,
          Frontend Dev and Dogs.
        </Box>
      </Box>
    </Container>
  );
}
