import React from 'react';
import Navbar from '@/sections/NavBar/NavBar';
import './navbar.css';

function Navi() {
  return (
    <div>
      <Navbar />
      <section className="content-section" id="about" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>About Me</h2>
          {/* 你的内容 */}
        </div>
      </section>
      <section className="content-section" id="timeline" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>My Journey</h2>
          {/* 你的内容 */}
        </div>
      </section>
      <section className="content-section" id="contact" style={{ paddingTop: '60px' }}>
        <div className="container">
          <h2>Contact Me</h2>
          {/* 你的内容 */}
        </div>
      </section>
    </div>
  );
}

export default Navi;