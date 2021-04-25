import React from "react";
import Profilecontent from "./profile";
import save1 from "../../images/kindapart3.jpg";
import save2 from "../../images/kindapart5.jpg";
import save3 from "../../images/kindhostel2.jpg";

const realprofile = () => {
  return (
    <div className="profile-container">
      <Profilecontent
        ProfileName="Praewa.pw"
        savepic1={save1}
        savename1="Chapter Apartment"
        savepic2={save2}
        savename2="Pround Residence"
        savepic3={save3}
        savename3="Sabuy hostel"
      />
    </div>
  );
};

export default realprofile;
