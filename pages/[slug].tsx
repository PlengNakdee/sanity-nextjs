import { getAllBlogs } from "./lib/api";
import sanity from "./lib/sanity";
import Header from "./components/Header";
import Footer from "./components/Footer";

const BlogPage = ({ blog }: any) => {

  return (
    <div>
      <Header />
      <div className="bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
          <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
            <div>
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">{blog.category}</h2>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{blog.title}</h3>
            </div>
          </div>
          <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
            <div className="relative lg:row-start-1 lg:col-start-2">
              <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
                <defs>
                  <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
              </svg>
              <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
                <figure>
                  <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                    <img className="rounded-lg shadow-lg object-cover object-center" src={blog.imageUrl} alt="" width="1184" height="1376" />
                  </div>
                </figure>
              </div>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="text-base max-w-prose mx-auto lg:max-w-none">
                <p className="text-lg text-gray-500">{blog.subtitle}</p>
              </div>
              <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
                <p>{blog.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default BlogPage;

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs.map((blog: any) => ({
    params: { slug: blog.slug }
  }))
  return {
    paths,
    fallback: false
  }
}
const singleBlogQuery = `*[_type == "blog" && slug == $slug] {
      title,
      category,
      subtitle,
      text,
      "imageUrl": image.asset->url,
}[0]`;

export const getStaticProps = async ({ params }: any) => {
  const blog = await sanity.fetch(singleBlogQuery, { slug: params.slug });
  return { props: { blog } };
};
