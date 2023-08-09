import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useContext, useEffect } from "react";
import { CurrenciesContext } from "../../context/currencies";
import { SelectedCurrenciesContext } from "../../context/selectedCurrencies";
import getCurrencyByCode from "../../utils/getCurrencyByCode";

type SelectorProps = {
  id: "payment" | "purchased";
  options: string[];
  exchangeRate: number;
};

function Selector({ id, options, exchangeRate }: SelectorProps) {
  const { payment, purchased, setPayment, setPurchased } = useContext(
    SelectedCurrenciesContext
  );
  const { currencies } = useContext(CurrenciesContext);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const quantity = parseFloat(parseFloat(event.target.value).toFixed(3));
    if (id === "payment") {
      if (!isNaN(quantity)) {
        setPayment({ ...payment, quantity });
        setPurchased({
          ...purchased,
          quantity: parseFloat((quantity * exchangeRate).toFixed(3)),
        });
      } else {
        setPayment({ ...payment, quantity: 0 });
        setPurchased({ ...purchased, quantity: 0 });
      }
    } else {
      if (!isNaN(quantity)) {
        setPurchased({ ...purchased, quantity });
        setPayment({
          ...payment,
          quantity: parseFloat((quantity / exchangeRate).toFixed(3)),
        });
      } else {
        setPurchased({ ...purchased, quantity: 0 });
      }
    }
  };

  const handleSelectChange = (event: ChangeEvent) => {
    if (
      event.target !== null &&
      "value" in event.target &&
      typeof event.target.value === "string"
    ) {
      const newCurrency = getCurrencyByCode(currencies, event.target.value);
      if (id === "payment") {
        setPayment({ ...newCurrency, quantity: payment.quantity });
      } else {
        setPurchased({ ...newCurrency, quantity: purchased.quantity });
      }
    }
  };

  useEffect(() => {
    if (id === "payment") {
      setPayment({ ...currencies[0], quantity: 0 });
    } else {
      setPurchased({ ...currencies[0], quantity: 0 });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, currencies]);

  useEffect(() => {
    setPurchased({
      ...purchased,
      quantity: parseFloat((payment.quantity * exchangeRate).toFixed(3)),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [exchangeRate]);

  return (
    <Box display="flex" width={350} height={50} alignItems="center">
      <TextField
        type="number"
        id={`${id}Input`}
        inputProps={{
          min: 0,
        }}
        size="small"
        value={(id === "payment" ? payment.quantity : purchased.quantity)
          .toString()
          .replace(/^0{2,}/, "")}
        onChange={handleInputChange}
      />
      <TextField
        id={`${id}Select`}
        select
        size="small"
        value={id === "payment" ? payment.code : purchased.code}
        onChange={handleSelectChange}
        sx={{
          flex: "1 1 auto",
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default Selector;
