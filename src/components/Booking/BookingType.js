import { Box, Button, ButtonGroup, Card, Typography } from "@material-ui/core";
import React, { useState } from "react";
import "./Booking.css";

const BookingType = () => {
	const [selected, setSelected] = useState(1);

	return (
		<Box
			display="flex"
			flexDirection="column"
			alignItems="center"
			marginBottom="24px"
			padding="42px"
			border="1px solid #00478a"
			borderRadius="12px"
		>
			<Typography variant="h5" gutterBottom>
				Select your room type
			</Typography>
			<ButtonGroup variant="contained" color="primary">
				<Button
					color="primary"
					variant={selected === 0 ? "contained" : "outlined"}
					onClick={() => setSelected(0)}
				>
					Hotel
				</Button>
				<Button
					color="primary"
					variant={selected === 1 ? "contained" : "outlined"}
					onClick={() => setSelected(1)}
				>
					Hostel
				</Button>
				<Button
					color="primary"
					variant={selected === 2 ? "contained" : "outlined"}
					onClick={() => setSelected(2)}
				>
					Resort
				</Button>
			</ButtonGroup>
		</Box>
	);
};

export default BookingType;
