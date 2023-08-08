import {useEffect, useState, MouseEvent} from 'react';
import Title from '../../components/title/title.component';
import {getCategories, getPosts} from '../../sanity/sanity.utils';
import {Link} from 'react-router-dom';
import {Post} from '../../types/post.type';
import {Category} from '../../types/category.type';
import CategoryFilter from '../../components/category-filter/category-filter.component';
const Blog = () => {
  const [posts, setPosts] = useState<Post[] | []>([]);
  const [fPosts, setFPosts] = useState<Post[] | []>([]);
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [fCategory, setFCategory] = useState<string>('all');
  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const categories = await getCategories();
    setCategories(categories);
  };

  const fetchProjects = async () => {
    const posts = await getPosts();
    setPosts(posts);
    setFPosts(posts);
  };

  const handleCategory = (e: MouseEvent) => {
    const {id} = e.target as HTMLButtonElement;
    setFCategory(id);
  };

  useEffect(() => {
    let fC = [];
    if (fCategory === 'all') {
      fC = [...posts];
    } else {
      for (let i = 0; i < posts.length; i++) {
        console.log(posts[i]);
        for (let j = 0; j < posts[i].categories.length; j++) {
          if (posts[i].categories[j].name === fCategory) {
            fC.push(posts[i]);
          }
        }
      }
    }
    setFPosts(fC);
  }, [fCategory, posts]);
  return (
    <div className="relative mt-12">
      <Title title="Blog" subTitle="Some blog posts by me" />
      <div className="grid grid-cols-1 md:grid-cols-5 mt-8 gap-4">
        <div className="posts md:col-span-2">
          {fPosts &&
            fPosts.map(post => (
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
            ))}
        </div>
        {/* Tablet/Desktop categories component */}
        <CategoryFilter
          fCategory={fCategory}
          handleCategory={handleCategory}
          categories={categories}
        />
      </div>
    </div>
  );
};

export default Blog;
