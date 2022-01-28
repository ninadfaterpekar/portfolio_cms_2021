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
        "&:hover": {
          backgroundColor: "lightgrey",
        },
        "@media screen and (max-width: 480px)": {
          "& p": {
            display: "none",
          },
        },
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
          maxHeight: "75px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: 2,
        }}
      >
        <Link as={`/blog/${props.slug}`} href={`/blog/${props.slug}`}>
          <a
            style={{
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 600,
            }}
          >
            {props.title}
          </a>
        </Link>
        <p
          style={{
            paddingTop: "4px",
            margin: 0,
            color: "#1b1b1b",
            fontSize: 14,
          }}
        >
          {props.description}
        </p>
      </Box>
    </Container>
  );
}
