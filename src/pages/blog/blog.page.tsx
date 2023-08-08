import {useEffect, useState, MouseEvent} from 'react';
import Title from '../../components/title/title.component';
import {getCategories, getPosts} from '../../sanity/sanity.utils';
import {Post} from '../../types/post.type';
import {Category} from '../../types/category.type';
import CategoryFilter from '../../components/category-filter/category-filter.component';
import Posts from '../../components/posts/posts.component';

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
          {fPosts && <Posts posts={fPosts} />}
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
