import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useContext } from "react";
import CurrencyInfo from "./components/CurrencyInfo/CurrencyInfo";
import Details from "./components/Details/Details";
import { DetailsContext } from "./context/details";

function App() {
  const { detailsVisibility } = useContext(DetailsContext);

  return (
    <Container sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Box
        display="flex"
        width={750}
        boxSizing="border-box"
        padding={3}
        border="1px solid #d9d9d9"
        borderRadius="15px"
        gap={3}
        height="fit-content"
      >
        <CurrencyInfo className="app_currency-info" />
        {detailsVisibility && <Details className="app__details" />}
      </Box>
    </Container>
  );
}

export default App;
