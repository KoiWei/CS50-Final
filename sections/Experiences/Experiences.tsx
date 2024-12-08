import React from "react";
import './timeline.css';

function Experiences() {
  return (
    <section className="content-section" id="timeline">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading mb-2 black-heading">My Journey</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {/* Experience 1 */}
              <li className="timeline-inverted">
                <div className="timeline-badge primary"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2024.9 - Present</h5>
                    <h4 className="subheading">Intus Care Business Data Analytics Intern</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              {/* Experience 2 */}
              <li>
                <div className="timeline-badge success"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2024.6 - 2025.5</h5>
                    <h4 className="subheading">Brown University Master</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              {/* Experience 3 */}
              <li className="timeline-inverted">
                <div className="timeline-badge warning"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2024.4 - 2024.6</h5>
                    <h4 className="subheading">LVMH E-Commerce Operations Intern</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              {/* Experience 4 */}
              <li>
                <div className="timeline-badge danger"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2023.8 - 2024.2</h5>
                    <h4 className="subheading">TikTok Product Management Intern</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              {/* Experience 5 */}
              <li className="timeline-inverted">
                <div className="timeline-badge info"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2022.6 - 2022.8</h5>
                    <h4 className="subheading">Tencent Gaming Product Intern</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
              {/* Experience 6 */}
              <li>
                <div className="timeline-badge extra"></div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h5>2021.9 - 2023.6</h5>
                    <h4 className="subheading">Sun Yat-sen University - Bachelor’s Degree</h4>
                  </div>
                  <div className="timeline-body"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
