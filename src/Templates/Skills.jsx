import css3Icon from "../assets/main_icons/CSS3.svg";
import GraphQLIcon from "../assets/main_icons/GraphQL.svg";
import HTML5Icon from "../assets/main_icons/HTML5.svg";
import MaterialIcon from "../assets/main_icons/Material UI.svg";
import ReactIcon from "../assets/main_icons/React.svg";
import ReduxIcon from "../assets/main_icons/Redux.svg";
import TailwindIcon from "../assets/main_icons/Tailwind CSS.svg";
import GitIcon from "../assets/main_icons/Git.svg";
import GitHubIcon from "../assets/main_icons/GitHub.svg";
import JavaScriptIcon from "../assets/main_icons/JavaScript.svg";

const Skills = () => {
  return (
    <section className="skills_container">
      <h4 className="skills_title">Skills</h4>

      <section className="skills_icons">
        <div> <img src={HTML5Icon} alt="" /> </div>
        <div>  <img src={css3Icon} alt="" /> </div>
        <div>  <img src={JavaScriptIcon} alt="" /> </div>
        <div> <img src={ReactIcon} alt="" />  </div>
        <div> <img src={TailwindIcon} alt="" /> </div>
        <div> <img src={ReduxIcon} alt="" /> </div>
        <div> <img src={GraphQLIcon} alt="" /> </div>
        <div> <img src={MaterialIcon} alt="" /> </div>
        <div> <img src={GitIcon} alt="" /> </div>
        <div> <img src={GitHubIcon} alt="" /> </div>
      </section>
    </section>
  );
};

export default Skills;
