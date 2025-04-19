import ContactForm from "./ContactForm";
import ButtonLight from "../UI/ButtonLight";
import H3Header from "../UI/H3Header";
import ParagraphLight from "../UI/ParagraphLight";
import SectionHeader from "../UI/SectionHeader";
import EmailOptions from "../UI/EmailOptions";

const ContactSection = props => {
    return (<div class='bg-black pb-32'>
        <section id='section-contact'>
            <SectionHeader text={'Contact'} headerGradientStyle={'header-contact'} />
            <div class="flex flex-col gap-10 max-w-2xl mx-auto px-2">
                <H3Header class='text-white mt-32'>
                    Let’s connect and build something great!
                </H3Header>
                <p class='text-6xl text-center'>📮</p>
                <div data-theme="mytheme" class='flex flex-wrap-reverse justify-around'>
                    {/* <ButtonLight class='w-max btn-sm text-xs lg:btn-md mb-5 sm:mb-0'>abdelrahmansabry53@gmail.com</ButtonLight> */}
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:abdelrahmansabry53@gmail.com' target='_blank' rel="noreferrer" class="btn btn-primary mb-1 w-full z-1 relative lg:btn-md">abdelrahmansabry53@gmail.com</a>
                        <EmailOptions />
                    </div>
                    <ButtonLight class='w-max btn-md sm:mb-0' goTo='https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/' target='_blank' rel="noreferrer">Message me on LinkedIn</ButtonLight>
                </div>
                <ParagraphLight>
                    Feel free to reach out via email, connect with me on LinkedIn, or drop a message using the contact form below. I’m always open to new opportunities, collaborations, or just a friendly tech chat!
                </ParagraphLight>
                <ContactForm />
            </div>
        </section>
    </div>);
};

export default ContactSection;
