export interface Course {
  id: string;
  title: string;
  shortTitle: string;
  instructor: string;
  instructorStudio: string;
  category: string;
  rating: number;
  reviewsCount: number;
  level: "Beginner" | "Intermediate" | "Advanced";
  lessonsCount: number;
  duration: string;
  commentsCount: number;
  enrolledCount: string;
  price: number;
  priceType: string;
  accentColor: string;
  themeType: "figma" | "assets" | "bigdata" | "productivity" | "finance" | "startup" | "code" | "music";
  description: string;
}

export const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export const COURSES: Course[] = [
  {
    id: "figma-basic",
    title: "Learn Figma from Basic",
    shortTitle: "Learn Figma from Basic",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "UI/UX Design",
    rating: 4.5,
    reviewsCount: 240,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#3b82f6",
    themeType: "figma",
    description: "Master modern user interface and interaction design in Figma from canvas setup to interactive design systems and micro-prototypes.",
  },
  {
    id: "build-digital-asset",
    title: "Build Digital Asset",
    shortTitle: "Build Digital Asset",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "Digital Illustration",
    rating: 4.5,
    reviewsCount: 188,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#8b5cf6",
    themeType: "assets",
    description: "Create scalable 3D icon sets, UI kits, design systems, and digital product assets ready for market distribution.",
  },
  {
    id: "power-big-data",
    title: "the Power of Big Data",
    shortTitle: "the Power of Big Data",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "Data Science",
    rating: 4.5,
    reviewsCount: 312,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#06b6d4",
    themeType: "bigdata",
    description: "Unlock actionable intelligence from massive datasets using modern data pipelines, SQL queries, and dynamic dashboards.",
  },
  {
    id: "balancing-productivity",
    title: "Balancing Productivity and Deep Focus",
    shortTitle: "Balancing Productivity an...",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "Productivity",
    rating: 4.5,
    reviewsCount: 175,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#10b981",
    themeType: "productivity",
    description: "Build repeatable workflows, eliminate cognitive fatigue, and establish sustainable high-output working systems.",
  },
  {
    id: "mastering-money-management",
    title: "Mastering Money Management & Growth",
    shortTitle: "Mastering Money Manage...",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "Business",
    rating: 4.5,
    reviewsCount: 220,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#22c55e",
    themeType: "finance",
    description: "Take control of capital allocation, personal budgeting, diversification, and long-term financial security.",
  },
  {
    id: "from-idea-to-startup",
    title: "From Idea to Startup Success",
    shortTitle: "From Idea to Startup Succ...",
    instructor: "Purepearl Studio",
    instructorStudio: "purepearl studio",
    category: "Freelance & Entrepreneurship",
    rating: 4.5,
    reviewsCount: 295,
    level: "Beginner",
    lessonsCount: 17,
    duration: "2 hours 16 mins",
    commentsCount: 59,
    enrolledCount: "26+",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#f59e0b",
    themeType: "startup",
    description: "Validate hypotheses rapidly, build minimum viable prototypes, pitch angel investors, and acquire initial paying customers.",
  },
];

export const LEARNING_PATHS = [
  {
    id: "design",
    title: "Design",
    icon: "palette",
    count: "140+ Courses",
  },
  {
    id: "development",
    title: "Development",
    icon: "code",
    count: "210+ Courses",
  },
  {
    id: "it-software",
    title: "IT & Software",
    icon: "laptop",
    count: "95+ Courses",
  },
  {
    id: "business",
    title: "Business",
    icon: "building",
    count: "120+ Courses",
  },
  {
    id: "marketing",
    title: "Marketing",
    icon: "megaphone",
    count: "85+ Courses",
  },
  {
    id: "photography",
    title: "Photography",
    icon: "camera",
    count: "60+ Courses",
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    initials: "SM",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    initials: "JL",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    initials: "AB",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];
