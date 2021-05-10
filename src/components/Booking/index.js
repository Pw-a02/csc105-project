import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import BookingDate from "./BookingDate";
import { BookingContainer } from "./BookingElements";
import BookingRoom from "./BookingRoom";
import BookingType from "./BookingType";

const steps = [
  "Select Type",
  "Select Room Style",
  "Select Check-in Date",
  "Confirmation",
];

const getStepContent = (stepIndex) => {
  switch (stepIndex) {
    case 0:
      return <BookingType />;
    case 1:
      return <BookingRoom />;
    case 2:
      return <BookingDate />;
    case 3:
      return <Typography gutterBottom>Confirm your Booking</Typography>;
  }
};

const Booking = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      setDialogOpen(true);
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <BookingContainer id="booking">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          style={{ backgroundColor: "transparent", width: "1200px" }}
        >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {getStepContent(activeStep)}
        <Grid container spacing={2} justify="center">
          <Grid item>
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Grid>
        </Grid>
      </BookingContainer>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Confirm your reservation?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => setDialogOpen(false)}
            color="primary"
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Booking;
