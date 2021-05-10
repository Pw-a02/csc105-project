import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@material-ui/core";
import React from "react";

const BookingRoomCheckbox = ({ img, title, checked, change }) => {
  return (
    <Card style={{ margin: "12px" }}>
      <CardActionArea>
        <CardMedia
          image={img}
          title="Room Image"
          style={{ minHeight: "200px" }}
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="h2">
              {title}
            </Typography>
            <Checkbox
              checked={checked}
              onChange={change}
              inputProps={{ "aria-label": "primary checkbox" }}
            />
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BookingRoomCheckbox;
