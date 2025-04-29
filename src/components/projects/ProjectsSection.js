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
                    projectTitle={'Coffee Shop Website'}
                    bgImage={'bg-to-do'}
                    techStack={['Django', 'Tailwind', 'GitHub', 'HTML5', 'CSS3', 'JS']}
                    buttonWatchItLive={'https://coffeeshopproject-production.up.railway.app/'}
                    buttonDescription={'https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/'}
                    buttonGitHub={'https://github.com/A-132001/CoffeeShopProject'}>
                    <ParagraphLight>
                        <p>
                            Building this Coffee Shop website was an important milestone in my full-stack journey. Instead of just following tutorials, I decided to put my Django skills to the test and create a full-featured e-commerce-style project using Django, PostgreSQL, and HTML/CSS templates. It’s a realistic, practical application that showcases authentication, search, product listing, and checkout systems — everything a real user would expect. ☕
                        </p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <H4Header>Lessons learned 📘</H4Header>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>
                            This project gave me hands-on experience with how real-world applications are structured. I learned how to connect Django with PostgreSQL and how to manage user authentication, product models, and order logic cleanly and securely.
                        </p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>
                            I also understood how important good HTML structure is when using Django templates. It helped me style the pages efficiently and add dynamic content without breaking the design.
                        </p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>
                            Styling the pages using CSS3 and Tailwind taught me a lot about responsive design and layout best practices. I’m now more confident in keeping designs consistent and clean. 🎨
                        </p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>
                            This was also my first time implementing a full checkout system and paginated product views. I gained a clearer picture of how back-end logic works together with front-end presentation to deliver a seamless user experience. 🛒
                        </p>
                    </ParagraphLight>

                    <ParagraphLight>
                        <p>
                            There’s always room to improve, but I’m proud of this project as a snapshot of my current full-stack skills and how far I’ve come in Django development. 🚀
                        </p>
                    </ParagraphLight>
                </ProjectLeft>

            </section>
        </div>
    );
};

export default ProjectsSection;