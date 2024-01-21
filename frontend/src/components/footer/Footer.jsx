import React from 'react';
import * as Styles from './Footerstyles';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
export const Footer = () => {
  return (
    <Styles.FooterContainer>
      <Styles.FooterWrapper>
        <Styles.FooterIconWrapper>
          <h4>Contact Us</h4>
          <small>Call us 24/7</small>
          <h2>647-526-2148</h2>
          <Styles.FooterIconLists>
            <li>
              <Link>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <FaFacebook />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <FaInstagram />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <FaYoutube />
                </span>
              </Link>
            </li>
            <li>
              <Link>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>
                  <FaTwitter />
                </span>
              </Link>
            </li>
          </Styles.FooterIconLists>
        </Styles.FooterIconWrapper>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li>Policy </li>
            <li>Terms and Conditions</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h4>Company</h4>
          <ul>
            <li>About Us </li>
            <li>Affiliate</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </Styles.FooterWrapper>
      <small>Copyright NICA NIGERIA © 2024</small>
    </Styles.FooterContainer>
  );
};
