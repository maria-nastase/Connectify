import ScreenB1 from "./ScreenB1";
import ScreenB2 from "./ScreenB2";
import AudioRecorder from "../AudioRecorder";
import React, { useState } from "react";

// State to track if dropdown is open or closed

const ScreenB = ({transcription}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown state
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <h2>Agent Side</h2>
      {/* <nav>
        <Link to="B1">Sub Screen B1</Link> | <Link to="B2">Sub Screen B2</Link>
      </nav>
      <Routes>
        <Route path="B1" element={<ScreenB1 />} />
        <Route path="B2" element={<ScreenB2 />} />
      </Routes> */}
      <div className="client">
        <div className="dropdown-container">
            <div className="name text-2xl" style={{ padding: '20px' }} >
                <h2>
                    Emily Johnson
                </h2>
            </div>
            <div className="email">
                <p>emily.johnson@gmail.com</p>``
            </div>
          {/* Button to toggle dropdown */}
          <button className="dropdown-toggle" onClick={toggleDropdown}>
            <span>{isOpen ? "▼" : "►"}</span> {/* Arrow changes direction */}
            Click to see more
          </button>

          {/* Conditionally render the content */}
          {isOpen && (
            <div className="dropdown-content">
              <p id="translation"></p>
            </div>
          )}
        </div>
        <div className="text_to_customer">
          <p>
          <p id="transcription"></p>
          </p>
        </div>
        <div className="footer">
          <AudioRecorder />
          <button className="send">Send</button>
        </div>
        
      </div>
    </div>
  );
};

export default ScreenB;
