import ProjectRight from '../projects/ProjectRight';
import ProjectLeft from '../projects/ProjectLeft';
import SectionHeader from '../UI/SectionHeader';
import ParagraphLight from '../UI/ParagraphLight';
import H4Header from '../UI/H4Header';
// import CodeLibraryItem from './components/projects/CodeLibraryItem';

const ProjectsSection = props => {
    return (
        <div class='bg-black'>
            <section id="section-projects">
                <SectionHeader text={'Projects'} headerGradientStyle={'header-projects'} />
                <ProjectRight
                    projectTitle={'Donations Platform'}
                    bgImage={'bg-virus'}
                    techStack={['Django', 'Tailwind', 'GitHub', 'HTML5', 'CSS3', 'JS']}
                    buttonWatchItLive={'https://donations-main-production.up.railway.app/'}
                    buttonDescription={'https://www.linkedin.com/posts/abdelrahman-sabry-saber-4194b21a5_django-webdevelopment-python-activity-7318959577037701120-zqsD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC_zCtUBCOmfJE1EIgGWXDOK1OUHGFNGDDMhttps://www.linkedin.com/posts/abdelrahman-sabry-saber-4194b21a5_django-webdevelopment-python-activity-7318959577037701120-zqsD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC_zCtUBCOmfJE1EIgGWXDOK1OUHGFNGDDM'}
                    buttonGitHub={'https://github.com/A-132001/Donations_website_iti'}>
                    <ParagraphLight>
                        <p>This donation platform is one of the projects I’m most proud of 🤍. It was a great opportunity to apply my backend development skills using Django and to dive deeper into building real-world systems with authentication, APIs, and secure data handling.</p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>When I started this project, I had just finished mastering Django’s MVT architecture, JWT authentication, and third-party OAuth integrations. I wanted to bring all this together in one meaningful project that can actually help others.</p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <H4Header>Lessons Learned</H4Header>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>At first, it looked like a straightforward platform, but it quickly turned into a complex system, especially since it involved three tightly connected Django apps: <strong>accounts</strong>, <strong>campaigns</strong>, and <strong>transactions</strong>.</p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>Implementing email verification, Facebook login, and password recovery taught me a lot about authentication systems and user experience. Also, integrating JWT tokens securely pushed me to better understand token-based APIs 🔐.</p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>I also faced several challenges when designing how campaigns and transactions relate to each other. Modeling these relationships with foreign keys and making sure the data flow was smooth really sharpened my understanding of Django’s ORM.</p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>This project still has room for improvement, especially on the front-end side, but I’m proud of how it’s functioning and how much I learned from it. It reflects my progress as a full-stack developer 🛠️.</p>
                    </ParagraphLight>

                    {/* <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/61NIjXcV5wg" title="Donation Platform Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight> */}
                </ProjectRight>
                <ProjectLeft
                    projectTitle={'To-Do app'}
                    bgImage={'bg-to-do'}
                    techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'Figma', 'Netlify']}
                    buttonWatchItLive={'https://colo-codes.github.io/mini-projects/todo-app/'}
                    buttonDescription={'https://blog.damiandemasi.com/my-first-vanilla-javascript-project-making-a-simple-to-do-app'}
                    buttonGitHub={'https://github.com/Colo-Codes/mini-projects/tree/main/todo-app'}>
                    <ParagraphLight>
                        <p>Doing courses and tutorials is great, but sometimes is difficult to evaluate how much are we actually learning. Watching video after video and coding along with the instructor gives us very good guidance, but it is not a realistic scenario. In a real-world job, we will have to solve problems and start figuring things out by ourselves (with the help of Google, of course 😉). So, to test how much I was actually learning during the JavaScript course I was doing I decided to make a simple To-Do app in HTML, CSS and vanilla JavaScript.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <H4Header>Lessons learned</H4Header>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Thanks to this project I could have a taste of how much work an application like this one takes.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I learned about the importance of structuring HTML in a meaningful semantic way, and how a good HTML structure can make our lives easy when we start working on CSS and JavaScript in later stages of the project.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>I underestimated CSS 😅. The classes names are a bit funny and messy, so in the future, I'll try to implement BEM notation and maybe SASS. I discovered that some behaviour that initially thought of was in the realm of JavaScript can easily be achieved with CSS, such as animations on elements.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>Regarding JavaScript, this was the first time I coded following the OOP paradigm and, despite feeling a bit out of my element, I now can see the potential that following this paradigm has.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <p>The project has a lot of room for improvement, but I wanted to live it like that to have a "snapshot" of my knowledge and skills up to the point in time where I was working on it.</p>
                    </ParagraphLight>
                    <ParagraphLight>
                        <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/vAL7ocx5oZI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}></iframe>
                        </div>
                    </ParagraphLight>
                </ProjectLeft>
            </section>
        </div>
    );
};

export default ProjectsSection;