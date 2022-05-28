import React from "react";
import { Link } from "react-router-dom";
import { Button, Alert, Breadcrumb } from "react-bootstrap";

export default function HomeComponent() {
  return (
    <>
      <div>
        <Breadcrumb style={{ color: "#000"}}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link to='/about'>About</Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
    </>
  )
}