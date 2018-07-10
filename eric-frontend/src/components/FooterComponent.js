import React from 'react';
import './FooterComponent.css';
import '../images/instagram.png';

class FooterComponent extends React.Component {
  render() {
    return (
      <div className="footerItems">
        <div className="flexCenter openingHours">
          <h4 className="centerText">Opening Hours</h4>
          <ul className="footerList">
            <li>Tuesday-Friday | 9am - 10pm</li>
            <li>Saturday | 10am - 7pm</li>
            <li>Sunday | Appointment Only</li>
          </ul>
        </div>
        <div className="flexCenter">
          <h4 className="centerText">Contact Us</h4>
          <a target="_blank" href="https://www.instagram.com/hairbyericribeiro/">
            <img className="instagramLink" src="../images/instagram.png" alt="Instagram" />
          </a>
          <span>Phone: 0411 291 123</span>
          <span>Address: 175 Palmer Street Darlinghurst</span>
          <span>Sydney, 2010, New South Wales</span>
        </div>
      </div>
    );
  }
};

export default FooterComponent;