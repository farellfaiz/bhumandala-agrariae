import React from 'react';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import LogoAksang from './assets/putih-merah.png';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <img src={LogoAksang} className='uhuy' alt='' />
          </div>
          <div className="social">
            <a href="https://instagram.com/bhumandala.agrariae" title="Instagram" target="_blank" rel="noopener noreferrer">
              <FaInstagram size={20} />
            </a>
            <a href="https://twitter.com/BhumandalaAgr" title="Twitter" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Segera Hadir.</h1>
            <p>Segera hadir, sebuah portal satu pintu peningkatan kesadaran, pemahaman, dan aksi mengenai konflik agraria di Kota Bandung.</p>
          </div>
        </div>
        <div className="footer">
          <span>Bhumandala Agrariae</span>
        </div>
      </div>
    );
  }
}

export default App;