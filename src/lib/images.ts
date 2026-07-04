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
    src: "/images/projects/bat-box-project.jpg",
    alt: "A Midlothian Wildflowers volunteer holding handmade habitat boxes and a carved organisation sign",
  },
  volunteer: {
    src: "/images/volunteers/20250308_135051.jpg",
    alt: "Two Midlothian Wildflowers volunteers standing with tools during meadow restoration work",
  },
  projects: [
    {
      src: "/images/projects/bat-box-project.jpg",
      alt: "Volunteer with handmade bat boxes and Midlothian Wildflowers sign",
      category: "Projects",
    },
    {
      src: "/images/projects/seed-collection.jpg",
      alt: "Native seeds collected in volunteers' hands for future planting",
      category: "Projects",
    },
  ],
  events: [
    {
      src: "/images/events/community-volunteer-day.jpg",
      alt: "Community volunteers outdoors with tools during a habitat restoration day",
      category: "Events",
    },
  ],
  wildlife: [
    {
      src: "/images/wildlife/ladybird-native-plant.jpg",
      alt: "Ladybird on native vegetation in a Midlothian habitat",
      category: "Wildlife",
    },
    {
      src: "/images/wildlife/red-admiral-butterfly.jpg",
      alt: "Red admiral butterfly resting on stone",
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
      src: "/images/gallery/volunteer-meadow-raking.jpg",
      alt: "Volunteer celebrating meadow care work with a rake",
      category: "Volunteers",
    },
    {
      src: "/images/gallery/bat-box-project.jpg",
      alt: "Handmade bat boxes and Midlothian Wildflowers project sign",
      category: "Projects",
    },
    {
      src: "/images/gallery/ladybird-native-plant.jpg",
      alt: "Ladybird on native vegetation",
      category: "Wildlife",
    },
    {
      src: "/images/gallery/red-admiral-butterfly.jpg",
      alt: "Red admiral butterfly with open wings",
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
