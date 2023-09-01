import { useRouter } from 'next/router';
import { client } from '@/lib/sanity';
import { PortableText } from '@portabletext/react';
import RichTextComponent from '@/components/RichTextComponent';

export default function BlogPost({ post }) {
  const router = useRouter();
  const { slug } = router.query;

  console.log(post.body[0]);

  // Fetch your blog post data here based on the `slug`

  return (
    <div>
      <h1>{slug}</h1>
      <p>BlooBLAH!</p>
      <PortableText value={post.body} components={RichTextComponent} />
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
