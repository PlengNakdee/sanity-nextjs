// import BlogContent from './BlogContent';
// import { getAllBlogs } from '../lib/api';
import client from '../lib/sanity';

// const blogs = {
//   sections: [
//     {
//       title: 'hats',
//       imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
//       category: 'Video',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.'
//     },
//     {
//       title: 'jackets',
//       imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
//       category: 'Article',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.'
//     },
//     {
//       title: 'sneakers',
//       imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
//       category: 'Case Study',
//       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.'
//     },
//   ]

// }

export default function Blog({ blogs }: any) {
  return (
    <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            From the blog
      </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            This could be another text.
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {/* {
            blogs.map(({ title, imageUrl, category }) => (
              <BlogContent title={title} imageUrl={imageUrl} category={category} />
            ))
          } */}
          This should show JSON
          {JSON.stringify(blogs)}

        </div>
      </div>
    </div>
  )
}

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{
      title,
      category,
      "imageUrl": image.asset->url
    }[0]`);
  return results;
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs
    }
  }
}
