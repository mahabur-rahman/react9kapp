import {
  FaFacebookF,
  FaTwitter,
  FaDribbble,
  FaLinkedinIn,
} from "react-icons/fa";

export const navbarData = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "About",
    link: "/about",
  },
  {
    id: 3,
    title: "Services",
    link: "/services",
  },
  {
    id: 4,
    title: "Contact",
    link: "/contact",
  },
];

export const sidebarSocialIcons = [
  {
    id: 1,
    icon: <FaFacebookF />,
    url: "https://www.facebook.com/",
    target: "blank",
  },
  {
    id: 2,
    icon: <FaTwitter />,
    url: "https://www.twitter.com/",
    target: "blank",
  },
  {
    id: 3,
    icon: <FaDribbble />,
    url: "https://www.dribble.com/",
    target: "blank",
  },
  {
    id: 4,
    icon: <FaLinkedinIn />,
    url: "https://www.linkedin.com/",
    target: "blank",
  },
];
