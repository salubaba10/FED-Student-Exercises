import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Banner = () => {
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
        Convertor App
      </Typography>
      <Typography variant="h2" gutterBottom>
        Convert your measurements
      </Typography>
    </Box>
  );
};
