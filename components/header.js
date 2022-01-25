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
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "Black",
            }}
          >
            <Link to="/">Ninad Faterpekar</Link>
          </Typography>

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
              <MenuItem
                onClick={handleCloseNavMenu}
                linkbutton
                containerElement={<Link href="/" />}
              >
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              {/* <MenuItem
                onClick={handleCloseNavMenu}
                linkButton
                containerElement={<Link href="/blog" />}
              >
                <Typography textAlign="center">Blog</Typography>
              </MenuItem> */}
              <MenuItem
                onClick={handleCloseNavMenu}
                linkbutton
                containerElement={<Link href="/resume" />}
              >
                <Typography textAlign="center">Resume</Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color: "Black" }}
          >
            Ninad Faterpekar
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
                  color: "Black",
                  display: "block",
                }}
              >
                Home
              </Button>
            </Link>
            {/* <Link href="/blog" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: "Black", display: "block" }}
              >
                Blog
              </Button>
            </Link> */}
            <Link href="/resume" style={{ textDecoration: "none" }}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: "Black", display: "block" }}
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
