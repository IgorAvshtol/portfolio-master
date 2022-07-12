import style from './Projects.module.scss';
import styleContainer from '../Common/Styles/Container.module.scss';
import Project from "./MyWork/Project";
import Title from "../Common/component/title/Title";
import store from "../Image/bookStore.jpg";
import todo from "../Image/todo.jpg";
import publishingPlatform from "../Image/publishingPlatform.jpg"

const Projects = () => {

    const Store = {
        backgroundImage: `url(${store})`
    }

    const TodoList = {
        backgroundImage: `url(${todo})`
    }

    const PublishingPlatform = {
        backgroundImage: `url(${publishingPlatform})`
    }

    return (
        <div id="projects" className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title title={"Projects"}/>
                <div className={style.works}>
                    <Project img={Store}
                             url={'https://itransition-main-app.herokuapp.com/'}
                             title={"Books-store"}
                    />
                    <Project img={TodoList}
                             url={'https://igoravshtol.github.io/TodoList/'}
                             title={"TodoList"}
                    />
                    <Project img={PublishingPlatform}
                             url={'https://init-app-alpha.vercel.app/'}
                             title={"PublishingPlatform"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Projects;
