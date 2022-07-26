import React from "react";
import { pdfjs, Document, Page } from "react-pdf";
import Layout from "../components/layout";
import Box from "@mui/material/Box";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function Resume() {
  return (
    <Layout>
      <Box sx={{ border: "1px solid black", height: "80%" }}>
        <Document
          file={{
            url: "/resume.pdf",
          }}
          onLoadError={(e) =>
            console.log("Error while loading document! " + e.message)
          }
          onSourceError={(e) =>
            console.log("Error while loading document! " + e.message)
          }
        >
          <Page pageNumber={1} />
        </Document>
      </Box>
    </Layout>
  );
}
