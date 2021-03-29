import client from './sanity';

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{
      title,
      category,
      "imageUrl": image.asset->url
    }[0]`);
  return results;
}