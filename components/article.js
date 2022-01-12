import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function Article() {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        padding: "16px 0 16px 0",
        alignItems: "center",
        gridTemplateColumns: "75px 2fr",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${"https://tinyurl.com/2p8n5kjx"})`,
          backgroundSize: "cover",
          height: "75px",
          borderRadius: 4,
        }}
      ></Box>
      <Box
        sx={{
          height: "75px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 2,
        }}
      >
        <h1 style={{ padding: 0, margin: 0 }}>This is the Blog Title</h1>

        <p style={{ padding: 0, margin: 0 }}>This is blog description</p>
      </Box>
    </Container>
  );
}
