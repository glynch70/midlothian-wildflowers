import type { Metadata } from "next";

const siteName = "Midlothian Wildflowers";
const defaultImage = "/images/hero.jpeg";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({ title, description, path }: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url: path,
      siteName,
      locale: "en_GB",
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: "White butterfly on thistle flowers for Midlothian Wildflowers",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [defaultImage],
    },
  };
}
