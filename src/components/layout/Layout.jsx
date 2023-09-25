import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../Sidebar";
import Help from "../Help";
import { Footer } from "../Footer";
import { Row } from "react-bootstrap";
import Header from "./Header";
export default function Layout({ children }) {
  const location = useLocation();
  const is404Page = location.pathname === "/404";

  return (
    <>
      <Row>
        <Header />
      </Row>
      <div className="flex row g-0" style={{ marginRight: "0px" }}>
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-10">{children}</div>
        <Help />
      </div>
      <Footer />
    </>
  );
}
