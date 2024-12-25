import { FaEnvelope } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer_content">
        <ul className="footer_list">
          <li>contact</li>
          <li>portfolio</li>
          <li>about</li>
          <li>services</li>
        </ul>

        <div className="flex items-center gap-4">
          <a className="" href="mailto:mahansoodbakhsh@yahoo.com">
            <FaEnvelope className="envelop_icon" />{" "}
          </a>
          <a href="https://t.me/Mhn_Sb">
            <FaTelegram className="telegram_icon" />
          </a>
          <a href="https://linkedin.com/in/mahan-soodbakhsh">
            <FaLinkedin className="linkedIn_icon" />
          </a>
          <a href="https://linkedin.com/in/mahan-soodbakhsh">
            <FaGithub className="github_icon" />
          </a>
        </div>
      </section>
      <p>
        developed by <b>Mahan Soodbakhsh</b>
      </p>
    </footer>
  );
};

export default Footer;
