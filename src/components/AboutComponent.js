import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AboutComponent() {
  return (
    <>
      <div>
        About
      </div>
      <Button>
        <Link to='/home'>Home</Link>
      </Button>
    </>
  )
}
