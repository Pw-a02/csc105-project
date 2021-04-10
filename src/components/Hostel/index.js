import React from "react";
import HostelContent from "./hostel";
import kindhos1 from "../../images/kinghostel1.jpg";
import kindhos2 from "../../images/kindhostel2.jpg";
import kindhos3 from "../../images/kindhostel3.jpg";
import kindhos4 from "../../images/kindhostel4.jpg";
import kindhos5 from "../../images/kindhostel5.jpg";

const Hostel = () => {
  return (
    <div className="hostel-container">
      <HostelContent
        pic={kindhos1}
        name="Public hostel"
        price={333}
        type="Entire Hostel"
        detail="4 guests/room. 1bed. shared bathroom"
        provide="Wifi. Air conditioning. Breakfast "
      />
      <HostelContent
        pic={kindhos2}
        name="Nana hostel"
        price={233}
        type="Entire Hostel"
        detail="4 guests/room. 1bed. shared bathroom"
        provide="Wifi. Air conditioning. Breakfast "
      />
      <HostelContent
        pic={kindhos3}
        name="Sabuy hostel"
        price={339}
        type="Entire Hostel"
        detail="4 guests/room. 1bed. shared bathroom"
        provide="Wifi. Air conditioning. Breakfast "
      />
      <HostelContent
        pic={kindhos4}
        name="B hostel"
        price={555}
        type="Entire Hostel"
        detail="4 guests/room. 1bed. shared bathroom"
        provide="Wifi. Air conditioning. Breakfast "
      />
      <HostelContent
        pic={kindhos5}
        name="Smile hostel"
        price={224}
        type="Entire Hostel"
        detail="4 guests/room. 1bed. shared bathroom"
        provide="Wifi. Air conditioning. Breakfast "
      />
    </div>
  );
};

export default Hostel;
