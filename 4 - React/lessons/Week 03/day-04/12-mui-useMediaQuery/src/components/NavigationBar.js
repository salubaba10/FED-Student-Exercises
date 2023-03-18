import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useMediaQuery } from "@mui/material";

import { NavigationBarMobile } from "./NavigationBarMobile";

const pages = [
  { label: "Products", path: "/products" },
  { label: "Pricing", path: "/pricing" },
  { label: "Blog", path: "/blog" },
];

export const NavigationBar = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:899px)");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {isMobile && (
            <Box sx={{ display: "flex" }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>
          )}

          <NavigationBarMobile
            open={open}
            handleClose={handleClose}
            pages={pages}
          />

          {!isMobile && (
            <Box sx={{ display: "flex" }}>
              {pages.map(({ label }) => (
                <Button
                  key={label}
                  onClick={() => {}}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
