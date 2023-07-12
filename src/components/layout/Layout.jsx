import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";
import Header from "./Header";
import Help from "../Help";
export default function Layout({ children }) {
  const location = useLocation();
  const is404Page = location.pathname === "/404";

  return (
    <>
        {/* <Navbar/> */}
        {/* <Header/> */}
        <div className="flex row g-0" style={{ marginRight: "0px" }}>
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-10">{children}</div>
          <Help/>
        </div>
    </>
  );
}
