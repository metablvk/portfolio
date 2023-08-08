import {Category} from './category.type';
import {PortableTextBlock} from '@portabletext/types';

export type Post = {
  _id: string;
  createdAt: Date;
  name: string;
  categories: Category[];
  slug: string;
  image: string;
  content: PortableTextBlock[];
};
