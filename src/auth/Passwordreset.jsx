import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export const Passwordreset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleNextClick = async () => {
    setIsLoading(true);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/password/reset", {email })

      if (response.ok) {
        // Password reset request was successful, handle accordingly
        console.log("Password reset email sent.");
      } else {
        // Handle error response here
        console.error("Password reset request failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Form className="col-4">
          <h2>Password Reset</h2>
          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>
          <Button
            className="mt-3"
            style={{ float: "right" }}
            variant="primary"
            onClick={handleNextClick}
            disabled={isLoading} // Disable the button while loading
          >
            {isLoading ? "Loading..." : "Next"}
          </Button>
        </Form>
      </div>
    </>
  );
};
