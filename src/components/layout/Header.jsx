import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div className="page-header">
        <div className="container-fluid">
          <div className="d-flex align-items-center justify-content-between">
            <div className="page-title">
              <h4 className="mb-0">Analytics Dashboard</h4>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item as={Link} to="/">
                Home
              </Breadcrumb.Item>
              <Breadcrumb.Item as={Link} to="/dashboards">
                Dashboards
              </Breadcrumb.Item>
              <Breadcrumb.Item active>Analytics</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
