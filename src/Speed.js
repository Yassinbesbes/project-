import 'bootstrap/dist/css/bootstrap.min.css';
import './Speed.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CircleWithName from './CircleWithName';
import Tab from './tab'

function Speed() {
  return (
    <div className='Main'>
      <Container>
      <Row >
        <Col >
          <CircleWithName
            className="circle"
            name="GO"
            backgroundColor="#5F3CC3"
            textColor="white"
            fontSize="4vw" // Use vw unit for font size
            circleSize="20vw" // Use vw unit for circle size
          />
        </Col>
        </Row>
      <Row className='x'> 
        <Col><Tab/></Col>
      </Row>
      </Container>

    </div>
  );
}

export default Speed;