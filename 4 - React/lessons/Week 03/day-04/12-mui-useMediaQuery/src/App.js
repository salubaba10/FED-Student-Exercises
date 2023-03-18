import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { BannerCard } from "./components/BannerCard";
import { NavigationBar } from "./components/NavigationBar";

export const App = () => {
  return (
    <Box>
      <NavigationBar />
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { sm: "column", md: "row" },
          flexWrap: "wrap",
          justifyContent: "space-around",
          my: 3,
        }}
      >
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
        <BannerCard />
      </Container>
    </Box>
  );
};
