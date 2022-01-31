import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { fontSize } from "@mui/system";

export default function Intro() {
  return (
    <Container
      className="HelloUnited"
      maxWidth="md"
      sx={{
        padding: "24px 0 0 0 !important",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
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
            height: "100px",
            width: "110px",
            borderRadius: "50% 50%",
            marginRight: "16px",
            whiteSpace: "nowrap",
            "@media(max-width: 620px)": {
              height: "75px",
              width: "75px",
            },
          }}
        />
        <Box
          sx={{
            fontSize: "3vw",
            fontWeight: 500,
            color: "Black",
            "@media(max-width: 620px)": {
              fontSize: "7vw",
            },
          }}
        >
          Ninad Faterpekar
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            fontSize: 14,
            color: "#1b1b1b",
            padding: "16px 0 16px 0",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          UX | UI Designer based in Hickory, NC. I write about UX Design,
          Frontend Dev and Dogs.{" "}
          {/* <span>
            <a href="/resume">Learn more</a>
          </span> */}
        </Box>
      </Box>
    </Container>
  );
}
