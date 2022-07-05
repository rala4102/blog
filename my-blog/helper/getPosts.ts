import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

interface Items {
  [key: string]: string
};

interface Post {
  data: Items
  content: string
};

const POSTS_PATH = join(process.cwd(), 'posts');

function getPostFilePaths(): string[] {
  return fs.readdirSync(POSTS_PATH);
}

export function getPost(slug: string): Post {
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  return matter(fileContents);
}

export function getPostItems(filePath: string, fields: string[] = []): Items {
  const slug = filePath.replace(/\.mdx?$/, '');
  const { data, content } = getPost(slug);
  const items: Items = {};

  fields.forEach((field) => {
    if (field === 'slug') items[field] = slug;
    if (field === 'content') items[field] = content;
    if (data[field]) items[field] = data[field];
  });

  return items;
}

export function getAllPosts(fields: string[] = []): Items[] {
  const filePaths = getPostFilePaths();
  const posts = filePaths
    .map(filePath => getPostItems(filePath, fields))
    .sort((post1, post2) => (Number(post1.date) - Number(post2.date)));

  return posts;
}