import { useContext } from "react";
import { Box, Container } from "tlp-ui-kit";
import CurrencyInfo from "./components/CurrencyInfo/CurrencyInfo";
import Details from "./components/Details/Details";
import { DetailsContext } from "./context/details";

function App() {
  const { detailsVisibility } = useContext(DetailsContext);

  return (
    <Container display="grid" placeItems="center" height="100vh">
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
        <CurrencyInfo />
        {detailsVisibility && <Details />}
      </Box>
    </Container>
  );
}

export default App;
