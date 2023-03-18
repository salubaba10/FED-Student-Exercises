import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

export const NavigationBarMobile = ({ open, handleClose, pages }) => {
  return (
    <Drawer anchor="top" open={open} onClose={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {pages.map(({ label }) => (
          <Button
            key={label}
            onClick={handleClose}
            sx={{ py: 2, display: "block" }}
          >
            {label}
          </Button>
        ))}
      </Box>
    </Drawer>
  );
};
