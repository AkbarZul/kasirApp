// import react from "react";
import { Row, Col, Container } from "react-bootstrap";
import {Hasil, ListCategories, NavbarComp} from "./components";


function App() {
  return (
    <div className="App">
      <NavbarComp />
      <div className="mt-4">
        <Container fluid>
          <Row>
            <ListCategories />
            <Col>
              <h4>
                <strong>Daftar Produk</strong>
              </h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
