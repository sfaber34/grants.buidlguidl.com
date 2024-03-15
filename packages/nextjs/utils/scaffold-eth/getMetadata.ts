import type { Metadata } from "next";

export const getMetadata = ({
  title,
  description,
  imageRelativePath = "/thumbnail.jpg",
}: {
  title: string;
  description: string;
  imageRelativePath?: string;
}): Metadata => {
  const baseUrl = "https://grants.buidlguidl.com";
  const imageUrl = `${baseUrl}/${imageRelativePath}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      images: [
        {
          url: imageUrl,
        },
      ],
    },
    twitter: {
      title: title,
      description: description,
      images: [imageUrl],
    },
  };
};
