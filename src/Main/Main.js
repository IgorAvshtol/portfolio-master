import style from './Main.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Particles from "react-particles-js";
import ReactTypingEffect from 'react-typing-effect';
import ava from '../Image/ava.jpg';
import react from '../Image/reactLogo.png';
import js from '../Image/jsLogo.png';

const particlesOpt = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1,
            "out_mode": "out"
        },
        "shape": {
            "type": [
                "image",
                // "circle"
            ],
            "image": [
                {
                    "src": js,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": react,
                    "height": 20,
                    "width": 20
                },
            ]
        },
        "color": {
            "value": "#CCC"
        },
        "size": {
            "value": 30,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 3,
                "size_min": 10,
                "sync": false
            }
        }
    },
    "retina_detect": false
}


const Main = () => {

    return (
        <div id="main" className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOpt}/>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>
                        <ReactTypingEffect
                            text={["Hi, i'm"]}/>
                    </span>
                    <h1>Igor Avshtol</h1>
                    <p><ReactTypingEffect
                        text={["Front-end Developer"]}/>
                    </p>
                </div>
                <div className={style.photo}>
                    <img src={ava}/>
                </div>
            </div>

        </div>
    );
}

export default Main;
