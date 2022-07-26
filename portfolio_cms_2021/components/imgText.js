import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function ImgText(props) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "grid",
        padding: "16px",
        alignItems: "left",
        gridTemplateRows: "2fr 400px 1fr",
        marginTop: "16px",
        marginBottom: "16px",
      }}
    >
      <Box
        sx={{
          height: "75px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          paddingBottom: "8px",
        }}
      >
        <h1 style={{ paddingBottom: 4, margin: 0 }}>{props.header}</h1>
        <p style={{ margin: 0, fontSize: "14px" }}>{props.description}</p>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${props.imgURL})`,
          backgroundSize: "cover",
          borderRadius: 4,
        }}
      ></Box>

      {props.bottomDescription && (
        <Box
          sx={{
            display: "flex",
          }}
        >
          {" "}
          <p style={{ padding: 0, margin: 0, fontSize: "14px" }}>
            {props.bottomDescription}
          </p>
        </Box>
      )}
    </Container>
  );
}
