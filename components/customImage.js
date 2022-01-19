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
        width: "800px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
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
