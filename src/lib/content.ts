import {
  Flower2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Leaf,
  MapPin,
  Sprout,
  Trees,
  Users,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/what-we-do" },
  { label: "Gallery", href: "/gallery" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
];

export const missionCards = [
  {
    title: "Conservation",
    text: "Protecting local habitats through careful planting, restoration and long-term stewardship.",
    icon: Leaf,
  },
  {
    title: "Biodiversity",
    text: "Creating richer corridors for pollinators, birds and native plants across Midlothian.",
    icon: Flower2,
  },
  {
    title: "Community",
    text: "Bringing neighbours together through practical volunteering and outdoor learning.",
    icon: Users,
  },
];

export const projectCards = [
  {
    title: "Wildflower Meadows",
    text: "Transforming suitable green spaces into resilient meadow habitats with native seed mixes.",
    icon: Sprout,
    image: {
      src: "/images/gallery/volunteer-meadow-raking.jpg",
      alt: "Volunteer caring for a meadow area with a rake",
    },
  },
  {
    title: "Pollinator Projects",
    text: "Supporting bees, butterflies and hoverflies with connected planting and seasonal care.",
    icon: Flower2,
    image: {
      src: "/images/wildlife/red-admiral-butterfly.jpg",
      alt: "Red admiral butterfly recorded in a local habitat",
    },
  },
  {
    title: "Community Planting",
    text: "Working with residents, schools and local groups to make nature recovery visible and welcoming.",
    icon: HandHeart,
    image: {
      src: "/images/events/community-volunteer-day.jpg",
      alt: "Community volunteers outdoors during a conservation activity",
    },
  },
  {
    title: "Habitat Restoration",
    text: "Improving neglected corners, woodland edges and grassland for wildlife and community wellbeing.",
    icon: Trees,
    image: {
      src: "/images/projects/bat-box-project.jpg",
      alt: "Habitat boxes made for a Midlothian Wildflowers project",
    },
  },
];

export const workAreas = [
  {
    title: "Conservation",
    text: "Practical habitat work rooted in local knowledge, seasonal timing and gentle land management.",
    icon: Leaf,
  },
  {
    title: "Education",
    text: "Friendly sessions that help people recognise native species and understand pollinator needs.",
    icon: GraduationCap,
  },
  {
    title: "Community",
    text: "Volunteer days shaped around shared ownership, confidence outdoors and neighbourly connection.",
    icon: HeartHandshake,
  },
  {
    title: "Wildlife",
    text: "Planting and habitat improvements that give insects, birds and small mammals more places to thrive.",
    icon: Flower2,
  },
  {
    title: "Volunteer Projects",
    text: "Clear, accessible tasks for different abilities, from seed sowing to meadow monitoring.",
    icon: Users,
  },
];

export const volunteerRoles = [
  "Wildflower planting and meadow care",
  "Seed collection and propagation",
  "Event support and community welcome",
  "Wildlife spotting and project monitoring",
  "Photography, storytelling and Facebook updates",
];

export const contactDetails = [
  { label: "Email", value: "hello@midlothianwildflowers.org", href: "mailto:hello@midlothianwildflowers.org" },
  { label: "Facebook", value: "Midlothian Wildflowers community", href: "https://www.facebook.com/" },
  { label: "Location", value: "Midlothian, Scotland", href: "https://www.google.com/maps/place/Midlothian,+Scotland", icon: MapPin },
];
