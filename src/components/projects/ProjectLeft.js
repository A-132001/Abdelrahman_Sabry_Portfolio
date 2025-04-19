import ButtonLight from '../UI/ButtonLight';
import H3Header from '../UI/H3Header';
import H4Header from '../UI/H4Header';

const ProjectLeft = props => {
    return (
        <div class="mt-32 flex flex-wrap gap-6 max-w-5xl mx-auto px-2 text-white">
            <div class="w-full md:w-9/12 md:mx-auto lg:max-w-xl">
                <H3Header>
                    {props.projectTitle}
                </H3Header>
                {props.children}
                <H4Header>
                    Technologies I used
                </H4Header>
                <p data-theme="mytheme" class="text-secondary mb-5">
                    This project was built using the following tools and technologies:
                </p>
            </div>
            <div data-theme="mytheme" class="max-w-sm justify-self-end mx-auto">
                <div class="w-6/12 mx-auto lg:mx-0 lg:mr-auto lg:w-8/12 pt-14">
                    <ButtonLight goTo={props.buttonWatchItLive} target='_blank' rel="noreferrer">Live Demo 🚀</ButtonLight>
                    <ButtonLight goTo={props.buttonDescription} target='_blank' rel="noreferrer">Read More 📄</ButtonLight>
                    <ButtonLight goTo={props.buttonGitHub} target='_blank' rel="noreferrer">Source Code 💻</ButtonLight>
                    <div class={`${props.bgImage} bg-contain bg-no-repeat opacity-20 w-56 h-56 z-0 hidden lg:block`}></div>
                </div>
            </div>
        </div>
    );
};

export default ProjectLeft;