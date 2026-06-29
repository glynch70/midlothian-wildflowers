export type ManagedImage = {
  src: string;
  alt: string;
};

export const siteImages = {
  hero: {
    src: "/images/hero-wildflower-meadow.svg",
    alt: "A wildflower meadow with rolling Midlothian hills in the distance",
  },
  about: {
    src: "/images/community-planting.svg",
    alt: "Volunteers planting native wildflowers together",
  },
  volunteer: {
    src: "/images/volunteers-meadow.svg",
    alt: "Community volunteers restoring a meadow edge",
  },
  gallery: [
    {
      src: "/images/gallery-meadow.svg",
      alt: "Native wildflower meadow in bloom",
      category: "Projects",
    },
    {
      src: "/images/gallery-pollinator.svg",
      alt: "Pollinator visiting a native flower",
      category: "Wildlife",
    },
    {
      src: "/images/gallery-event.svg",
      alt: "Community event with families outdoors",
      category: "Events",
    },
    {
      src: "/images/gallery-volunteers.svg",
      alt: "Volunteers preparing a planting area",
      category: "Volunteers",
    },
    {
      src: "/images/gallery-habitat.svg",
      alt: "Restored habitat with grasses and flowers",
      category: "Habitats",
    },
    {
      src: "/images/gallery-seed.svg",
      alt: "Native seed collection for future planting",
      category: "Projects",
    },
  ],
} as const;
