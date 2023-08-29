import { useContext } from "react";
import { Box, Stack, Typography } from "tlp-ui-kit";
import { SelectedCurrenciesContext } from "../../context/selectedCurrencies";

function Details() {
  const { payment, purchased } = useContext(SelectedCurrenciesContext);

  return (
    <Stack spacing={3}>
      <Box>
        <Typography variant="h5" color="#202020">
          {payment.name}, {payment.symbol}
        </Typography>
        <Typography>{payment.description}</Typography>
      </Box>
      <Box>
        <Typography variant="h5" color="#202020">
          {purchased.name}, {purchased.symbol}
        </Typography>
        <Typography>{purchased.description}</Typography>
      </Box>
    </Stack>
  );
}

export default Details;
