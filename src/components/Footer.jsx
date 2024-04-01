/**
 * Components:
 * are functions
 * start with capital letters
 * should always return something
 *
 * are usually exported
 */

import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <h1>Thank you for visiting us! 😀</h1>
      <h4>Order online or visit our physical address at:</h4>
      <h4>1234 MLK Hwy., Suite 208, San Diego CA 92154</h4>
    </div>
  );
}

export default Footer;
