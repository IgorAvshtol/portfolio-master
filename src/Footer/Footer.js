import style from './Footer.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import MyFooter from './MyFooter/MyFooter';
import Title from '../Common/component/title/Title';
import logoTg from '../Image/telegram.png';
import logoGit from '../Image/git.png';

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title title={"Avshtol Igor"}/>
                <div className={style.footer}>
                    <MyFooter logo={logoTg} width={'66px'} discription={'@ihariharihar'}/>
                    <MyFooter logo={logoGit} discription={<a href="https://github.com/IgorAvshtol/">GitHub.com</a>}/>
                </div>
            </div>
        </div>
    );
}

export default Footer;