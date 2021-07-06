import { Link } from 'react-router-dom';
import Button from './common/button/button';

const Footer = (props) => {
  return (
    <footer className="container">
      <div className="hr"></div>
      <div className="footer-top d-flex space-between">
        <div className="footer__links">
          <h4 className="footer__title">Links</h4>
          <nav>
            {props.navLinks.map(({ to, title }) => (
              <Link key={title} className="footer__nav-link d-block" to={to}>
                {title}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer__cta">
          <h4 className="footer__title">Be in the know</h4>
          <p className="promo">Promotions, new products and sales. Directly to your inbox.</p>
          <div className="footer__input-group">
            <input type="text" placeholder="Your Email" />
            <Button size="medium">Subscribe</Button>
          </div>
        </div>
      </div>
      <div className="hr"></div>
      <div className="footer-bottom d-flex space-between">
        <div className="footer__copy">Copyright c 2021</div>
        <div className="footer-cards">Cards</div>
      </div>
    </footer>
  );
};

export default Footer;
