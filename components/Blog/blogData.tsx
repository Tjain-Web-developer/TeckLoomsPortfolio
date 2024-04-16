import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Efficient Event Management Mobile App",
    paragraph:
      "Discover streamlined UI components enhancing functionality in our event management app.",
    image: "/images/blog/blog01.jpg",
    author: {
      name: "Samuyl Joshi",
      image: "/images/blog/author-01.png",
      designation: "Graphic Designer",
    },
    tags: ["app"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Seamless Pastry Ordering Experience",
    paragraph:
      "Explore intuitive UI components tailored for our pastry order ecommerce mobile app.",
    image: "/images/blog/blog02.jpg",
    author: {
      name: "Musharof Chy",
      image: "/images/blog/author-02.png",
      designation: "Content Writer",
    },
    tags: ["app"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "Enhanced CRM Web Solutions",
    paragraph:
      "Explore advanced UI components for our customer relationship management web app.",
    image: "/images/blog/blog03.jpg",
    author: {
      name: "Lethium Deo",
      image: "/images/blog/author-03.png",
      designation: "Graphic Designer",
    },
    tags: ["web app"],
    publishDate: "2025",
  },
];
export default blogData;
