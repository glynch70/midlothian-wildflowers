import {
  BadgeCheck,
  BookOpen,
  CalendarDays,
  Flower2,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Leaf,
  MapPin,
  Scissors,
  ShieldCheck,
  ShoppingBasket,
  Sprout,
  Trees,
  Users,
  Wheat,
} from "lucide-react";

import { EXTERNAL_LINKS } from "@/lib/links";

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
    title: "Care",
    text: "Caring for local greenspaces through practical stewardship, seasonal habitat work and gentle land management.",
    icon: Leaf,
  },
  {
    title: "Create",
    text: "Creating wildflower meadows, growing projects and learning opportunities that support biodiversity and people.",
    icon: Flower2,
  },
  {
    title: "Protect",
    text: "Protecting greenspaces by working with local partners, volunteers and communities across Midlothian.",
    icon: Users,
  },
];

export const projectCards = [
  {
    title: "Greenspace Stewardship",
    text: "Encouraging, adopting and improving greenspaces with support from local people.",
    icon: Sprout,
    image: {
      src: "/images/projects/community-project-work.jpg",
      alt: "Midlothian Wildflowers volunteers carrying out practical habitat work in a community greenspace",
    },
  },
  {
    title: "Wildflower Meadows",
    text: "Creating and caring for habitats that give native plants and pollinators room to thrive.",
    icon: Flower2,
    image: {
      src: "/images/wildlife/native-wildflower.jpg",
      alt: "Close-up of a native pink wildflower growing in grassland",
    },
  },
  {
    title: "Workshops and Events",
    text: "Running walks, talks, demos and practical workshops that help people learn outdoors.",
    icon: CalendarDays,
    image: {
      src: "/images/events/happy-child-workshop.jpg",
      alt: "Child smiling during a Midlothian Wildflowers outdoor learning activity",
    },
  },
  {
    title: "Organic Growing",
    text: "Developing organic growing skills, plant sales and permaculture work at Polton.",
    icon: Wheat,
    image: {
      src: "/images/projects/organic-vegetable-harvest.jpg",
      alt: "Volunteer holding a crate of organically grown vegetables and herbs",
    },
  },
  {
    title: "Conservation Volunteering",
    text: "Welcoming volunteers into practical habitat creation and woodland care sessions.",
    icon: Trees,
    image: {
      src: "/images/projects/pond-learning-session.jpg",
      alt: "Community learning session beside a pond and planted habitat",
    },
  },
  {
    title: "Community Scything",
    text: "Sharing Austrian scything skills for meadow management, bracken removal and orchard care.",
    icon: Scissors,
    image: {
      src: "/images/projects/community-scything.jpg",
      alt: "Volunteer demonstrating an Austrian scythe in a grassy community space",
    },
  },
];

export const workAreas = [
  {
    title: "Greenspace stewardship",
    text: "Encouraging, adopting and transforming greenspaces with support from the local community.",
    icon: Leaf,
  },
  {
    title: "Partnerships",
    text: "Working with local organisations, land partners and communities to support biodiversity.",
    icon: HeartHandshake,
  },
  {
    title: "Permaculture",
    text: "Putting earth care, people care and future care into practical local projects.",
    icon: Sprout,
  },
  {
    title: "Wildflower meadows",
    text: "Creating and managing meadow habitats for native plants, pollinators and wildlife.",
    icon: Flower2,
  },
  {
    title: "Workshops, walks, talks and events",
    text: "Offering accessible outdoor learning through seasonal sessions and community events.",
    icon: CalendarDays,
  },
  {
    title: "Education",
    text: "Helping people build confidence with native species, growing skills and habitat care.",
    icon: GraduationCap,
  },
  {
    title: "Conservation volunteering",
    text: "Creating regular opportunities for people to take practical climate and nature action.",
    icon: Users,
  },
  {
    title: "Community scything",
    text: "Sharing scything skills for meadow management, bracken removal, pathways and orchards.",
    icon: Scissors,
  },
  {
    title: "Organic growing and plant sales",
    text: "Growing plants, sharing horticultural skills and raising funds through seasonal plant sales.",
    icon: ShoppingBasket,
  },
];

export const volunteerRoles = [
  "Monthly conservation volunteering at Three Hares Community Woodland",
  "Organic growing, composting and no-dig gardening at the Polton permaculture project",
  "Wildflower meadow care, seed saving and introducing yellow rattle",
  "Community scything demos, workshops and meadow management",
  "Event support, plant sales, walks, talks and community welcome",
];

export const contactDetails = [
  {
    label: "Email",
    value: EXTERNAL_LINKS.email,
    href: `mailto:${EXTERNAL_LINKS.email}`,
  },
  { label: "Facebook", value: "Midlothian Wildflowers community", href: EXTERNAL_LINKS.facebook },
  { label: "Eventbrite", value: "Midlothian Wildflowers events", href: EXTERNAL_LINKS.eventbrite },
  { label: "Location", value: "Midlothian, Scotland", href: "https://www.google.com/maps/place/Midlothian,+Scotland", icon: MapPin },
];

export const currentActivities = [
  {
    title: "Monthly Conservation Volunteering at Three Hares Community Woodland",
    text: "Join practical conservation volunteering on the last Sunday of the month. Sessions support woodland care, habitat creation and community connection at Three Hares Community Woodland.",
    icon: Trees,
    href: EXTERNAL_LINKS.threeHaresWoodland,
    linkLabel: "Visit Three Hares Community Woodland",
    points: ["Last Sunday of the month", "Conservation and habitat creation", "Open volunteer sessions"],
  },
  {
    title: "MWF Grows",
    text: "Midlothian Wildflowers supports local food sovereignty, horticulture, organic vegetable growing and permaculture through its project in Polton, Midlothian.",
    icon: Sprout,
    points: [
      "Organic growing skills",
      "Hugelkultur and land management",
      "Composting and no-dig gardening",
      "Cover crops, cuttings and yearly plant sales",
    ],
  },
  {
    title: "Community Scything with MWF",
    text: "Trained in Austrian scything, the group offers small demos and beginner workshops for local organisations and community groups at suitable sites.",
    icon: Scissors,
    points: [
      "Demo scything sessions and beginner workshops",
      "Bracken removal and meadow management",
      "Introducing yellow rattle and seed saving",
      "Orchard care and low-impact site management",
    ],
  },
];

export const partners = [
  "Three Hares Community Woodland",
  "Midlothian Climate Action",
  "Midlothian Council",
  "Growing Families",
  "Pauline & Colin Macpherson",
  "Rosewell & District Community Council",
  "Rosewell Parish Church",
];

export const trustItems = [
  { title: "Fully insured", icon: ShieldCheck },
  { title: "First aid qualified", icon: BadgeCheck },
  { title: "PVG checked", icon: HandHeart },
  { title: "Data and privacy statement available", icon: BookOpen },
];
