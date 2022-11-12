import RSSLogo from '../../assets/img/rs_school_js.svg';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="wrapper footer__wrapper">
        <div>
          © 2022 RSLang
          <span className="github">
            <a href="https://github.com/svr-by" className="github__link">
              svr-by
            </a>
          </span>
        </div>
        <div className="rss">
          <a href="https://rs.school/js/">
            <img src={RSSLogo} alt="RSSchool" className="rss__img" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
