import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <Link>
        <img
          src="/images/w-app.png"
          alt="Help-Desk"
          height={50}
          width={50}
          style={{ bottom: "10px", position: "fixed", right: "30px" }}
        />
      </Link>
    </>
  );
};

export default Help;
