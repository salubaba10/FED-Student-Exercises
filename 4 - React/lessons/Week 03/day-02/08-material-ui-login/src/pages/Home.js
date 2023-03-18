import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Home = () => {
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
        Home Page
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is the home page.
      </Typography>
    </Box>
  );
};
