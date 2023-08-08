import {createClient} from '@sanity/client';
import {Post} from '../types/post.type';

export const client = createClient({
  projectId: 'tzo8efk4',
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-08-07', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

export async function getPosts(): Promise<Post[]> {
  return client.fetch(`*[_type == "post"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    alt,
    content
  }`);
}

export async function getPost(slug: string): Promise<Post> {
  return client.fetch(
    `*[_type == "post"&& slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    alt,
    content
  }`,
    {slug}
  );
}
