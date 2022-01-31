import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function Article(props) {
  return (
    <Container
      className="RealShit"
      maxWidth="md"
      sx={{
        display: "grid",
        padding: "16px 0 16px 0 !important",
        alignItems: "center",
        gridTemplateColumns: "75px 2fr",
        "&:hover": {
          backgroundColor: "#ededed",
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
          "@media(max-width: 620px)": {
            "& p": {
              display: "none",
            },
            "& a": {
              fontSize: "16px !important",
            },
          },
        }}
      >
        <Link as={`/blog/${props.slug}`} href={`/blog/${props.slug}`}>
          <a
            style={{
              textDecoration: "none",
              fontSize: 18,
              fontWeight: 500,
              color: "#336699",
              "&:hover": {
                textDecoration: "underline !important",
              },
            }}
          >
            {props.title}
          </a>
        </Link>
        <p
          style={{
            paddingTop: "4px",
            margin: 0,
            color: "#424242",
            fontSize: 14,
          }}
        >
          {props.description}
        </p>
      </Box>
    </Container>
  );
}
