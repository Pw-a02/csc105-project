import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function MaterialUIPickers() {
  // The first commit of Material-UI
  const [selectedCheckinDate, setSelectedCheckinDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const [selectedCheckoutDate, setSelectedCheckoutDate] = React.useState(
    new Date("2014-08-18T21:11:54")
  );

  const handleCheckinDateChange = (date) => {
    setSelectedCheckinDate(date);
  };

  const handleCheckoutDateChange = (date) => {
    setSelectedCheckoutDate(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Check-in"
          value={selectedCheckinDate}
          onChange={handleCheckinDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Check-out"
          value={selectedCheckoutDate}
          onChange={handleCheckoutDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
