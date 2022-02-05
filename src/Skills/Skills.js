import style from './Skills.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Skill from "./Skill/Skill";
import Title from "../Common/component/title/Title";
import Fade from 'react-reveal/Fade';
import logoHtml from '../Image/html.png';
import logoCss from '../Image/css.png';
import logoJs from '../Image/jsLogo.png';
import logoTs from '../Image/ts.png';
import logoRedux from '../Image/redux.png';
import logoReact from '../Image/react.png';

const Skills = () => {
    return (
        <div id="skills" className={style.skillsBlock}>
            <Fade right cascade>
                <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                    <Title title={"Skills"}/>
                    <div className={style.skills}>
                        <Skill title={"HTML"} logo={logoHtml}/>
                        <Skill title={"CSS"} logo={logoCss}/>
                        <Skill title={"JS"} logo={logoJs}/>
                        <Skill title={"TS"} logo={logoTs}/>
                        <Skill title={"REACT"} logo={logoReact}/>
                        <Skill title={"REDUX"} logo={logoRedux}/>
                    </div>
                </div>
            </Fade>
        </div>
    );
}

export default Skills;
