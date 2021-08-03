import React from 'react';

function Footer() {
  return (
   
      <div className="ft-content">
        <div className="row">
          <div className="col-3">
            <h2>About Us</h2>
            <p>There are many variations of passage of Lorem Ipsum available, but the maj ority have suffered alteration</p>
            <ul>
              <li className="ft-item">
                <i className="fas fa-map-marker-alt ft-item-icon" />
                <p>125 Silk Tower, Center Point Nort City, New Yourk</p>
              </li>
              <li className="ft-item">
                <i className="fas fa-phone-alt ft-item-icon" />
                <p>+12345 698 744, +98745 852 741</p>
              </li>
              <li className="ft-item">
                <i className="fas fa-envelope ft-item-icon" />
                <p>infoyour@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Information</h2>
            <ul>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>About Us</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Deliver Information</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Privacy Policy</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Terms &amp; Conditions</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Customer Service</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>New products</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Our Policy</h2>
            <ul>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Help &amp; Contact</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Shipping &amp; taxes</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Return policy</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Affiliates</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Legal Notice</p>
              </li>
              <li className="ft-item ">
                <i className="fas fa-chevron-right mr-3" />
                <p>Payment</p>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h2>Our Newsletter</h2>
            <div className="btn-group">
              <input type="text" name="mail" placeholder="mail enter" />
              <div className="btn btn-danger">Subscribe</div>
            </div>
            <p style={{ color: '#ffce3e' }}>Sign up for our newsletter and get 50% off your next order</p>
            <ul className="ft-item ">
              <i className="fab fa-facebook icon" />
              <i className="fab fa-google icon" />
              <i className="fab fa-youtube icon" />
            </ul>
          </div>
        </div>
      </div>
   

  )

}
export default Footer
