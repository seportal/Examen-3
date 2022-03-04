import React from "react";
import SearchBar from "./SearchBar";
import Logo from "../logoHenry.png";
import { Container, Navbar } from "react-bootstrap";
import "./Nav.css";

const Navi = ({ onSearch }) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="# home">
          <img
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>

        {/* <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Ciudad"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Agregar</Button>
        </Form> */}
        <SearchBar onSearch={onSearch} />
      </Container>
    </Navbar>
  );
};

export default Navi;
