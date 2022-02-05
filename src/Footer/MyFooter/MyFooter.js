import style from './MyFooter.module.scss';

const MyFooter = (props) => {
    return (
        <div className={style.footerElement}>
            <img src={props.logo} className={style.icon}/>
            <p>{props.discription}</p>
        </div>
    );
}

export default MyFooter;
