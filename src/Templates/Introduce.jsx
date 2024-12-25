import mahanPic from "../assets/main_Images/mahan_img.jpg";
import { FaEnvelope } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Introduce = () => {
  return (
    <section className="introduction_wrapper">
        <div className="description">
          <span className="block">hello everyone 👋</span>
          <p>
            my name is <b>Mahan Soodbakhsh</b>
          </p>
          <p>Front-End Developer | React.Js</p>
          <p>
            welcome to my site, in here im going to introduce my self, and which
            fields i have experience.
          </p>
        </div>
        <div className="flex items-center self-end gap-4">
          <a className="" href="mailto:mahansoodbakhsh@yahoo.com">
            <FaEnvelope className="envelop_icon" />
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

        <img
          src={mahanPic}
          alt=""
          className="introductionPhoto"
        />
    </section>
  );
};

export default Introduce;
