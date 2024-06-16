import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer  className="foot">
      <div className="newsletter">
        <h2>Join the Adventure newsletter to receive our best vacation deals</h2>
        <p>You can unsubscribe at any time.</p>
        <form>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>About Us</h3>
            <a href="/how-it-works">How it works</a>
            <a href="/testimonials">Testimonials</a>
            <a href="/careers">Careers</a>
            <a href="/investors">Investors</a>
            <a href="/terms-of-service">Terms of Service</a>
          </div>
          <div className="footer-link-items">
            <h3>Contact Us</h3>
            <a href="/contact">Contact</a>
            <a href="/support">Support</a>
            <a href="/destinations">Destinations</a>
            <a href="/sponsorships">Sponsorships</a>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h3>Videos</h3>
            <a href="/submit-video">Submit Video</a>
            <a href="/ambassadors">Ambassadors</a>
            <a href="/agency">Agency</a>
            <a href="/influencer">Influencer</a>
          </div>
          <div className="footer-link-items">
            <h3>Social Media</h3>
            <a href="/instagram">Instagram</a>
            <a href="/facebook">Facebook</a>
            <a href="/youtube">Youtube</a>
            <a href="/twitter">Twitter</a>
            <a href="/linkedin">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="/facebook" className="social-icon-link facebook" aria-label="Facebook">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="/instagram" className="social-icon-link instagram" aria-label="Instagram">
            <i className="fab fa-instagram" />
          </a>
          <a href="/youtube" className="social-icon-link youtube" aria-label="Youtube">
            <i className="fab fa-youtube" />
          </a>
          <a href="/twitter" className="social-icon-link twitter" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
          <a href="/linkedin" className="social-icon-link linkedin" aria-label="LinkedIn">
            <i className="fab fa-linkedin" />
          </a>
        </div>
        <small className="website-rights">TRVL © 2020</small>
      </div>
    </footer>
  );
};

export default Footer;