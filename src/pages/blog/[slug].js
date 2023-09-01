import { useRouter } from 'next/router';
import { client } from '@/lib/sanity';

export default function BlogPost({ post }) {
  const router = useRouter();
  const { slug } = router.query;

  // Fetch your blog post data here based on the `slug`

  return (
    <div>
      <h1>{slug}</h1>
      <p>BlooBLAH!</p>
      <p>{post.body[0]}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const query = '*[_type == "post"]{ "slug": slug.current }';
  const posts = await client.fetch(query);
  const paths = posts.map(({ slug }) => ({ params: { slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]`,
    { slug }
  );
  return {
    props: { post },
  };
}
