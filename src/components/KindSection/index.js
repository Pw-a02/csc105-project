import React from "react";
import KindContent from "./kind";
import kind1 from "../../images/styledhotel1.jpg";
import kind2 from "../../images/styledhotel2.jpg";
import kind3 from "../../images/kindhotel1.jpg";
import kind4 from "../../images/kindhotel2.jpg";
import kind5 from "../../images/kindhotel3.jpg";

const Kinds = () => {
  return (
    <div className="kind-container">
      <KindContent
        pic={kind1}
        name="Hug you hotel"
        price={999}
        type="Entire Hotel"
        detail="3 guests. 1bedroom. 1bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <KindContent
        pic={kind2}
        name="U hotel"
        price={1111}
        type="Entire Hotel"
        detail="3 guests. 1bedroom. 1bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <KindContent
        pic={kind3}
        name="A hotel"
        price={899}
        type="Entire Hotel"
        detail="3 guests. 1bedroom. 1bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <KindContent
        pic={kind4}
        name="Begin hotel"
        price={1212}
        type="Entire Hotel"
        detail="3 guests. 1bedroom. 1bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
      <KindContent
        pic={kind5}
        name="Normal hotel"
        price={555}
        type="Entire Hotel"
        detail="3 guests. 1bedroom. 1bed. 1bath"
        provide="Wifi. Air conditioning. Car park. Pool. Breakfast "
      />
    </div>
  );
};

export default Kinds;
