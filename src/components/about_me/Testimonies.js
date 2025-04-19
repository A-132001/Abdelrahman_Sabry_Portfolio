import reviewCesar from '../../assets/img/cesar-villagra.webp';
import reviewExequiel from '../../assets/img/exequiel-barrirero.webp';
import reviewAdrian from '../../assets/img/adrian-dzienisik.webp';
import CardTestimony from "./CardTestimony";

const Testimonies = props => {
    return (
        <div class="flex flex-wrap gap-10 justify-evenly max-w-6xl mx-auto -mt-80 ">
            <CardTestimony image={reviewCesar} goTo='https://www.linkedin.com/in/example-profile/' personName='Mohamed Fathy' jobPosition={
                <>
                    <p>Mid-Level Software Engineer</p>
                    <p>Team Lead @ ITI</p>
                    <p>Python & Django Specialist</p>
                </>}>
                <p>“Abdelrahman is one of the most dedicated and driven developers I’ve worked with. His ability to break down complex problems and deliver clean, scalable code has had a real impact on our team. He’s always learning and improving, and his attitude is both humble and professional. A true asset to any project.”</p>
            </CardTestimony>
            <CardTestimony image={reviewExequiel} goTo='https://www.linkedin.com/in/example-profile/' personName='Salma El Gohary' jobPosition={
                <>
                    <p>Front-End Engineer</p>
                    <p>Instructor @ GDSC</p>
                    <p>React & UI/UX Designer</p>
                </>}>
                <p>“Working with Abdelrahman at GDSC was an inspiring experience. He’s a great teacher, very supportive, and always makes sure his students really understand the content. His backend knowledge and commitment to teamwork made him a key part of our success in multiple workshops.”</p>
            </CardTestimony>
            <CardTestimony image={reviewAdrian} goTo='https://www.linkedin.com/in/example-profile/' personName='Omar Elsayed' jobPosition={
                <>
                    <p>Software Engineer</p>
                    <p>Mentor @ Samsung Innovation Campus</p>
                    <p>AI & Problem-Solving Coach</p>
                </>}>
                <p>“I had the pleasure of mentoring Abdelrahman during his early stages at Samsung Innovation Campus. He stood out immediately with his passion, strong problem-solving skills, and the way he took initiative. Now, seeing how far he’s come and how he mentors others — I can confidently say he’s on the right track to becoming one of the best in the field.”</p>
            </CardTestimony>
        </div>
    );
};

export default Testimonies;
