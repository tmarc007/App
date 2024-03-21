import { useState } from "react";
import "./About.css";

function About() {
  // contactVisible
  const [contactVisible, setContactVisible] = useState(false);

  function showData() {
    setContactVisible(!contactVisible);
  }

  return (
    <div className="about page">
      <h3>Thomas Marcello</h3>

      {contactVisible ? (
        <div className="contact">
          <p>You can reach me at: tdsfsdfsd@dgdda.cn.com</p>
        </div>
      ) : null}

      <button onClick={showData} className="btn btn-outline-dark">
        View Contact Info
      </button>
    </div>
  );
}

export default About;
