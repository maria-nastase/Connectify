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
      {/* <nav>
        <Link to="B1">Sub Screen B1</Link> | <Link to="B2">Sub Screen B2</Link>
      </nav>
      <Routes>
        <Route path="B1" element={<ScreenB1 />} />
        <Route path="B2" element={<ScreenB2 />} />
      </Routes> */}
      <div className="client">
        <div className="header flex">
          <img style={{ width: "200px", height: "200px", marginRight: "20px"}} src="./images/logo.png"/>
          <div className="info text-center">
            <div className="name text-4xl bold" style={{ padding: '20px' }} >
                <h2>
                    <b>Agent Name</b>
                </h2>
            </div>
            <div className="email">
                <p>Online</p>
            </div>
          </div>
          <div className="text-fields">
            {isOpen && (
              <div className="dropdown-content text-to-customer">
                <p id="translation">{translation}</p>
              </div>
            )}
          </div>
          <div className="text-to-customer">
            <p id="transcription">{transcription}</p>
          </div>
        </div>
        <div className="button">
          <AudioRecorder />
        </div>
      </div>
    </div>
  );
};

export default ScreenB;
