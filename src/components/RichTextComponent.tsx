import Image from 'next/image';

export const RichTextComponent = {
  types: {
    image: ({ node }) => {
      return (
        <Image
          src={node.url}
          alt={node.alt}
          width={node.dimensions.width}
          height={node.dimensions.height}
        />
      );
    },
  },
};
