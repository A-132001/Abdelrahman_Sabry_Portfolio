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
                blogTitle={'Mastering Django Models & Relationships 🔗'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://abdosabry.hashnode.dev/mastering-django-models-and-relationships'}
                linkDevto={'https://dev.to/abdosabry/mastering-django-models-and-relationships-2aa1'}>
                <ParagraphDark>
                    <p>In this article, I break down how to properly use Django models and define relationships like OneToMany, ManyToMany, and ForeignKey fields — with real-world examples from my Coffee Shop project ☕.</p>
                </ParagraphDark>
                <ParagraphDark>
                    <p>We’ll also cover tips for choosing the right relationship type, when to use related_name, and how to make your admin panel much easier to use. If you’re working on any Django app, this will save you hours of trial and error!</p>
                </ParagraphDark>
            </BlogPostIntro>
            <div class="divider w-1/2 mx-auto opacity-20"></div>
            <BlogPostIntro
                blogTitle={'Understanding useReducer in React 💡'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://abdosabry.hashnode.dev/react-usereducer-hook-explained'}
                linkDevto={'https://dev.to/abdosabry/react-usereducer-explained-4aah'}>
                <ParagraphDark><CodeInline>useReducer</CodeInline> is one of the most underrated hooks in React. It's a great choice for handling complex state and cleaner logic compared to multiple <CodeInline>useState</CodeInline> hooks.</ParagraphDark>
                <H4Header>Real example: Task Manager</H4Header>
                <ParagraphDark>I show how I used <CodeInline>useReducer</CodeInline> in a React Task Manager app to manage add/remove/update logic more efficiently using a reducer function and dispatching actions.</ParagraphDark>
                <H4Header>Why I prefer it over multiple useState</H4Header>
                <ParagraphDark>With multiple related states, <CodeInline>useReducer</CodeInline> simplifies the logic and keeps the code clean — especially for forms or nested objects.</ParagraphDark>
            </BlogPostIntro>
            <div class="divider w-1/2 mx-auto opacity-20"></div>
            <BlogPostIntro
                blogTitle={'API Development with Django REST Framework 🔥'}
                bgImage={'bg-blog-post'}
                linkHashnode={'https://abdosabry.hashnode.dev/api-development-with-drf'}
                linkDevto={'https://dev.to/abdosabry/api-development-with-drf-2025'}>
                <ParagraphDark><CodeInline>DRF</CodeInline> makes API development smooth and flexible. In this blog, I explain how to build a basic API with authentication, permissions, pagination, and filtering.</ParagraphDark>
                <H4Header>Authentication & JWT</H4Header>
                <ParagraphDark>I demonstrate how I integrated JWT authentication in one of my projects using <CodeInline>SimpleJWT</CodeInline> to secure endpoints.</ParagraphDark>
                <H4Header>Serializers & Custom Fields</H4Header>
                <ParagraphDark>I also cover tips on customizing serializers and handling nested fields or model relations efficiently. Perfect if you’re building a real-world back-end.</ParagraphDark>
            </BlogPostIntro>
            <div class='block mx-auto mt-20 text-center'>
                <a href='https://abdosabry.hashnode.dev' target='_blank' rel='noreferrer' class='btn'>Read more articles</a>
            </div>
        </section>
    );
};

export default BlogSection;
