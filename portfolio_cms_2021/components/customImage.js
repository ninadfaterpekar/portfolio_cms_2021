import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "next/link";

export default function CustomImage({ src = "", alt }) {
  if (!src) {
    return null;
  }
  return (
    <div
      style={{
        maxWidth: "800px",
        border: "0.5px solid #e5e5e5",
        borderRadius: 5,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{ maxHeight: "100%", maxWidth: "100%" }}
      />
    </div>
  );
}
