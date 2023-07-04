import React from "react";
import { Link } from "react-router-dom";
import '../nopage.css'

const NoPage = () => {
  return (
    <div className="no-page-container">
      <Link to={"/"} className="link">
        <img src={"/images/404page.jpg"} alt="404" className="image" />
      </Link>
    </div>
  );
};

export default NoPage;
