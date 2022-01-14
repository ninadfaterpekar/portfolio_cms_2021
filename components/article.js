import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function Article(props) {
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
          backgroundImage: `url(${props.imgURL})`,
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
        <Link as={`/blog/${props.slug}`} href={`/blog/${props.slug}`}>
          {props.title}
        </Link>
        <p style={{ padding: 0, margin: 0 }}>{props.description}</p>
      </Box>
    </Container>
  );
}
