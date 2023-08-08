import {useEffect, useState} from 'react';
import Title from '../../components/title/title.component';
import {getPosts} from '../../sanity/sanity.utils';
import {Link} from 'react-router-dom';
import {Post} from '../../types/post.type';

const Blog = () => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    const posts = await getPosts();
    setPosts(posts);
    console.log(posts);
  };
  return (
    <div className="relative mt-12">
      <Title title="Blog" subTitle="Some blog posts by me" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="posts mt-8">
          {posts &&
            posts.map(post => (
              <div>
                <Link to={`${post.slug}`}>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-custom-purple text-xl tracking-wide">
                      {post.name}{' '}
                    </h3>
                    <p className=" font-bold">
                      {' '}
                      {`${String(post._createdAt).slice(
                        0,
                        String(post._createdAt).indexOf('T')
                      )}`}
                    </p>
                  </div>
                </Link>
                <hr className="border-custom-grey border-1" />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
