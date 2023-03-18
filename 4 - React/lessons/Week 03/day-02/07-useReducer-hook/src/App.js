import Container from "@mui/material/Container";

import { Banner } from "./components/Banner";
import { Converter } from "./components/Converter";

export const App = () => {
  return (
    <Container maxWidth="xl">
      <Banner />
      <Converter />
    </Container>
  );
};
