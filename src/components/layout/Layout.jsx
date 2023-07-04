import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Navbar from "../Navbar";

export default function Layout({ children }) {
  const location = useLocation();
  const is404Page = location.pathname === "/404";

  return (
    <>
        <Navbar/>
        <div className="flex row g-0" style={{ marginRight: "0px" }}>
          <div className="col-2">
            <Sidebar />
          </div>
          <div className="col-8">{children}</div>
        </div>
    </>
  );
}
