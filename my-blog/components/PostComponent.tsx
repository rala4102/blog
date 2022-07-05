import Link from "next/link";
import { iPost } from "../types/post";

const PostComponent = (props: iPost) => {
  return (
    <div className="my-4 py-4 border-b">
      <Link href="/[slug]" as={`/${props.slug}`}>
        <h2 className="font-bold text-2xl my-2 text-blue-500 cursor-pointer">{props.title}</h2>
      </Link>
      <time className="text-gray-400">{props.date}</time>
      <p className="mt-2 italic">{props.description}</p>
    </div>
  );
};

export default PostComponent;
