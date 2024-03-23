// App.js 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Card, CardBody, CardTitle, CardText } from 'react-bootstrap'; // Import Bootstrap components
import './App.css'
function App() {
  const playAndZoom = (event) => {
    const iframe = event.currentTarget.querySelector('iframe');
    if (iframe) {
      iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      iframe.style.transform = 'scale(1.05)';
    }
  };

  const resetZoom = (event) => {
    const iframe = event.currentTarget.querySelector('iframe');
    if (iframe) {
      iframe.style.transform = 'scale(1)';
    }
  };
  const videoSources = [
    "https://www.youtube.com/embed/wkD8rjkodUI",
    "https://www.youtube.com/embed/HJLE_VQ3Knc",
    "https://www.youtube.com/embed/1KW3ah_f1E4",
    "https://www.youtube.com/embed/_vKfBkwhPts?list=PLmw9rXTuLboB6iXwx3X_yVyd4OyCnQod5",
    "https://www.youtube.com/embed/9FGilxCbdz8",
    "https://www.youtube.com/embed/JB2oyawG9KI"

  ];

  return (
    <div className="container mt-4">
      {/* <h2 className="text-center text-success mb-4">GeeksforGeeks</h2> */}
      <h2 className="text-right mb-4 animated-text">Workout videos</h2>
      <div className="row">
        {videoSources.map((src, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <Card className="video-card" onMouseEnter={playAndZoom} onMouseLeave={resetZoom} >
              <Card.Body>
                <Card.Text>
                  <iframe
                    width="100%"
                    height="200"
                    src={src}
                    title={`Video ${index + 1}`}
                    allowFullScreen
                  ></iframe>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
