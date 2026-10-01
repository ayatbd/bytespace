import React, { useState } from "react";
import {
  CheckCircle2,
  Star,
  Users,
  BookOpen,
  Award,
  Share2,
  MessageSquare,
  UserPlus,
  UserCheck,
  Globe,
  Twitter,
  Dribbble,
  Github,
  Youtube,
  Calendar,
  Clock,
  Sparkles,
  Download,
  Filter,
  ArrowRight,
  ExternalLink,
  ChevronDown,
  Layers,
  Heart,
  Send,
  X,
  Check,
} from "lucide-react";
import { Navbar } from "@/src/components/layout/Navbar";
import { Footer } from "@/src/components/layout/Footer";
import { Course, COURSES } from "@/src/data/coursesData";
import {
  LimeTorus,
  LimeSpring,
  WhitePrism,
  WhiteSquiggle,
} from "@/src/components/shapes/FloatingShapes";
import confetti from "canvas-confetti";

export interface CreatorProfile {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  coverImage?: string;
  verified: boolean;
  location: string;
  joinedDate: string;
  responseTime: string;
  bio: string;
  aboutStory: string[];
  skills: string[];
  tools: { name: string; level: string; icon: string }[];
  milestones: { year: string; title: string; desc: string }[];
  stats: {
    students: string;
    studentCountNum: number;
    rating: number;
    reviewsCount: number;
    coursesCount: number;
    followersCount: number;
  };
  social: {
    website?: string;
    twitter?: string;
    dribbble?: string;
    github?: string;
    youtube?: string;
  };
  upcomingWorkshop?: {
    title: string;
    date: string;
    time: string;
    seatsLeft: number;
  };
}

