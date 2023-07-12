import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <Link to="https://wa.me/+923041742761?text=I'm%20interested%20in%20your%20clothes%20for%20sale">
        <img
          src="/images/w-app.png"
          alt="How to link to WhatsApp from a different app"
          height={50}
          width={50}
          style={{ bottom: "10px", position: "fixed", right: "30px" }}
        />
      </Link>
    </>
  );
};

export default Help;
