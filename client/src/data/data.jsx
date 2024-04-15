import {
  FaArrowsAltH,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import {
  FaCartShopping,
  FaCircleInfo,
  FaHouse,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { AiFillQuestionCircle } from "react-icons/ai";
import { MdHomeRepairService } from "react-icons/md";

// navigation Data
export const navItems = [
  {
    title: "Home",
    url: "/",
    icon: FaHouse,
  },
  {
    title: "About us",
    url: "/about",
    icon: FaCircleInfo,
  },
  {
    title: "Services",
    url: "/services",
    icon: MdHomeRepairService,
  },
  {
    title: "Packages",
    url: "/packages",
    icon: FaCartShopping,
  },
  {
    title: "FAQ",
    url: "/faq",
    icon: AiFillQuestionCircle,
  },
  {
    title: "Contact",
    url: "/contact",
    icon: FaPhone,
  },
];

// breadCramp data
export const breadCramp = [
  {
    item: "About Us",
    itemLink: "/about",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Services",
    itemLink: "/services",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Packages",
    itemLink: "/packages",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "FAQs",
    itemLink: "/faq",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
  {
    item: "Contact",
    itemLink: "/contact",
    home: "Home",
    homeLink: "/",
    icon: FaArrowsAltH,
    image: "",
  },
];

// FOOTER LINKS
// Footer contact info
export const footerContactInfo = [
  {
    item: "<span>+254 742 275513 </span>",
    icon: FaPhone,
  },
  {
    item: "<span>+254 742 275513 </span>",
    icon: FaPhone,
  },
  {
    item: "<span>support@iconnect.co.ke </span>",
    icon: FaEnvelope,
  },
  {
    item: "Al-Yusra Building, Gwakairo, Ruiru, Kenya",
    icon: FaMapMarkerAlt,
  },
];

//footer  My Account
export const footerAccount = [
  {
    item: "Manage My Account",
    link: "/dashboard",
  },
  {
    item: "Payment Info",
    link: "/payment",
  },
  {
    item: "Subscriptions",
    link: "/packages",
  },
  {
    item: "Login",
    link: "/login",
  },
];

// footer support links
export const footerSupport = [
  {
    item: "FAQs",
    link: "/faq",
  },
  {
    item: "Privacy & Policy",
    link: "/privacy",
  },
  {
    item: "Terms & Conditions",
    link: "/terms",
  },
  {
    item: "Payment Options",
    link: "/payment",
  },
];

// footer website Links
export const footerWebsiteLinks = [
  {
    item: "Iconnect",
    link: "/",
  },
  {
    item: "About Us",
    link: "/about",
  },
  {
    item: "Services",
    link: "/services",
  },
  {
    item: "Contact",
    link: "/contact",
  },
];

// footer Social Links
export const footerSocialLinks = [
  {
    icon: FaFacebook,
    link: "https://www.facebook.com/iconnect.ng",
  },
  {
    icon: FaWhatsapp,
    link: "https://twitter.com/iconnect_ng",
  },
  {
    icon: FaTwitter,
    link: "https://twitter.com/iconnect_ng",
  },
  {
    icon: FaInstagram,
    link: "https://www.instagram.com/iconnect.ng/",
  },
  {
    icon: FaLinkedin,
    link: "https://www.instagram.com/iconnect.ng/",
  },
];
