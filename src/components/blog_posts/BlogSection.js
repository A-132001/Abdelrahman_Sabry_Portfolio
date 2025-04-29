import BlogPostIntro from '../blog_posts/BlogPostIntro';
import ParagraphDark from '../UI/ParagraphDark';
import H4Header from '../UI/H4Header';
import CodeInline from '../UI/CodeInline';
import SectionHeader from '../UI/SectionHeader';

const BlogSection = props => {
    return (
        <section id="section-blog-posts">
            <SectionHeader text={'Blog Posts'} headerGradientStyle={'header-blog-posts'} class={'mt-24 lg:mt-20'} />

            <BlogPostIntro
                blogTitle={'Django Models & Relationships Explained 🔗'}
                bgImage={'bg-blog-post'}
                linkLinkedin={'https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/'}>
                <ParagraphDark>
                    <p>In this blog, I shared how I handled Django relationships like OneToMany, ManyToMany, and ForeignKey in my Coffee Shop project ☕ — with code snippets and real use cases.</p>
                </ParagraphDark>
                <ParagraphDark>
                    <p>I also explained when to use <CodeInline>related_name</CodeInline>, how to keep your models clean, and how to enhance your Django Admin view to be more readable and useful.</p>
                </ParagraphDark>
            </BlogPostIntro>

            <div class="divider w-1/2 mx-auto opacity-20"></div>

            <BlogPostIntro
                blogTitle={'React useReducer Simplified 💡'}
                bgImage={'bg-blog-post'}
                linkLinkedin={'https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/'}>
                <ParagraphDark>
                    <CodeInline>useReducer</CodeInline> can be a life-saver when you’re managing multiple related states. I used it in my React Task Manager to handle add/remove/update actions in a clean and efficient way.
                </ParagraphDark>
                <H4Header>Where it really helped</H4Header>
                <ParagraphDark>
                    Instead of cluttering my code with lots of <CodeInline>useState</CodeInline> hooks, I grouped logic inside a reducer function and dispatched actions. Much more scalable!
                </ParagraphDark>
                <H4Header>When to use useReducer</H4Header>
                <ParagraphDark>
                    If you're working with forms, nested states, or complex logic — useReducer is the way to go.
                </ParagraphDark>
            </BlogPostIntro>

            <div class="divider w-1/2 mx-auto opacity-20"></div>

            <BlogPostIntro
                blogTitle={'Build APIs with Django REST Framework 🔥'}
                bgImage={'bg-blog-post'}
                linkLinkedin={'https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/'}>
                <ParagraphDark>
                    DRF makes back-end API development much smoother. In this blog, I explain how I built APIs with JWT authentication, filtering, pagination, and permission control.
                </ParagraphDark>
                <H4Header>Secure APIs with JWT</H4Header>
                <ParagraphDark>
                    I show how I added authentication using <CodeInline>SimpleJWT</CodeInline> and made my endpoints secure.
                </ParagraphDark>
                <H4Header>Clean Serializers</H4Header>
                <ParagraphDark>
                    I shared some tips for working with nested serializers and custom fields to keep your API flexible and scalable.
                </ParagraphDark>
            </BlogPostIntro>

            <div class='block mx-auto mt-20 text-center'>
                <a href='https://www.linkedin.com/in/abdelrahman-sabry-saber-4194b21a5/' target='_blank' rel='noreferrer' class='btn'>
                    Visit my LinkedIn for more articles
                </a>
            </div>
        </section>
    );
};

export default BlogSection;
