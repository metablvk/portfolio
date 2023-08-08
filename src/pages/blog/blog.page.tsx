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
      <div className="posts mt-8">
        {posts &&
          posts.map(post => (
            <div>
              <Link to={`${post.slug}`}>
                <h2>{post.name}</h2>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blog;
