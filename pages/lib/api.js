import client from './sanity';

export async function getAllBlogs() {
  const results = await client
    .fetch(`*[_type == "blog"]{
      title,
      subtitle,
      category,
      releaseDate,
      slug,
      "imageUrl": image.asset->url,
    }| order(date desc)`);
  return results;
}
