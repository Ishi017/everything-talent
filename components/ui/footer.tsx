// components/Footer.tsx
import React from "react";
import styles from "./footer.module.css"; // Assuming you have a CSS module for styles

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* Column 1: Resources */}
        <div className={styles.column}>
          <h4>Resources</h4>
          <ul>
            <li><a href="/blogs">Blogs</a></li>
            <li><a href="/success-stories">Success Stories</a></li>
            <li><a href="/case-studies">Case Studies</a></li>
            <li><a href="/whitepapers">Whitepapers</a></li>
            <li><a href="/faqs">FAQs</a></li>
            <li><a href="/hiring-guides">Hiring Guides</a></li>
            <li><a href="/support">Support</a></li>
          </ul>
        </div>

        {/* Column 2: Get Started */}
        <div className={styles.column}>
          <h4>Get Started</h4>
          <ul>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/hiring-solutions">Hiring Solutions</a></li>
            <li><a href="/funded-startups">Funded Startups</a></li>
            <li><a href="/free-trial">Free Trial</a></li>
            <li><a href="/contact-support">Contact Support</a></li>
            <li><a href="/request-demo">Request Demo</a></li>
            <li><a href="/trust">Trust</a></li>
          </ul>
        </div>

        {/* Column 3: Legal */}
        <div className={styles.column}>
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
            <li><a href="/terms-of-service">Terms of Service</a></li>
            <li><a href="/cookie-policy">Cookie Policy</a></li>
            <li><a href="/ccpa-compliance">CCPA Compliance</a></li>
          </ul>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;