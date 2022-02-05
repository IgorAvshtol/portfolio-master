import style from './Skill.module.scss';

const Skill = (props) => {
    return (
        <div className={style.skill}>
            <img src={props.logo} className={style.icon}/>
            <div className={style.title}>
                <h3>{props.title}</h3>
            </div>
        </div>
    );
}

export default Skill;
