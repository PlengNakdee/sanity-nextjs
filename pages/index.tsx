import Hero from './components/Hero';
import Leaderboard from './components/Leaderboard';
// import Blog from './components/Blog';
import BlogContents from './components/BlogContent';
import Footer from './components/Footer';
import { getAllBlogs } from './lib/api';

export default function Home({ blogs }: any) {
  return (
    <div>
      <Hero />
      <Leaderboard />
      <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="absolute inset-0">
          <div className="bg-white h-1/3 sm:h-2/3"></div>
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
      </h2>
            {JSON.stringify(blogs)}
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              This could be another text.
               {/* {JSON.stringify(paths)} */}
            </p>
          </div>
          <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {
              blogs.map(({ title, imageUrl, category, releaseDate }: any) => (
                <BlogContents title={title} imageUrl={imageUrl} category={category} releaseDate={releaseDate} />
              ))
            }

          </div>
        </div>
      </div>
      <Footer />
    </div>


  )
}
// export async function getStaticPaths() {
//   const blogs = await getAllBlogs();
//   const paths = blogs?.map(b => ({ params: { slug: b.slug } }));
//   return {
//     paths,
//     fallback: false
//   }
// }
// export async function getStaticPaths() {
//   const blogs = await getAllBlogs();
//   const paths = blogs.map((blog: any) => ({
//     params: { slug: blog.slug }
//   }))
//   return {
//     paths,
//     fallback: false
//   }
// }

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}