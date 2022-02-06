import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";
import { borderBottom } from "@mui/system";

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "transparent",
        boxShadow: "none",
        borderBottom: "1.1px solid #e5e5e5",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link
            href="/"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <img height="60" src="/Logo/whole_horizontalMain.png" />
          </Link>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              color: "Black",
            }}
          >
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <Link
                href="/"
                sx={{
                  textDecoration: "none !important",
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    sx={{
                      color: "#336699",
                      display: "block",
                    }}
                  >
                    Home
                  </Button>
                </MenuItem>
              </Link>
              <Link
                href="/resume"
                sx={{
                  textDecoration: "none !important",
                }}
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Button
                    sx={{
                      color: "#336699",
                      display: "block",
                    }}
                  >
                    Resume
                  </Button>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
          <Typography>
            <Link
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            >
              <img src="/Logo/whole_horizontalMain.png" height="60" />
            </Link>
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{
                  color: "#336699",
                  display: "block",
                }}
              >
                Home
              </Button>
            </Link>
            <Link href="/resume" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: "#336699", display: "block" }}
              >
                Resume
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
