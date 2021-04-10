import React from "react";
import ApartmentContent from "./apart";
import ap1 from "../../images/kindapart1.jpg";
import ap2 from "../../images/kindapart2.jpg";
import ap3 from "../../images/kindapart3.jpg";
import ap4 from "../../images/kindapart4.jpg";
import ap5 from "../../images/kindapart5.jpg";

const index = () => {
  return (
    <div className="apart-container">
      <ApartmentContent
        pic={ap1}
        name="JB Apartment"
        price={2222}
        type="Entire Apartment"
        detail="Maximun 6 guests. 2bedroom. 2bed. 2bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <ApartmentContent
        pic={ap2}
        name="Lido Apartment"
        price={1888}
        type="Entire Apartment"
        detail="Maximun 6 guests. 2bedroom. 2bed. 2bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <ApartmentContent
        pic={ap3}
        name="Chapter Residence"
        price={1777}
        type="Entire Apartment"
        detail="Maximun 6 guests. 2bedroom. 2bed. 2bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <ApartmentContent
        pic={ap4}
        name="Houze Apartment"
        price={2111}
        type="Entire Apartment"
        detail="Maximun 6 guests. 2bedroom. 2bed. 2bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <ApartmentContent
        pic={ap5}
        name="Pround Residence"
        price={2333}
        type="Entire Apartment"
        detail="Maximun 6 guests. 2bedroom. 2bed. 2bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
    </div>
  );
};

export default index;
