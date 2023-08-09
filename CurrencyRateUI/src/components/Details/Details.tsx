import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { SelectedCurrenciesContext } from "../../context/selectedCurrencies";

function Details() {
  const { payment, purchased } = useContext(SelectedCurrenciesContext);

  return (
    <Stack gap={3}>
      <Box>
        <Typography variant="h5" color="#202020">
          {payment.name}, {payment.symbol}
        </Typography>
        <Typography variant="body1">{payment.description}</Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="#202020">
          {purchased.name}, {purchased.symbol}
        </Typography>
        <Typography variant="body1">{purchased.description}</Typography>
      </Box>
    </Stack>
  );
}

export default Details;
