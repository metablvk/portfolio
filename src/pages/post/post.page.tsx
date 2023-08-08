import {useEffect, useState} from 'react';
import {getPost} from '../../sanity/sanity.utils';
import {useParams} from 'react-router-dom';
import {Post} from '../../types/post.type';
import {PortableText} from '@portabletext/react';

const Post = () => {
  const {slug} = useParams();

  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (slug) {
        const post = await getPost(slug);
        setPost(post);
        console.log(post);
      }
    };
    fetchPost();
  }, [slug]);

  return (
    <div className="relative mt-12">
      <h1 className="mb-4 text-3xl font-bold">{post && post.name}</h1>
      <div className="max-w-prose">
        {post && <PortableText value={post.content} />}
      </div>
    </div>
  );
};

export default Post;
