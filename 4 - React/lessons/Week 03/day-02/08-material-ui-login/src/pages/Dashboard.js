import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Dashboard = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        padding: 5,
        margin: 5,
        border: "1px solid black",
      }}
    >
      <Typography variant="h1" gutterBottom>
        Dashboard Page
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is the dashboard page.
      </Typography>
    </Box>
  );
};