export const CREATORS_LIST: CreatorProfile[] = [
  {
    id: "purepearl-studio",
    name: "PurePearl Studio",
    handle: "@purepearl",
    role: "Senior Digital Product Design & 3D Interactive Collective",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    verified: true,
    location: "San Francisco, CA & Remote",
    joinedDate: "October 2022",
    responseTime: "< 2 hours",
    bio: "We are an award-winning creative lab dedicated to crafting human-centered digital products, interactive 3D spaces, and robust design systems. Teaching the craft of modern digital creation on ByteSpace.",
    aboutStory: [
      "Founded by a team of ex-design leads from leading silicon valley labs, PurePearl Studio blends tactile aesthetic precision with high-performance digital engineering. Over the past 6 years, we have designed digital asset systems used by over 400,000 developers and creators worldwide.",
      "On ByteSpace, our curriculum cuts straight through theoretical fluff: every lesson is built around real, production-ready assets—from bespoke 3D meshes and responsive component tokens to data visualization engines and startup pitch designs.",
      "Our students learn how to turn their creative intuition into profitable, marketable digital products while mastering modern tools like Figma, Blender, Three.js, and generative asset pipelines.",
    ],
    skills: [
      "Design Systems",
      "Interactive 3D Art",
      "UI/UX Architecture",
      "Design Tokens",
      "Vector Asset Engineering",
      "Figma Advanced Prototyping",
      "Product Strategy",
      "Design for Developers",
    ],
    tools: [
      { name: "Figma", level: "Expert / Daily", icon: "📐" },
      { name: "Blender 3D", level: "Advanced", icon: "🧊" },
      { name: "Spline 3D", level: "Interactive", icon: "✨" },
      { name: "Three.js", level: "Intermediate", icon: "🌐" },
      { name: "Cinema 4D", level: "Advanced", icon: "🎞️" },
      { name: "Procreate", level: "Digital Paint", icon: "🎨" },
    ],
    milestones: [
      {
        year: "2025",
        title: "ByteSpace Creator of the Year",
        desc: "Awarded top creator excellence for highest student satisfaction and 98% course completion across 6 flagship series.",
      },
      {
        year: "2024",
        title: "Crossed 18,000 Active Students",
        desc: "Students from 86 countries completed our digital asset and design system masterclasses.",
      },
      {
        year: "2023",
        title: "Awwwards Site of the Day & FWA Honoree",
        desc: "Recognized for pioneering interactive WebGL design libraries and accessible design system components.",
      },
      {
        year: "2022",
        title: "Joined ByteSpace Creator Collective",
        desc: "Launched our first flagship course 'Learn Figma from Basic' reaching over 5,000 students in 90 days.",
      },
    ],
    stats: {
      students: "18,450",
      studentCountNum: 18450,
      rating: 4.9,
      reviewsCount: 1480,
      coursesCount: 6,
      followersCount: 12430,
    },
    social: {
      website: "https://purepearl.studio",
      twitter: "https://twitter.com/purepearlstudio",
      dribbble: "https://dribbble.com/purepearl",
      github: "https://github.com/purepearl",
      youtube: "https://youtube.com/@purepearlstudio",
    },
    upcomingWorkshop: {
      title: "Building Scalable 3D Design Systems with Spline & Figma",
      date: "Thursday, Oct 16, 2026",
      time: "10:00 AM PST (Live Zoom)",
      seatsLeft: 14,
    },
  },
  {
    id: "albert-flores",
    name: "Albert Flores",
    handle: "@albertflores",
    role: "Principal Product Designer & Design Technologist",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    verified: true,
    location: "Austin, TX",
    joinedDate: "January 2023",
    responseTime: "< 4 hours",
    bio: "Helping designers bridge the gap between design tokens and production code. Passionate about design system governance, accessibility, and high-impact UI workflows.",
    aboutStory: [
      "Albert has over 12 years of experience leading UI/UX organizations across enterprise SaaS and high-growth fintech startups. His design systems power digital experiences seen by millions every day.",
      "His courses emphasize systematic thinking, reusable component models, and seamless collaboration between designers and front-end engineers.",
    ],
    skills: ["Design Systems", "Figma Components", "Accessibility", "Design Tokens", "React for Designers"],
    tools: [
      { name: "Figma", level: "Master", icon: "📐" },
      { name: "Storybook", level: "Advanced", icon: "📚" },
      { name: "CSS/Tailwind", level: "Expert", icon: "🎨" },
    ],
    milestones: [
      {
        year: "2025",
        title: "Top Rated Systems Mentor",
        desc: "Recognized for mentoring over 2,000 aspiring design technologists.",
      },
      {
        year: "2023",
        title: "Published 'Design Systems in Practice'",
        desc: "Read by over 50,000 designers worldwide.",
      },
    ],
    stats: {
      students: "14,820",
      studentCountNum: 14820,
      rating: 4.9,
      reviewsCount: 1120,
      coursesCount: 4,
      followersCount: 9810,
    },
    social: {
      website: "https://albertflores.design",
      twitter: "https://twitter.com/albertflores",
      dribbble: "https://dribbble.com/albertflores",
    },
  },
  {
    id: "elena-vance",
    name: "Elena Vance",
    handle: "@elenavance",
    role: "Senior 3D Motion Artist & Creative Technologist",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80",
    verified: true,
    location: "Berlin, Germany",
    joinedDate: "March 2023",
    responseTime: "< 1 hour",
    bio: "Transforming 2D brands into kinetic, fluid 3D experiences. Specializing in Blender geometry nodes, kinetic typography, and immersive web spatial graphics.",
    aboutStory: [
      "Elena's work has been featured in international digital art exhibitions and global brand campaigns. She teaches artists and designers how to bring 3D motion to life without requiring high-end studio budgets.",
    ],
    skills: ["3D Motion", "Blender Nodes", "Kinetic Typography", "Visual Storytelling", "Spatial Web"],
    tools: [
      { name: "Blender", level: "Master", icon: "🧊" },
      { name: "After Effects", level: "Expert", icon: "🎬" },
      { name: "Cinema 4D", level: "Advanced", icon: "🎞️" },
    ],
    milestones: [
      {
        year: "2025",
        title: "Best Visual Art Masterclass",
        desc: "Voted #1 motion graphics tutorial series on ByteSpace.",
      },
    ],
    stats: {
      students: "11,340",
      studentCountNum: 11340,
      rating: 4.8,
      reviewsCount: 890,
      coursesCount: 3,
      followersCount: 8200,
    },
    social: {
      website: "https://elenavance.art",
      twitter: "https://twitter.com/elenavance",
      youtube: "https://youtube.com/@elenavance",
    },
  },
];

interface CreatorProfilePageProps {
  creatorId?: string;
  onNavigate: (view: "home" | "login" | "register" | "search" | "course-details" | "creator-profile" | "404") => void;
  onSelectCourse: (course: Course) => void;
  currentUser: { name: string; email: string } | null;
  onSignOut: () => void;
  cartCount?: number;
  onEnrollCourse?: (course: Course) => void;
  onNewsletterSubmit?: (email: string) => void;
}

