import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Speed.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './tab.css';
import { useNetworkSpeedTest } from '@rtbjs/network-speed-test';

function Speed() {
  const { runTest, download, upload } = useNetworkSpeedTest();
  const [downloadSpeed, setDownloadSpeed] = useState(null);
  const [uploadSpeed, setUploadSpeed] = useState(null);

  const handleSpeedTestClick = () => {
    runTest();
  };

  useEffect(() => {
    if (download.isComplete) {
      setDownloadSpeed(download.result.meanClientMbps);
    }
  }, [download]);

  useEffect(() => {
    if (upload.isComplete) {
      setUploadSpeed(upload.result.meanClientMbps);
    }
  }, [upload]);

  return (
    <div className='Main'>
      <Container>
        <Row>
          <Col>
            <button
            className="circle"
            variant="primary"
            onClick={handleSpeedTestClick}
          >
            <span className="circle-text">GO</span>
            <span className="new-circle"></span>
          </button>
          </Col>
        </Row>

        <Row className='x'>
          <Col>
            <table>
              <thead>
                <tr>
                  <th>Download Speed</th>
                  <th>Upload Speed</th>
                  <th>Ping</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{downloadSpeed !== null ? ` ${downloadSpeed.toFixed(2)} Mbps` : '...'}</td>
                  <td>{uploadSpeed !== null ? `${uploadSpeed.toFixed(2)} Mbps` : '...'}</td>
                  <td>200 Mbps</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Speed;
