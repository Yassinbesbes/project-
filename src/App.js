import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import tt from './images/tt.png';
import './App.css';


function App() {
  return (
    <div>
      <Container className='all'>
        <Row className="align-items-center">
          <Col className="text-center" xs={2}>
            <a href="https://www.tunisietelecom.tn/particulier" target="_blank" rel="noopener noreferrer">
              <img
                alt="TT"
                src={tt}
                className="d-inline-block align-top"
                
              />
            </a>
          </Col>
          <Col className="Titre text-center">
            <p>Speed connection</p>
          </Col>
          <Col xs={1}>
            <div className='plus' title="Click go to test your speed connection">
            <h3 class="Main-Text" >...</h3>
            </div>
          </Col>
        </Row>
      
      </Container>
      
    </div>
  );
}

export default App;
