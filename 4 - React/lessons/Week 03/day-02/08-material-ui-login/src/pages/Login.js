import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { LoginForm } from "../components/LoginForm";

export const Login = () => {
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
        Login Page
      </Typography>
      <Typography variant="h2" gutterBottom>
        This is the login page.
      </Typography>
      <LoginForm />
    </Box>
  );
};
