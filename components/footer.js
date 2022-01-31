import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Tooltip from "@mui/material/Tooltip";

export default function Footer() {
  return (
    <AppBar
      style={{
        background: "transparent",
        boxShadow: "none",
        borderTop: "1px solid #e5e5e5",
        color: "black",
        bottom: 0,
      }}
      position="static"
    >
      <Container maxWidth="md" sx={{ padding: "0 !important" }}>
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body1"
            color="inherit"
            style={{
              fontSize: "16px",
              color: "#1b1b1b",
              "@media(maxWidth: 620px)": {
                fontSize: "12px",
              },
            }}
          >
            © 2022 Ninad Faterpekar
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "120px",
              justifyContent: "space-between",
              "& img": {
                width: "24px",
                height: "24px",
              },
            }}
          >
            <Tooltip title="ninad.faterpekar@gmail.com" placement="top" arrow>
              <EmailIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("mailto:ninad.faterpekar@gmail.com", "_top")
                }
                color="primary"
              />
            </Tooltip>
            <Tooltip title="/ninadfaterpekar" placement="top" arrow>
              <LinkedInIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/ninadfaterpekar/",
                    "_blank"
                  )
                }
                sx={{ color: "#0077B5" }}
              />
            </Tooltip>

            <Tooltip title="@ninadfaterpekar" placement="top" arrow>
              <TwitterIcon
                style={{ cursor: "pointer" }}
                onClick={() =>
                  window.open("https://twitter.com/ninadfaterpekar", "_blank")
                }
                sx={{ color: "#08a0e9" }}
              />
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
