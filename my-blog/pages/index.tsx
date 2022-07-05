import { GetStaticProps } from 'next';
import { iPost } from '../types/post';
import { getAllPosts } from '../helper/getPosts';
import PostComponent from '../components/PostComponent'

type Props = {
  posts: iPost[];
};

const Home: React.FC<Props> = ({ posts }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold my-6">블로그 제목은 여기에</h1>
      <div className="space-y-2">
        {posts.map((post) => <PostComponent
          key={post.slug}
          date={post.date}
          title={post.title}
          description={post.description}
          slug={post.slug}
        />)}
      </div>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts([
    'slug',
    'date',
    'title',
    'description',
  ]);

  return { props: { posts } };
};