export function CreatorProfilePage({
  creatorId = "purepearl-studio",
  onNavigate,
  onSelectCourse,
  currentUser,
  onSignOut,
  cartCount = 0,
  onEnrollCourse,
  onNewsletterSubmit,
}: CreatorProfilePageProps) {
  const [selectedCreatorId, setSelectedCreatorId] = useState(creatorId);
  const [activeTab, setActiveTab] = useState<"courses" | "about" | "reviews" | "resources">("courses");
  const [isFollowing, setIsFollowing] = useState(false);
  const [followersCount, setFollowersCount] = useState(12430);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);
  const [messageText, setMessageText] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [rsvpState, setRsvpState] = useState(false);

  // New review modal state
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewAuthor, setNewReviewAuthor] = useState("");

  const creator =
    CREATORS_LIST.find((c) => c.id === selectedCreatorId) || CREATORS_LIST[0];

  // Creator courses list
  const creatorCourses = COURSES.filter((c) =>
    selectedCreatorId === "purepearl-studio"
      ? true // PurePearl created the flagship courses
      : c.category.toLowerCase().includes("design") || c.category.toLowerCase().includes("data")
  );

  const categories = [
    "All",
    ...Array.from(new Set(creatorCourses.map((c) => c.category))),
  ];

  const filteredCourses =
    selectedCategoryFilter === "All"
      ? creatorCourses
      : creatorCourses.filter((c) => c.category === selectedCategoryFilter);

  // Sample student reviews for this creator
  const [creatorReviews, setCreatorReviews] = useState([
    {
      id: "cr-1",
      studentName: "Marcus Sterling",
      role: "Lead Product Designer at Stripe",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "3 weeks ago",
      courseTaken: "Build Digital Asset: A Comprehensive Guide",
      comment:
        "PurePearl Studio is simply on another level. The attention to practical detail, systematic token architecture, and production-ready exports completely transformed how our team builds digital assets.",
      upvotes: 42,
    },
    {
      id: "cr-2",
      studentName: "Chloe Davenport",
      role: "Freelance 3D Artist",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "1 month ago",
      courseTaken: "Learn Figma from Basic",
      comment:
        "I went from knowing zero Figma shortcuts to architecting multi-theme component sets for international clients. Clear, engaging, and genuinely inspiring instructor!",
      upvotes: 28,
    },
    {
      id: "cr-3",
      studentName: "Kenji Sato",
      role: "Full-Stack Engineer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      rating: 5,
      date: "2 months ago",
      courseTaken: "the Power of Big Data",
      comment:
        "As an engineer who struggled with design consistency, PurePearl's mental models made visual layout as systematic and predictable as writing clean code. Worth 10x the price.",
      upvotes: 19,
    },
  ]);

  const handleFollowToggle = () => {
    if (!isFollowing) {
      setIsFollowing(true);
      setFollowersCount((prev) => prev + 1);
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      setIsFollowing(false);
      setFollowersCount((prev) => Math.max(0, prev - 1));
    }
  };

  const handleShareProfile = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!messageText.trim()) return;
    setMessageSent(true);
    confetti({
      particleCount: 70,
      spread: 50,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setMessageSent(false);
      setMessageText("");
      setIsMessageModalOpen(false);
    }, 2000);
  };

  const handleAddCreatorReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewComment.trim()) return;

    const newRev = {
      id: `cr-${Date.now()}`,
      studentName: newReviewAuthor.trim() || currentUser?.name || "Anonymous Learner",
      role: "Student",
      avatar: currentUser
        ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
        : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      rating: newReviewRating,
      date: "Just now",
      courseTaken: "ByteSpace Masterclass",
      comment: newReviewComment,
      upvotes: 1,
    };

    setCreatorReviews([newRev, ...creatorReviews]);
    setIsReviewModalOpen(false);
    setNewReviewComment("");
    setNewReviewAuthor("");
    confetti({
      particleCount: 90,
      spread: 60,
      origin: { y: 0.6 },
    });
  };

  return (
    <div className="min-h-screen bg-[#f8faff] text-slate-900 selection:bg-lime-300 selection:text-slate-900">
      {/* Platform Header */}
      <Navbar
        currentView="creator-profile"
        onNavigate={(view) => {
          if (view === "creator-profile") {
            // Stay on creator profile
          } else {
            onNavigate(view as any);
          }
        }}
        currentUser={currentUser}
        onSignOut={onSignOut}
        cartCount={cartCount}
      />

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-[#0052FF] bg-grid-pattern pt-10 pb-28 text-white">
        {/* Floating 3D Geometric Accents */}
        <div className="pointer-events-none absolute -left-6 top-8 h-32 w-32 sm:left-4 sm:top-10 sm:h-44 sm:w-44 animate-float opacity-80">
          <LimeTorus className="h-full w-full rotate-45" />
        </div>
        <div className="pointer-events-none absolute right-4 top-6 h-28 w-28 sm:right-10 sm:top-10 sm:h-36 sm:w-36 animate-float-reverse opacity-80">
          <WhitePrism className="h-full w-full -rotate-12" />
        </div>
        <div className="pointer-events-none absolute right-24 bottom-4 h-24 w-24 sm:right-40 sm:bottom-6 sm:h-32 sm:w-32 animate-float opacity-75">
          <LimeSpring className="h-full w-full rotate-12" />
        </div>
        <div className="pointer-events-none absolute left-16 bottom-2 h-20 w-20 sm:left-28 sm:bottom-4 sm:h-28 sm:w-28 animate-float-reverse opacity-70">
          <WhiteSquiggle className="h-full w-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb + Creator Selector Dropdown */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-white/80">
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Home
              </button>
              <span>/</span>
              <button
                onClick={() => onNavigate("home")}
                className="hover:text-white hover:underline cursor-pointer"
              >
                Creators
              </button>
              <span>/</span>
              <span className="text-lime-300 font-bold">{creator.name}</span>
            </div>

            {/* Switch between featured creators */}
            <div className="flex items-center gap-2 rounded-full bg-white/10 p-1 backdrop-blur-md ring-1 ring-white/20">
              <span className="px-3 text-[11px] font-bold text-white/80">
                Browse Creator:
              </span>
              {CREATORS_LIST.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCreatorId(c.id)}
                  className={`rounded-full px-3 py-1 text-xs font-bold transition-all cursor-pointer ${
                    c.id === selectedCreatorId
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "text-white hover:bg-white/15"
                  }`}
                >
                  {c.name.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Creator Profile Intro Card */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
            {/* Left: Avatar + Identity */}
            <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Creator Big Avatar */}
              <div className="relative group shrink-0">
                <div className="relative h-28 w-28 sm:h-36 sm:w-36 overflow-hidden rounded-[32px] border-4 border-white/20 bg-blue-900 shadow-2xl ring-4 ring-lime-400/50">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                {creator.verified && (
                  <div
                    title="Verified ByteSpace Creator"
                    className="absolute -bottom-2 -right-2 flex h-9 w-9 items-center justify-center rounded-full bg-lime-400 text-slate-950 shadow-lg ring-4 ring-[#0052FF]"
                  >
                    <CheckCircle2 className="h-5 w-5 fill-slate-950 text-lime-400" />
                  </div>
                )}
              </div>

              {/* Identity Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white">
                    {creator.name}
                  </h1>
                  <span className="rounded-full bg-lime-400/20 border border-lime-400/40 px-3 py-0.5 text-xs font-bold text-lime-300">
                    {creator.handle}
                  </span>
                </div>

                <p className="text-sm sm:text-base font-semibold text-white/90 max-w-xl">
                  {creator.role}
                </p>

                {/* Location, Member since, Response time */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/75 pt-1">
                  <span>📍 {creator.location}</span>
                  <span>·</span>
                  <span>🗓️ Member since {creator.joinedDate}</span>
                  <span>·</span>
                  <span className="text-lime-300 font-semibold">
                    ⚡ Replies in {creator.responseTime}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Action Buttons (Follow, Message, Share) */}
            <div className="lg:col-span-4 flex flex-wrap lg:flex-col lg:items-end gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={handleFollowToggle}
                  className={`flex items-center gap-2 rounded-full px-6 py-2.5 text-xs font-black transition-all shadow-lg cursor-pointer ${
                    isFollowing
                      ? "bg-white text-slate-900 hover:bg-slate-100"
                      : "bg-lime-400 text-slate-950 hover:bg-lime-300 hover:scale-105"
                  }`}
                >
                  {isFollowing ? (
                    <>
                      <UserCheck className="h-4 w-4 text-emerald-600" />
                      <span>Following ({followersCount.toLocaleString()})</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="h-4 w-4 text-slate-950" />
                      <span>Follow Creator ({followersCount.toLocaleString()})</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setIsMessageModalOpen(true)}
                  className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95 cursor-pointer ring-1 ring-white/20"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Message</span>
                </button>

                <button
                  onClick={handleShareProfile}
                  title="Share profile link"
                  className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md transition-all hover:bg-white/25 active:scale-95 cursor-pointer ring-1 ring-white/20"
                >
                  <Share2 className="h-4 w-4" />
                  {copiedLink && (
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 rounded-md bg-slate-900 px-2 py-1 text-[10px] font-bold text-lime-400 whitespace-nowrap shadow-lg">
                      Copied!
                    </span>
                  )}
                </button>
              </div>

              {/* Social links */}
              <div className="flex items-center gap-3 pt-2 text-white/80">
                {creator.social.website && (
                  <a
                    href={creator.social.website}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 transition-colors"
                    title="Website"
                  >
                    <Globe className="h-4 w-4" />
                  </a>
                )}
                {creator.social.twitter && (
                  <a
                    href={creator.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 transition-colors"
                    title="Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                )}
                {creator.social.dribbble && (
                  <a
                    href={creator.social.dribbble}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 transition-colors"
                    title="Dribbble"
                  >
                    <Dribbble className="h-4 w-4" />
                  </a>
                )}
                {creator.social.github && (
                  <a
                    href={creator.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 transition-colors"
                    title="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                )}
                {creator.social.youtube && (
                  <a
                    href={creator.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-lime-300 transition-colors"
                    title="YouTube"
                  >
                    <Youtube className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 rounded-2xl bg-white/10 p-4 backdrop-blur-md ring-1 ring-white/15">
            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950 font-black">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-black text-white">
                  {creator.stats.students}
                </div>
                <div className="text-[11px] font-medium text-white/70">
                  Enrolled Students
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950 font-black">
                <Star className="h-5 w-5 fill-slate-950 text-slate-950" />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-xl font-black text-white">
                  <span>{creator.stats.rating}</span>
                  <span className="text-xs font-semibold text-white/70">
                    ({creator.stats.reviewsCount})
                  </span>
                </div>
                <div className="text-[11px] font-medium text-white/70">
                  Student Rating
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 border-r border-white/10 pr-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950 font-black">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-black text-white">
                  {creator.stats.coursesCount} Courses
                </div>
                <div className="text-[11px] font-medium text-white/70">
                  Published Modules
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 text-slate-950 font-black">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xl font-black text-white">98%</div>
                <div className="text-[11px] font-medium text-white/70">
                  Course Completion
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT + SIDEBAR ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-12 relative z-20 pb-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content Area (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Tabs Navigation Card */}
            <div className="flex items-center justify-between rounded-2xl bg-white p-2 shadow-sm border border-slate-200">
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setActiveTab("courses")}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "courses"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Courses ({creatorCourses.length})</span>
                </button>

                <button
                  onClick={() => setActiveTab("about")}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "about"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Sparkles className="h-4 w-4" />
                  <span>About & Story</span>
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "reviews"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Star className="h-4 w-4" />
                  <span>Reviews ({creator.stats.reviewsCount})</span>
                </button>

                <button
                  onClick={() => setActiveTab("resources")}
                  className={`hidden sm:flex items-center gap-2 rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    activeTab === "resources"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Download className="h-4 w-4" />
                  <span>Free Assets</span>
                </button>
              </div>

              {/* Quick action button inside tab header */}
              {activeTab === "reviews" && (
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="rounded-full bg-slate-900 text-white px-3.5 py-1.5 text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Write Review
                </button>
              )}
            </div>

            {/* TAB 1: COURSES */}
            {activeTab === "courses" && (
              <div className="space-y-6">
                {/* Category Filter Pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategoryFilter(cat)}
                      className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                        selectedCategoryFilter === cat
                          ? "bg-slate-900 text-white shadow-sm"
                          : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {filteredCourses.map((c) => (
                    <div
                      key={c.id}
                      className="group flex flex-col justify-between rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl"
                    >
                      {/* Top Preview Canvas */}
                      <div
                        onClick={() => {
                          onSelectCourse(c);
                          onNavigate("course-details");
                        }}
                        className="relative h-44 w-full overflow-hidden rounded-2xl cursor-pointer"
                        style={{
                          backgroundColor:
                            c.themeType === "assets"
                              ? "#1746e0"
                              : c.themeType === "figma"
                              ? "#0052FF"
                              : c.themeType === "bigdata"
                              ? "#0284c7"
                              : "#3b82f6",
                        }}
                      >
                        {/* Grid lines inside thumbnail */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-40" />

                        {/* Visual center badge */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-lime-300">
                            {c.category}
                          </span>
                          <h4 className="mt-1 text-base font-black text-white line-clamp-2 px-2">
                            {c.title}
                          </h4>
                        </div>

                        {/* Floating play button hover */}
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-lime-400 text-slate-950 shadow-xl transition-transform group-hover:scale-110">
                            <ArrowRight className="h-5 w-5" />
                          </div>
                        </div>

                        {/* Price Badge */}
                        <div className="absolute bottom-3 right-3 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-black text-lime-300 backdrop-blur-md">
                          ${c.price} {c.priceType}
                        </div>
                      </div>

                      {/* Info & Meta */}
                      <div className="mt-4 flex-1">
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
                          <span className="font-semibold text-blue-600">
                            {c.level}
                          </span>
                          <div className="flex items-center gap-1 font-bold text-slate-900">
                            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                            <span>{c.rating}</span>
                            <span className="text-slate-400 font-normal">
                              ({c.reviewsCount})
                            </span>
                          </div>
                        </div>

                        <h3
                          onClick={() => {
                            onSelectCourse(c);
                            onNavigate("course-details");
                          }}
                          className="text-base font-bold text-slate-900 line-clamp-1 hover:text-blue-600 cursor-pointer"
                        >
                          {c.title}
                        </h3>

                        <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {c.description}
                        </p>

                        <div className="mt-4 flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
                          <span className="flex items-center gap-1">
                            <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                            {c.lessonsCount} Lessons
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-slate-400" />
                            {c.duration}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-3.5 w-3.5 text-slate-400" />
                            {c.enrolledCount} Students
                          </span>
                        </div>
                      </div>

                      {/* Card Bottom CTA */}
                      <div className="mt-4 flex items-center gap-2">
                        <button
                          onClick={() => {
                            onSelectCourse(c);
                            onNavigate("course-details");
                          }}
                          className="flex-1 rounded-xl bg-slate-900 py-2.5 text-center text-xs font-bold text-white transition-all hover:bg-blue-600 active:scale-95 cursor-pointer"
                        >
                          View Details & Lessons
                        </button>
                        {onEnrollCourse && (
                          <button
                            onClick={() => {
                              onEnrollCourse(c);
                              confetti({ particleCount: 50, spread: 45 });
                            }}
                            title="Enroll Instantly"
                            className="rounded-xl bg-lime-400 px-3.5 py-2.5 text-xs font-black text-slate-950 hover:bg-lime-300 transition-colors cursor-pointer"
                          >
                            Enroll
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: ABOUT & STORY */}
            {activeTab === "about" && (
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-8">
                {/* Biography */}
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    About {creator.name}
                  </h3>
                  <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600">
                    {creator.aboutStory.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>

                {/* Skills & Focus Areas */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Core Specializations & Architecture
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {creator.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-[#f1f3f7] px-3.5 py-1.5 text-xs font-bold text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Creative Software & Tools Stack */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                    Daily Production Stack & Tools
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {creator.tools.map((tool) => (
                      <div
                        key={tool.name}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3.5 bg-slate-50/50"
                      >
                        <span className="text-2xl">{tool.icon}</span>
                        <div>
                          <div className="text-xs font-bold text-slate-900">
                            {tool.name}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {tool.level}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones & Recognitions */}
                <div className="pt-6 border-t border-slate-100">
                  <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-4">
                    Milestones & Industry Honors
                  </h4>
                  <div className="space-y-4">
                    {creator.milestones.map((m) => (
                      <div
                        key={m.year}
                        className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f8faff] p-4"
                      >
                        <span className="rounded-xl bg-blue-600 px-3 py-1 text-xs font-black text-white shrink-0">
                          {m.year}
                        </span>
                        <div>
                          <h5 className="text-sm font-bold text-slate-900">
                            {m.title}
                          </h5>
                          <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                            {m.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: REVIEWS */}
            {activeTab === "reviews" && (
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">
                      Student Reviews & Endorsements
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Based on {creator.stats.reviewsCount} verified student evaluations across all courses
                    </p>
                  </div>

                  {/* Rating summary pill */}
                  <div className="flex items-center gap-3 rounded-2xl bg-lime-400/20 border border-lime-400/40 px-4 py-2.5">
                    <span className="text-2xl font-black text-slate-950">
                      {creator.stats.rating}
                    </span>
                    <div>
                      <div className="flex items-center text-amber-500">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-slate-700">
                        Top 1% Creator Rating
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Cards List */}
                <div className="space-y-4">
                  {creatorReviews.map((rev) => (
                    <div
                      key={rev.id}
                      className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 transition-all hover:border-slate-300 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <img
                            src={rev.avatar}
                            alt={rev.studentName}
                            className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
                          />
                          <div>
                            <h5 className="text-sm font-bold text-slate-900">
                              {rev.studentName}
                            </h5>
                            <p className="text-xs text-slate-500">
                              {rev.role}
                            </p>
                          </div>
                        </div>

                        <span className="text-xs text-slate-400 font-medium">
                          {rev.date}
                        </span>
                      </div>

                      {/* Course badge & Stars */}
                      <div className="mt-3 flex flex-wrap items-center gap-3">
                        <div className="flex items-center text-slate-900">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`h-3.5 w-3.5 ${
                                s <= rev.rating
                                  ? "fill-slate-900 text-slate-900"
                                  : "text-slate-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                          {rev.courseTaken}
                        </span>
                      </div>

                      <p className="mt-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
                        "{rev.comment}"
                      </p>

                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <button
                          onClick={() => {
                            setCreatorReviews((prev) =>
                              prev.map((r) =>
                                r.id === rev.id
                                  ? { ...r, upvotes: r.upvotes + 1 }
                                  : r
                              )
                            );
                          }}
                          className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors cursor-pointer"
                        >
                          <Heart className="h-3.5 w-3.5" />
                          <span>Helpful ({rev.upvotes})</span>
                        </button>
                        <span>Verified Student</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: FREE RESOURCES */}
            {activeTab === "resources" && (
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div>
                  <h3 className="text-xl font-black text-slate-900">
                    Free Creator Assets & Starters
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Complimentary tools provided by {creator.name} to accelerate your design and development workflow.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: "PurePearl 3D Clay Icon Pack (24 Icons)",
                      type: "Figma & PNG",
                      size: "48 MB",
                      downloads: "4.2K",
                      color: "#1746e0",
                    },
                    {
                      title: "Design Tokens & Variable Typography Starter",
                      type: "Figma Community Kit",
                      size: "12 MB",
                      downloads: "8.1K",
                      color: "#8b5cf6",
                    },
                    {
                      title: "Three.js Canvas Shader Starter Boilerplate",
                      type: "GitHub Repository",
                      size: "4 MB",
                      downloads: "2.9K",
                      color: "#06b6d4",
                    },
                    {
                      title: "SaaS Pitch Deck & Metrics Figma Template",
                      type: "Figma Template",
                      size: "22 MB",
                      downloads: "6.5K",
                      color: "#10b981",
                    },
                  ].map((res, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between rounded-2xl border border-slate-200 p-5 hover:border-slate-300 transition-all bg-slate-50/50"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                          <span className="font-bold text-blue-600">
                            {res.type}
                          </span>
                          <span>{res.size}</span>
                        </div>
                        <h4 className="text-sm font-bold text-slate-900">
                          {res.title}
                        </h4>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                        <span className="text-[11px] text-slate-500">
                          {res.downloads} downloads
                        </span>
                        <button
                          onClick={() => {
                            confetti({ particleCount: 40, spread: 40 });
                          }}
                          className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-blue-600 transition-colors cursor-pointer"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span>Download Free</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* ================= RIGHT SIDEBAR (4 Cols) ================= */}
          <div className="lg:col-span-4 space-y-6">
            {/* Featured Course Spotlight */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-xl space-y-4">
              <span className="rounded-full bg-blue-100 text-blue-700 px-3 py-1 text-[11px] font-black uppercase tracking-wider">
                Featured Flagship Course
              </span>

              <h4 className="text-lg font-black text-slate-900 leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h4>

              <p className="text-xs text-slate-600 leading-relaxed">
                Unlock the power of modern digital creation with expert guidance. Master asset pipelines, 3D icon sets, and production workflows.
              </p>

              <div className="flex items-baseline gap-1 pt-1">
                <span className="text-2xl font-black text-blue-600">$25</span>
                <span className="text-xs text-slate-400 font-medium">
                  / lifetime access
                </span>
              </div>

              <button
                onClick={() => {
                  const targetCourse =
                    COURSES.find((c) => c.id === "build-digital-asset") || COURSES[0];
                  onSelectCourse(targetCourse);
                  onNavigate("course-details");
                }}
                className="w-full rounded-full bg-lime-400 py-3 text-xs font-black text-slate-950 shadow-md transition-all hover:bg-lime-300 hover:scale-[1.02] cursor-pointer"
              >
                Explore Course & Lessons →
              </button>
            </div>

            {/* Upcoming Live Workshop Card */}
            {creator.upcomingWorkshop && (
              <div className="rounded-[28px] border border-blue-100 bg-[#0052FF] p-6 text-white shadow-xl relative overflow-hidden">
                <div className="absolute -right-4 -bottom-4 h-24 w-24 opacity-20 pointer-events-none">
                  <LimeTorus className="h-full w-full" />
                </div>

                <div className="flex items-center gap-2 text-lime-300 text-xs font-bold uppercase tracking-wider">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Upcoming Live Studio</span>
                </div>

                <h4 className="mt-2 text-base font-black text-white leading-snug">
                  {creator.upcomingWorkshop.title}
                </h4>

                <div className="mt-3 space-y-1 text-xs text-white/80">
                  <div>🗓️ {creator.upcomingWorkshop.date}</div>
                  <div>⏰ {creator.upcomingWorkshop.time}</div>
                  <div className="text-lime-300 font-bold">
                    🔥 Only {creator.upcomingWorkshop.seatsLeft} student seats remaining
                  </div>
                </div>

                <button
                  onClick={() => {
                    setRsvpState(!rsvpState);
                    if (!rsvpState) {
                      confetti({ particleCount: 60, spread: 50 });
                    }
                  }}
                  className={`mt-4 w-full rounded-full py-2.5 text-xs font-black transition-all cursor-pointer ${
                    rsvpState
                      ? "bg-white text-emerald-700"
                      : "bg-lime-400 text-slate-950 hover:bg-lime-300"
                  }`}
                >
                  {rsvpState ? "✓ Seat Confirmed!" : "RSVP for Live Workshop"}
                </button>
              </div>
            )}

            {/* Creator Fast Facts Credibility Card */}
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm space-y-4">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                Instructor Credentials
              </h4>

              <div className="space-y-3 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Instructor Status</span>
                  <span className="font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Verified Master
                  </span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Teaching Experience</span>
                  <span className="font-bold text-slate-900">4+ Years</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Instruction Languages</span>
                  <span className="font-bold text-slate-900">English (Primary)</span>
                </div>

                <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                  <span className="text-slate-500">Community Role</span>
                  <span className="font-bold text-blue-600">Collective Mentor</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Office Hours</span>
                  <span className="font-bold text-slate-900">Mon & Thu 2-4 PM PST</span>
                </div>
              </div>

              {/* Direct Message Prompt */}
              <button
                onClick={() => setIsMessageModalOpen(true)}
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-pointer"
              >
                Send Direct Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================= MODAL: DIRECT MESSAGE ================= */}
      {isMessageModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <img
                  src={creator.avatar}
                  alt={creator.name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <h3 className="text-sm font-bold text-slate-900">
                  Message {creator.name}
                </h3>
              </div>
              <button
                onClick={() => setIsMessageModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {messageSent ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check className="h-6 w-6" />
                </div>
                <h4 className="mt-3 text-base font-bold text-slate-900">
                  Message Delivered!
                </h4>
                <p className="mt-1 text-xs text-slate-500">
                  {creator.name} typically responds within {creator.responseTime}. Check your ByteSpace inbox.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="mt-4 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Question about Digital Asset module or mentoring"
                    className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700">
                    Your Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    placeholder="Hi PurePearl Studio, I'm interested in..."
                    className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-xs focus:border-blue-600 focus:outline-none"
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsMessageModalOpen(false)}
                    className="rounded-full px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex items-center gap-2 rounded-full bg-lime-400 px-5 py-2 text-xs font-black text-slate-950 hover:bg-lime-300 transition-colors cursor-pointer"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* ================= MODAL: WRITE REVIEW ================= */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in">
          <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-sm font-bold text-slate-900">
                Write a Review for {creator.name}
              </h3>
              <button
                onClick={() => setIsReviewModalOpen(false)}
                className="text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <form onSubmit={handleAddCreatorReview} className="mt-4 space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-700">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={newReviewAuthor}
                  onChange={(e) => setNewReviewAuthor(e.target.value)}
                  placeholder={currentUser?.name || "e.g. Alex Morgan"}
                  className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">
                  Rating
                </label>
                <div className="flex items-center gap-2 mt-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setNewReviewRating(s)}
                      className="p-1 cursor-pointer"
                    >
                      <Star
                        className={`h-6 w-6 ${
                          s <= newReviewRating
                            ? "fill-amber-400 text-amber-400"
                            : "text-slate-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700">
                  Review & Feedback
                </label>
                <textarea
                  rows={4}
                  required
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="Share your experience learning with this creator..."
                  className="mt-1 w-full rounded-xl border border-slate-200 p-3 text-xs focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="rounded-full px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-full bg-lime-400 px-5 py-2 text-xs font-black text-slate-950 hover:bg-lime-300 transition-colors cursor-pointer"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Comprehensive Footer */}
      <Footer onNewsletterSubmit={(email) => onNewsletterSubmit?.(email)} />
    </div>
  );
}
