import { useEffect, useState } from 'react';
import locationPin from '../../assets/img/locationPin.png';
import hero1 from '../../assets/img/hero1.webp';
import resume from '../../assets/pdf/MainResume.pdf';
import EmailOptions from './EmailOptions';

const Hero = props => {
    const [isAnimated1, setIsAnimated1] = useState(true);
    const [isAnimated2, setIsAnimated2] = useState(false);
    const [isAnimated3, setIsAnimated3] = useState(false);

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsAnimated2(!isAnimated2);
            setTimeout(() => { setIsAnimated1(!isAnimated1); }, 2000);
            setTimeout(() => {
                setIsAnimated3(!isAnimated3);
                setTimeout(() => { setIsAnimated2(!isAnimated2); }, 2000);
                setTimeout(() => {
                    setIsAnimated1(!isAnimated1);
                    setTimeout(() => { setIsAnimated3(!isAnimated3); }, 2000);
                }, 1000);
            }, 2000);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, [isAnimated1, isAnimated2, isAnimated3]);

    const commonClasses = 'inline-block subpixel-antialiased';
    const commonBigTextClasses = 'text-6xl md:text-8xl lg:text-9xl';
    const tailwindClassName = `text-3xl md:text-4xl lg:text-5xl ${commonClasses} ${isAnimated1 && 'name-gradient'}`;
    const tailwindClassWeb = `${commonBigTextClasses} ${commonClasses} ${isAnimated2 && 'first-word-gradient'}`;
    const tailwindClassDeveloper = `pb-4 ${commonBigTextClasses} ${commonClasses} ${isAnimated3 && 'second-word-gradient'}`;

    return (
        <div class='hero min-h-85vh'>
            <div class='text-left hero-content items-start'>
                <div>
                    <img src={hero1} alt='Abdelrahman Sabry with a hat in a park on a sunny day.' class='mt-10 hidden lg:block lg:max-w-xs xl:max-w-md' />
                </div>
                <div class='max-w-2xl'>
                    <p class='mb-5'><span><img src={locationPin} class='h-4 inline mb-1 mr-1' alt='Location pin icon' /></span>Cairo, Egypt</p>
                    <h1 class='mb-5 font-bold font-poppins'>
                        <span class={tailwindClassName}>Abdelrahman Sabry,</span><br /><span class={tailwindClassWeb}>Software</span><br /><span class={tailwindClassDeveloper}>Engineer </span>
                    </h1>
                    <p class='my-8 md:my-16 text-neutral xl:leading-loose'>
                        I’m a Full-Stack Developer based in Cairo, with strong experience in Django, Flask, React, and PostgreSQL. I specialize in building scalable web applications with a focus on backend development, API design, and improving front-end functionality. I'm passionate about solving real-world problems through clean, efficient code.
                    </p>
                    <a href={resume} target='_blank' rel="noreferrer" class='btn mr-10 btn-md text-xs mb-5 sm:mb-0'>Get my Resume</a>
                    <div class="dropdown dropdown-hover">
                        <a href='mailto:abdelrahmansabry53@gmail.com' target='_blank' rel="noreferrer" class="btn btn-outline btn-md text-xs">abdelrahmansabry53@gmail.com</a>
                        <EmailOptions />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Hero;
