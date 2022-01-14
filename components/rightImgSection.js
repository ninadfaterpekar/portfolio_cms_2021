import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function RightImgSection() {
  return (
    <Container
      maxWidth="md"
      sx={{ paddingTop: "32px", marginTop: "16px", marginBottom: "16px" }}
    >
      <Container
        sx={{
          display: "grid",
          width: "100%",
          height: "400px",
          gridTemplateColumns: "2fr 2fr",
          justifyContent: "center",
          padding: "0px",
          columnGap: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
            textAlign: "left",
          }}
        >
          <h1 style={{ paddingBottom: 4, margin: 0 }}>This is the Header</h1>
          <p style={{ padding: 0, margin: 0, fontSize: "14px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>
        </Box>
        <Box
          sx={{
            backgroundImage: `url("https://bit.ly/3Fw0llD")`,
            backgroundSize: "cover",
            borderRadius: 4,
            // margin: "0 auto",
          }}
        ></Box>
      </Container>
    </Container>
  );
}
