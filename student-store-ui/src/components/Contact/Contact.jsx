import * as React from "react";
import "./Contact.css";
import Socials from "../Socials/Socials";
export default function Contact() {
  return (
    <div id="Contact" className="contact">
      <div className="content">
        <h3>Contact Us</h3>
        <div className="summary">
          <ul className="info">
            <li>
              <span className="label">Email: </span>
              <span>code@path.org</span>
            </li>
            <li>
              <span className="label">Phone:</span>
              <span>1-800-CODEPATH</span>
            </li>
            <li>
              <span className="label">Address:</span>
              <span>123 Fake Street, San Francisco, CA</span>
              <li>
                <span className="label">Socials:</span>
                <Socials />
              </li>
            </li>
          </ul>
          <div className="mediaContact">
            <img
              src="https://codepath-student-store-demo.surge.sh/assets/happy_person.517b658d.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
