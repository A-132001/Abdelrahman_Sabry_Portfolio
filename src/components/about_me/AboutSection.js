import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import AboutMe from "./AboutMe";

const AboutSection = props => {
    return (
        <div class='bg-black pb-32'>
            <section id='section-about'>
                <SectionHeader text={'About Me'} headerGradientStyle={'header-about-me'} />
                <AboutMe projectTitle={`Hi! 👋 I'm Abdelrahman`} bgImage={'bg-virus'} techStack={['HTML5', 'CSS3', 'GitHub', 'JS', 'React', 'Figma', 'Netlify', 'Linux']}>
                    <ParagraphLight>
                        My journey into tech began during my high school years, where my passion for problem-solving and curiosity about how things work naturally drew me into programming and web development.
                    </ParagraphLight>
                    <ParagraphLight>
                        I started out exploring C and Arduino through Samsung Innovation Campus, where I worked on a smart home project. That experience sparked my love for building real-world solutions and taught me the value of hands-on learning.
                    </ParagraphLight>
                    <ParagraphLight>
                        Later, I dived deeper into coding through problem-solving and data structures, eventually working with languages like Python and JavaScript. I enjoyed creating useful scripts and building my logic skills through platforms like Codeforces and HackerRank.
                    </ParagraphLight>
                    <ParagraphLight>
                        While studying Computer Science and Artificial Intelligence at Sohag University, I developed a strong foundation in software engineering. My graduation project was an ERP system using facial recognition — combining practical back-end development with a meaningful real-world application.
                    </ParagraphLight>
                    <ParagraphLight>
                        I also joined the ITI Full-Stack track to push my skills further, learning advanced back-end tools like Django, DRF, Flask, PostgreSQL, Docker, and front-end technologies like React and Next.js. These tools helped me bring ideas to life in a more complete and efficient way.
                    </ParagraphLight>
                    <ParagraphLight>
                        Along the way, I’ve shared knowledge with others as a web instructor in GDSC and a programming mentor in Samsung’s programs. Teaching not only solidified my understanding but made me more passionate about the tech community.
                    </ParagraphLight>
                    <ParagraphLight>
                        I’m now focused on becoming a professional full-stack developer. I enjoy building clean APIs, improving UI/UX, and solving challenges that help products grow and scale. Whether I’m designing a database schema or tweaking a front-end layout — I’m all in.
                    </ParagraphLight>
                    <ParagraphLight>
                        I may still be early in my career, but I’m learning every day, building real projects, and pushing myself to grow with every opportunity. I believe in continuous learning and that success comes from persistence and passion.
                    </ParagraphLight>
                    <ParagraphLight>
                        “Don’t limit your challenges, challenge your limits” — that’s a quote I live by, and I’m ready for the journey ahead. 💪🚀
                    </ParagraphLight>
                </AboutMe>
            </section>
        </div>
    );
};

export default AboutSection;
