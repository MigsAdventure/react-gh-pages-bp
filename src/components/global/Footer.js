import '../../_styles/components/global/Footer.css';
import React from 'react';

export default function Footer() {

  const renderFooter = (
    <div className="Footer">
      <ul className="social-items">
        <li className="social-item facebook-social"><a href="https://www.facebook.com"></a></li>
        <li className="social-item instagram-social"><a href="https://www.instagram.com"></a></li>
        <li className="social-item twitter-social"><a href="https://www.twitter.com"></a></li>
        <li className="social-item linkedin-social"><a href="https://www.linkedin.com"></a></li>
      </ul>
      <div className="legal-wrapper">
        <p className="legal-text">&copy; Miguel Pardo 2017</p>
      </div>
    </div>
  );

  return(
    renderFooter
  )
}
