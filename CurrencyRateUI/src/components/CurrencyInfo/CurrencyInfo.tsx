import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useContext, useEffect, useState } from "react";
import Button from "tlp-ui-kit/dist/Button/Button";
import { CurrenciesContext } from "../../context/currencies";
import { DetailsContext } from "../../context/details";
import { SelectedCurrenciesContext } from "../../context/selectedCurrencies";
import useExchangeRate from "../../hooks/useExchangeRate";
import getCurrencyCodes from "../../utils/getCurrencyCodesList";
import Selector from "../Selector/Selector";

function CurrencyInfo() {
  const { currencies } = useContext(CurrenciesContext);
  const { detailsVisibility, setDetailsVisibility } =
    useContext(DetailsContext);
  const { payment, purchased } = useContext(SelectedCurrenciesContext);

  const [options, setOptions] = useState<string[]>([]);

  const [exchangeRate, exchangeDate] = useExchangeRate(
    payment.code,
    purchased.code
  );

  useEffect(() => {
    setOptions(getCurrencyCodes(currencies));
  }, [currencies]);

  return (
    <Stack>
      <Stack>
        <Typography color="#5e5e5e">
          1 {payment.name ?? "Loading..."} equals
        </Typography>
        <Typography variant="h5" color="#202020">
          {exchangeRate} {purchased.name ?? "Loading..."}
        </Typography>
        <Typography variant="caption" color="#5e5e5e">
          {new Date(exchangeDate).toLocaleString()}
        </Typography>
      </Stack>
      <Stack marginTop={8} gap={2}>
        <Selector
          id="payment"
          options={options}
          exchangeRate={parseFloat(exchangeRate)}
        />
        <Selector
          id="purchased"
          options={options}
          exchangeRate={parseFloat(exchangeRate)}
        />
      </Stack>
      <Button
        variant="contained"
        onClick={() => setDetailsVisibility(!detailsVisibility)}
        alignSelf="flex-end"
        marginTop={3}
      >
        {detailsVisibility ? "Less" : "More"} details
      </Button>
    </Stack>
  );
}

export default CurrencyInfo;
