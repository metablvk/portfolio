import {MouseEventHandler} from 'react';
import {Category} from '../../types/category.type';

type CFProps = {
  fCategory: string;
  categories: Category[];
  handleCategory: MouseEventHandler<HTMLButtonElement>;
  size: string;
};

const CategoryFilter = ({
  fCategory,
  handleCategory,
  categories,
  size,
}: CFProps) => {
  if (size === 'mobile') {
    return (
      <div className="flex flex-wrap  md:hidden mt-8">
        <button
          className={`cursor-pointer border-custom-purple  px-4 mb-2 ${
            fCategory === 'all' ? 'border' : ''
          }`}
          onClick={handleCategory}
          id="all"
        >
          All
        </button>
        {categories.map((category: Category) => (
          <button
            className={`cursor-pointer border-custom-purple px-4  mb-2 ${
              category.name === fCategory ? 'border' : ''
            }`}
            onClick={handleCategory}
            id={category.name}
            key={category._id}
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
  return (
    <div className="border border-custom-grey categories hidden md:block md:col-span-2 md:col-start-4 p-4">
      <h2 className="mb-4 pl-4 border-b border-custom-grey pb-4">Categories</h2>
      {/* <hr className="border-custom-grey mb-4" /> */}
      <div className="flex flex-col items-start space-y-4 pl-4">
        <button
          className={`cursor-pointer ${
            fCategory === 'all' ? 'text-custom-purple' : ''
          }`}
          onClick={handleCategory}
          id="all"
        >
          All
        </button>
        {categories.map((category: Category) => (
          <button
            className={`cursor-pointer ${
              category.name === fCategory ? 'text-custom-purple' : ''
            }`}
            onClick={handleCategory}
            id={category.name}
            key={category._id}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
