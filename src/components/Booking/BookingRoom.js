import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import Type1 from "../../images/typeh1.jpg";
import Type2 from "../../images/typeh2.jpg";
import Type3 from "../../images/typeh4.jpg";
import Type4 from "../../images/typehos1.jpg";
import Type5 from "../../images/type1.jpg";
import Type6 from "../../images/type2.jpg";
import BookingRoomCheckbox from "./BookingRoomCheckbox";

const BookingRoom = () => {
  const [selected, setSelected] = useState(0);

  return (
    <Grid container>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type1}
          title="Room 1"
          checked={selected == 0}
          change={() => setSelected(0)}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type2}
          title="Room 2"
          checked={selected == 1}
          change={() => setSelected(1)}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type3}
          title="Room 3"
          checked={selected == 2}
          change={() => setSelected(2)}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type4}
          title="Room 4"
          checked={selected == 3}
          change={() => setSelected(3)}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type5}
          title="Room 5"
          checked={selected == 4}
          change={() => setSelected(4)}
        />
      </Grid>
      <Grid item xs={4}>
        <BookingRoomCheckbox
          img={Type6}
          title="Room 6"
          checked={selected == 5}
          change={() => setSelected(5)}
        />
      </Grid>
    </Grid>
  );
};

export default BookingRoom;
