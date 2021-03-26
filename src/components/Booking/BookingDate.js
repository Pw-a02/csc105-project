import DateFnsUtils from "@date-io/date-fns";
import { Box, Grid } from "@material-ui/core";
import {
	KeyboardDatePicker,
	MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import React from "react";

const BookingDate = () => {
	const [checkInDate, setCheckInDate] = React.useState(new Date());
	const [checkOutDate, setCheckOutDate] = React.useState(new Date());

	return (
		<Box marginBottom="24px">
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Grid container spacing={2} justify="space-around">
					<Grid item xs={6}>
						<KeyboardDatePicker
							margin="normal"
							id="date-picker-dialog"
							label="Check-in date"
							format="dd/MM/yyyy"
							value={checkInDate}
							onChange={(i) => setCheckInDate(i)}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
					<Grid item xs={6}>
						<KeyboardDatePicker
							margin="normal"
							id="date-picker-dialog"
							label="Check-in date"
							format="dd/MM/yyyy"
							value={checkOutDate}
							onChange={(i) => setCheckOutDate(i)}
							KeyboardButtonProps={{
								"aria-label": "change date",
							}}
						/>
					</Grid>
				</Grid>
			</MuiPickersUtilsProvider>
		</Box>
	);
};

export default BookingDate;
