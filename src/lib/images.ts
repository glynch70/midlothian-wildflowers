export type ManagedImage = {
  src: string;
  alt: string;
};

export const siteImages = {
  logo: {
    src: "/images/logo/midlothian-wildflowers-logo.jpg",
    alt: "Midlothian Wildflowers logo",
  },
  hero: {
    src: "/images/hero/hero.png",
    alt: "A white butterfly feeding on purple thistle flowers with a soft meadow background",
  },
  about: {
    src: "/images/projects/community-project-work.jpg",
    alt: "Midlothian Wildflowers volunteers working together on a community greenspace project",
  },
  volunteer: {
    src: "/images/volunteers/collecting-fungi.jpg",
    alt: "Midlothian Wildflowers volunteers exploring plants and fungi in a green community habitat",
  },
  projects: [
    {
      src: "/images/projects/community-project-work.jpg",
      alt: "Volunteers carrying out practical habitat work in a community greenspace",
      category: "Projects",
    },
    {
      src: "/images/projects/polytunnel-growing.jpg",
      alt: "Volunteer preparing growing trays in a polytunnel",
      category: "Projects",
    },
    {
      src: "/images/projects/organic-vegetable-harvest.jpg",
      alt: "Crate of organic vegetables and herbs grown through a community project",
      category: "Projects",
    },
    {
      src: "/images/projects/community-scything.jpg",
      alt: "Volunteer demonstrating community scything with an Austrian scythe",
      category: "Projects",
    },
  ],
  events: [
    {
      src: "/images/events/happy-child-workshop.jpg",
      alt: "Child smiling during an outdoor nature workshop",
      category: "Events",
    },
    {
      src: "/images/events/pond-learning-session.jpg",
      alt: "Community learning session beside a pond habitat",
      category: "Events",
    },
    {
      src: "/images/events/community-project-work.jpg",
      alt: "Volunteers taking part in a practical community conservation session",
      category: "Events",
    },
  ],
  wildlife: [
    {
      src: "/images/wildlife/native-wildflower.jpg",
      alt: "Native pink wildflower growing in grassland",
      category: "Wildlife",
    },
    {
      src: "/images/wildlife/fungi-closeup.jpg",
      alt: "Close-up of an orange fungus found in a local landscape",
      category: "Wildlife",
    },
    {
      src: "/images/wildlife/woodland-fungi.jpg",
      alt: "Close-up of woodland fungi found during a nature survey",
      category: "Wildlife",
    },
  ],
  gallery: [
    {
      src: "/images/gallery/community-project-work.jpg",
      alt: "Volunteers carrying out practical habitat work in a community greenspace",
      category: "Volunteers",
    },
    {
      src: "/images/gallery/collecting-fungi.jpg",
      alt: "Volunteers exploring plants and fungi in a green habitat",
      category: "Volunteers",
    },
    {
      src: "/images/gallery/happy-child-workshop.jpg",
      alt: "Child smiling during a nature craft workshop",
      category: "Events",
    },
    {
      src: "/images/gallery/polytunnel-growing.jpg",
      alt: "Volunteer preparing growing trays in a polytunnel",
      category: "Projects",
    },
    {
      src: "/images/gallery/organic-vegetable-harvest.jpg",
      alt: "Crate of fresh organic vegetables and herbs from a growing project",
      category: "Projects",
    },
    {
      src: "/images/gallery/community-scything.jpg",
      alt: "Volunteer demonstrating an Austrian scythe",
      category: "Projects",
    },
    {
      src: "/images/gallery/pond-learning-session.jpg",
      alt: "Community learning session beside a pond habitat",
      category: "Events",
    },
    {
      src: "/images/gallery/native-wildflower.jpg",
      alt: "Close-up of a native pink wildflower",
      category: "Wildlife",
    },
    {
      src: "/images/gallery/fungi-closeup.jpg",
      alt: "Close-up of an orange fungus found in the landscape",
      category: "Wildlife",
    },
    {
      src: "/images/gallery/seed-collection.jpg",
      alt: "Native seeds held by volunteers for planting",
      category: "Projects",
    },
    {
      src: "/images/gallery/volunteers-habitat-work.jpg",
      alt: "Volunteers taking part in outdoor habitat restoration",
      category: "Events",
    },
    {
      src: "/images/gallery/woodland-fungi.jpg",
      alt: "Woodland fungi observed during local nature recording",
      category: "Habitats",
    },
  ],
} as const;
