import {Link} from 'react-router-dom';
import {Post} from '../../types/post.type';

type PProps = {
  posts: Post[];
};
const Posts = ({posts}: PProps) => {
  return posts.map((post: Post) => (
    <div>
      <Link to={`${post.slug}`} key={post._id}>
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
  ));
};

export default Posts;
