import React from "react";
import ResortContent from "./resort";
import re1 from "../../images/kindre1.jpg";
import re2 from "../../images/kindre2.jpg";
import re3 from "../../images/kindre3.jpg";
import re4 from "../../images/kindre4.jpg";
import re5 from "../../images/kindre5.jpg";

const index = () => {
  return (
    <div className="resort-container">
      <ResortContent
        pic={re1}
        name="Nara Resort"
        price={3999}
        type="Entire Resort"
        detail="Maximum 4 guests. 1bedroom. 2bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast. Spa "
      />
      <ResortContent
        pic={re2}
        name="Cheeva Resort"
        price={4555}
        type="Entire Resort"
        detail="Maximum 4 guests. 1bedroom. 2bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast. Spa "
      />
      <ResortContent
        pic={re3}
        name="Poorin Resort"
        price={4444}
        type="Entire Resort"
        detail="Maximum 4 guests. 1bedroom. 2bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast. Spa "
      />
      <ResortContent
        pic={re4}
        name="Madam Resort"
        price={2666}
        type="Entire Resort"
        detail="Maximum 4 guests. 1bedroom. 2bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast. Spa "
      />
      <ResortContent
        pic={re5}
        name="Sky Resort"
        price={3888}
        type="Entire Resort"
        detail="Maximum 4 guests. 1bedroom. 2bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast. Spa "
      />
    </div>
  );
};

export default index;
