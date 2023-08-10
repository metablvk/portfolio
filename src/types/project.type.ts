import {Category} from './category.type';
import {PortableTextBlock} from '@portabletext/types';

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  categories: Category[];
  slug: string;
  image: string;
  url: string;
  github: string;
  content: PortableTextBlock[];
};
