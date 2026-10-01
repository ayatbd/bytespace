"use client";
import { Course } from "@/components/data/coursesData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";
import {
  Award,
  BarChart2,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  HelpCircle,
  Maximize2,
  MessageCircle,
  Pause,
  Play,
  RotateCcw,
  Share2,
  Sparkles,
  Star,
  Users,
  Video,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";

interface SubLesson {
  id: string;
  title: string;
  duration: string;
  isCompleted: boolean;
}

interface CourseModule {
  id: string;
  moduleNumber: string;
  title: string;
  description: string;
  duration: string;
  lessons: SubLesson[];
}

interface StudentReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  timestamp: string;
  rating: number;
  comment: string;
}

interface CourseDetailsPageProps {
  course?: Course | null;
  onNavigateToHome: () => void;
  onNavigateToCourses: () => void;
  onNavigate: (
    view:
      | "home"
      | "login"
      | "register"
      | "search"
      | "course-details"
      | "creator-profile"
      | "404",
  ) => void;
  currentUser: { name: string; email: string } | null;
  onSignOut: () => void;
  cartCount: number;
  onEnroll: (course: Course) => void;
  isEnrolled: boolean;
  onNewsletterSubmit: (email: string) => void;
  initialTab?: "about" | "lesson" | "reviews";
}

export function CourseDetailsPage({
  course,
  onNavigate,
  currentUser,
  onEnroll,
  isEnrolled,
  initialTab = "reviews",
}: CourseDetailsPageProps) {
  // Sync tab with initialTab
  const [activeTab, setActiveTab] = useState<"about" | "lesson" | "reviews">(
    initialTab,
  );

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isWriteReviewOpen, setIsWriteReviewOpen] = useState(false);

  // New review form fields
  const [newReviewName, setNewReviewName] = useState("");
  const [newReviewRole, setNewReviewRole] = useState("UI/UX Designer");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [newReviewComment, setNewReviewComment] = useState("");

  const [quizScore, setQuizScore] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, number>
  >({});
  const [expandedModuleId, setExpandedModuleId] = useState<string | null>(
    "mod-1",
  );
  const [activePlayingTitle, setActivePlayingTitle] = useState(
    "Module 1: Introduction to Digital Assets",
  );
  const [playbackTime, setPlaybackTime] = useState(258); // in seconds
  const totalVideoDuration = 720; // 12 mins in seconds

  // Progress state - defaults to 55% as displayed in image.png
  const [progressPercentage, setProgressPercentage] = useState(55);

  // Reviews filter - "all" | 5 | 4 | 3 | 2 | 1
  const [reviewFilter, setReviewFilter] = useState<"all" | number>("all");

  // Reviews matching the exact cards in image.png
  const [reviewsList, setReviewsList] = useState<StudentReview[]>([
    {
      id: "rev-1",
      name: "PurePearl Studio",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      timestamp: "a year ago",
      rating: 5,
      comment:
        '"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!"',
    },
    {
      id: "rev-2",
      name: "Albert Flores",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      timestamp: "a year ago",
      rating: 5,
      comment:
        '"This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!"',
    },
    {
      id: "rev-3",
      name: "Cody Fisher",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      timestamp: "a year ago",
      rating: 5,
      comment:
        '"The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process."',
    },
    {
      id: "rev-4",
      name: "Brooklyn Simmons",
      role: "UI/UX Designer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
      timestamp: "a year ago",
      rating: 5,
      comment:
        '"The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout."',
    },
  ]);

  // Rating breakdown stats matching image.png exactly
  const ratingBreakdown = [
    { stars: 5, count: 720, percentage: 84 },
    { stars: 4, count: 120, percentage: 22 },
    { stars: 3, count: 21, percentage: 8 },
    { stars: 2, count: 12, percentage: 4 },
    { stars: 1, count: 16, percentage: 6 },
  ];

  // Filtered reviews based on selected rating pill
  const filteredReviews =
    reviewFilter === "all"
      ? reviewsList
      : reviewsList.filter((r) => r.rating === reviewFilter);

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewComment.trim()) return;

    const newRev: StudentReview = {
      id: `rev-${Date.now()}`,
      name: newReviewName,
      role: newReviewRole || "Student",
      avatar: currentUser
        ? "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80"
        : "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      timestamp: "just now",
      rating: newReviewRating,
      comment: `"${newReviewComment}"`,
    };

    setReviewsList([newRev, ...reviewsList]);
    setIsWriteReviewOpen(false);
    setNewReviewName("");
    setNewReviewComment("");
    confetti({ particleCount: 100, spread: 70 });
  };

  // Modules matching the exact list in image.png
  const [modules, setModules] = useState<CourseModule[]>([
    {
      id: "mod-1",
      moduleNumber: "Module 1",
      title: "Module 1: Introduction to Digital Assets",
      description:
        "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      duration: "2h 15m",
      lessons: [
        {
          id: "1.1",
          title: "Understanding Digital Elements",
          duration: "12 mins",
          isCompleted: true,
        },
        {
          id: "1.2",
          title: "Navigating Design Software Tools",
          duration: "18 mins",
          isCompleted: true,
        },
        {
          id: "1.3",
          title: "Workspace & Resolution Setup",
          duration: "15 mins",
          isCompleted: true,
        },
      ],
    },
    {
      id: "mod-2",
      moduleNumber: "Module 2",
      title: "Module 2: Design Principles for Impact",
      description:
        "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      duration: "3h 20m",
      lessons: [
        {
          id: "2.1",
          title: "Color Theory in Digital Design",
          duration: "21 mins",
          isCompleted: true,
        },
        {
          id: "2.2",
          title: "Typography Essentials",
          duration: "24 mins",
          isCompleted: true,
        },
        {
          id: "2.3",
          title: "Visual Hierarchy & Focal Points",
          duration: "19 mins",
          isCompleted: true,
        },
      ],
    },
    {
      id: "mod-4",
      moduleNumber: "Module 4",
      title: "Module 4: User-Centric Design Strategies",
      description:
        "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      duration: "2h 45m",
      lessons: [
        {
          id: "4.1",
          title: "Design Thinking in Digital Creation",
          duration: "18 mins",
          isCompleted: true,
        },
        {
          id: "4.2",
          title: "User Experience (UX) Essentials",
          duration: "26 mins",
          isCompleted: false,
        },
        {
          id: "4.3",
          title: "Creating User Persona Empathy Maps",
          duration: "22 mins",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-5",
      moduleNumber: "Module 5",
      title: "Module 5: Interactive Media and Engagement",
      description:
        "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      duration: "3h 10m",
      lessons: [
        {
          id: "5.1",
          title: "Creating Interactive Presentations",
          duration: "25 mins",
          isCompleted: false,
        },
        {
          id: "5.2",
          title: "Integrating Multimedia Elements",
          duration: "28 mins",
          isCompleted: false,
        },
        {
          id: "5.3",
          title: "Animation Curves & Micro-interactions",
          duration: "32 mins",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-6",
      moduleNumber: "Module 6",
      title: "Module 6: Project Showcase and Critique",
      description:
        "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      duration: "2h 30m",
      lessons: [
        {
          id: "6.1",
          title: "Effective Presentation Techniques",
          duration: "19 mins",
          isCompleted: false,
        },
        {
          id: "6.2",
          title: "Peer Critique and Collaboration",
          duration: "27 mins",
          isCompleted: false,
        },
      ],
    },
    {
      id: "mod-7",
      moduleNumber: "Module 7",
      title: "Module 7: Optimizing Digital Assets for Various Platforms",
      description:
        "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      duration: "3h 40m",
      lessons: [
        {
          id: "7.1",
          title: "Mobile Platforms & Retina Density",
          duration: "20 mins",
          isCompleted: false,
        },
        {
          id: "7.2",
          title: "Social Media Ratio Matrix",
          duration: "24 mins",
          isCompleted: false,
        },
        {
          id: "7.3",
          title: "Export Pipelines & Compression Formats",
          duration: "29 mins",
          isCompleted: false,
        },
      ],
    },
  ]);

  // Fallback course data if none passed
  const currentCourse: Course = course || {
    id: "build-digital-asset",
    title: "Build Digital Asset: A Comprehensive Guide",
    shortTitle: "Build Digital Asset",
    instructor: "PurePearl Studio",
    instructorStudio: "purepearl studio",
    category: "Digital Illustration",
    rating: 4.8,
    reviewsCount: 172,
    level: "Intermediate",
    lessonsCount: 112,
    duration: "24 hours",
    commentsCount: 59,
    enrolledCount: "199",
    price: 25,
    priceType: "/lifetime",
    accentColor: "#8b5cf6",
    themeType: "assets",
    description:
      "Unlock the Power of Digital Creation with Expert Guidance. Master digital assets, 3D icon design, and digital distribution systems.",
  };

  const handleShare = () => {
    navigator.clipboard?.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  const handleEnrollClick = () => {
    onEnroll(currentCourse);
    confetti({
      particleCount: 120,
      spread: 75,
      origin: { y: 0.6 },
    });
  };

  const toggleSubLesson = (moduleId: string, lessonId: string) => {
    setModules((prevModules) => {
      const updated = prevModules.map((mod) => {
        if (mod.id !== moduleId) return mod;
        return {
          ...mod,
          lessons: mod.lessons.map((les) =>
            les.id === lessonId
              ? { ...les, isCompleted: !les.isCompleted }
              : les,
          ),
        };
      });

      // Recalculate percentage
      let total = 0;
      let completed = 0;
      updated.forEach((m) => {
        m.lessons.forEach((l) => {
          total++;
          if (l.isCompleted) completed++;
        });
      });
      const newPct = total > 0 ? Math.round((completed / total) * 100) : 55;
      setProgressPercentage(newPct);

      if (newPct === 100) {
        confetti({
          particleCount: 150,
          spread: 80,
          origin: { y: 0.5 },
        });
      }

      return updated;
    });
  };

  const handlePlayModule = (modTitle: string) => {
    setActivePlayingTitle(modTitle);
    setIsPlayingVideo(true);
    setIsVideoPaused(false);
    window.scrollTo({ top: 180, behavior: "smooth" });
  };

  const formatSeconds = (sec: number) => {
    const mins = Math.floor(sec / 60);
    const secs = sec % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const curriculumLessons = [
    { id: "01", title: "Introduction to Digital Assets", duration: "12 mins" },
    { id: "02", title: "Design Principles for Impacts", duration: "21 mins" },
    {
      id: "03",
      title: "Advanced Techniques in Digital Creation",
      duration: "16 mins",
    },
    { id: "04", title: "Color Theory & Contrast Systems", duration: "18 mins" },
    {
      id: "05",
      title: "Vector Systems & Scalable Geometry",
      duration: "25 mins",
    },
    { id: "06", title: "Packaging & Market Distribution", duration: "14 mins" },
  ];

  const keyPoints = [
    "Foundational Concepts",
    "Design Principles Mastery",
    "Advanced Techniques in Digital Creation",
    "Project Showcase and Critique",
    "Optimizing for Various Platforms",
    "Digital Asset Management Best Practices",
    "Monetization Strategies",
    "Capstone Project: Building Your Portfolio",
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfd] text-slate-900">
      {/* ================= HERO BANNER SECTION (Matches image.png) ================= */}
      <section
        className="relative overflow-hidden bg-[#0052FF] pt-10 pb-20 sm:pt-14 sm:pb-28 text-white"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.09) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            {/* Title and Meta Information */}
            <div className="max-w-3xl">
              <h1 className="text-balance text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl leading-[1.15]">
                Build Digital Asset: A Comprehensive Guide
              </h1>

              <p className="mt-3.5 text-balance text-sm font-medium text-white/95 sm:text-base md:text-lg">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="mt-3 text-xs sm:text-sm font-semibold text-white/90">
                by{" "}
                <button
                  onClick={() => onNavigate("creator-profile")}
                  className="text-lime-300 underline underline-offset-2 hover:text-white transition-colors cursor-pointer"
                >
                  purepearl studio
                </button>
              </p>

              {/* 3 Pill Badges Row matching image.png */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {/* Badge 1: Level */}
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                  <BarChart2 className="h-4 w-4 text-blue-600" />
                  <span>Intermediate</span>
                </div>

                {/* Badge 2: Rating & Reviews */}
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                  <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                  <span>4.8 (172 reviews)</span>
                </div>

                {/* Badge 3: Students count */}
                <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-md">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>199 Students</span>
                </div>
              </div>
            </div>

            {/* Share Button matching image.png top-right lime button */}
            <div className="self-start">
              <button
                onClick={handleShare}
                className="flex items-center gap-1.5 rounded-full bg-lime-400 px-5 py-2 text-xs font-black text-slate-950 transition-all hover:bg-lime-300 active:scale-95 shadow-md cursor-pointer"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>{copiedLink ? "Copied!" : "Share"}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT + STICKY SIDEBAR ================= */}
      <section className="relative z-10 -mt-10 sm:-mt-14 pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            {/* ================= LEFT MAIN CONTENT (Span 8) ================= */}
            <div className="lg:col-span-8 space-y-8">
              {/* Main Course Video Player Card matching image.png */}
              <div className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl">
                {/* Video Image / Thumbnail / Active Stream Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  {isPlayingVideo ? (
                    <div className="relative flex h-full w-full flex-col justify-between bg-slate-950 p-5 text-white">
                      {/* Top Header of Video Stream */}
                      <div className="flex items-center justify-between text-xs z-10">
                        <div className="flex items-center gap-2">
                          <span className="flex h-2.5 w-2.5 rounded-full bg-lime-400 animate-pulse" />
                          <span className="font-bold text-lime-400 tracking-wide">
                            STREAMING PREVIEW
                          </span>
                          <span className="text-slate-400">
                            • {activePlayingTitle}
                          </span>
                        </div>
                        <button
                          onClick={() => setIsPlayingVideo(false)}
                          className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-xs text-white hover:bg-white/20 transition-colors cursor-pointer"
                        >
                          <X className="h-3.5 w-3.5" /> Exit
                        </button>
                      </div>

                      {/* Video Simulated Artwork & Canvas Stream */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none opacity-90">
                        <div className="relative h-44 w-72 rounded-2xl bg-gradient-to-tr from-blue-900/60 to-purple-900/40 border border-white/10 p-4 shadow-2xl flex flex-col justify-between">
                          <div className="flex items-center justify-between text-[11px] text-lime-300 font-mono">
                            <span>ASSET_CANVAS_v2.fig</span>
                            <span>60 FPS</span>
                          </div>
                          {/* Animated vector paths simulation */}
                          <div className="flex items-center justify-center gap-3">
                            <div className="h-16 w-16 rounded-2xl bg-lime-400/20 border-2 border-lime-400 flex items-center justify-center animate-bounce">
                              <Sparkles className="h-8 w-8 text-lime-400" />
                            </div>
                            <div className="space-y-1.5">
                              <div className="h-2 w-24 bg-white/40 rounded-full" />
                              <div className="h-2 w-16 bg-white/20 rounded-full" />
                              <div className="h-2 w-20 bg-lime-400/50 rounded-full" />
                            </div>
                          </div>
                          <div className="text-[10px] text-slate-400 text-center font-sans">
                            Interactive Studio Rendering • Instructor Audio Live
                          </div>
                        </div>
                      </div>

                      {/* Video Player Controls Bar */}
                      <div className="relative z-10 space-y-2 rounded-2xl bg-slate-900/90 p-3 backdrop-blur-md border border-white/10">
                        {/* Timeline Scrubber */}
                        <div
                          className="group/track relative h-2 w-full cursor-pointer rounded-full bg-slate-700 overflow-hidden"
                          onClick={(e) => {
                            const rect =
                              e.currentTarget.getBoundingClientRect();
                            const clickPos =
                              (e.clientX - rect.left) / rect.width;
                            setPlaybackTime(
                              Math.round(clickPos * totalVideoDuration),
                            );
                          }}
                        >
                          <div
                            className="h-full bg-lime-400 transition-all"
                            style={{
                              width: `${(playbackTime / totalVideoDuration) * 100}%`,
                            }}
                          />
                        </div>

                        {/* Controls Bottom Row */}
                        <div className="flex items-center justify-between text-xs text-white">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => setIsVideoPaused(!isVideoPaused)}
                              className="flex h-7 w-7 items-center justify-center rounded-full bg-lime-400 text-slate-950 font-bold hover:bg-lime-300 transition-colors"
                            >
                              {isVideoPaused ? (
                                <Play className="h-3.5 w-3.5 fill-current ml-0.5" />
                              ) : (
                                <Pause className="h-3.5 w-3.5 fill-current" />
                              )}
                            </button>
                            <span className="font-mono text-xs text-slate-300">
                              {formatSeconds(playbackTime)} /{" "}
                              {formatSeconds(totalVideoDuration)}
                            </span>
                            <button
                              onClick={() => setIsMuted(!isMuted)}
                              className="text-slate-400 hover:text-white transition-colors"
                            >
                              {isMuted ? (
                                <VolumeX className="h-4 w-4" />
                              ) : (
                                <Volume2 className="h-4 w-4" />
                              )}
                            </button>
                          </div>

                          <div className="flex items-center gap-3">
                            <span className="rounded bg-white/10 px-2 py-0.5 text-[10px] font-bold text-slate-300">
                              1080p HD
                            </span>
                            <button
                              onClick={() => setPlaybackTime(0)}
                              title="Replay from start"
                              className="text-slate-400 hover:text-white"
                            >
                              <RotateCcw className="h-3.5 w-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                const elem = document.querySelector(".group");
                                if (elem?.requestFullscreen)
                                  elem.requestFullscreen();
                              }}
                              className="text-slate-400 hover:text-white"
                            >
                              <Maximize2 className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      {/* Stylized vector representation of the female course instructor with purple sweater & glasses matching image.png */}
                      <svg
                        viewBox="0 0 800 500"
                        className="h-full w-full object-cover"
                      >
                        <defs>
                          <radialGradient id="bgGrad" cx="50%" cy="40%" r="60%">
                            <stop offset="0%" stopColor="#ebeff5" />
                            <stop offset="60%" stopColor="#d5dbe5" />
                            <stop offset="100%" stopColor="#bdc7d5" />
                          </radialGradient>
                          <linearGradient
                            id="sweaterGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#6b21a8" />
                            <stop offset="100%" stopColor="#4c1d95" />
                          </linearGradient>
                          <linearGradient
                            id="hairGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#2e150d" />
                            <stop offset="100%" stopColor="#140703" />
                          </linearGradient>
                          <linearGradient
                            id="skinGrad"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                          >
                            <stop offset="0%" stopColor="#ffd8b8" />
                            <stop offset="100%" stopColor="#f5be98" />
                          </linearGradient>
                        </defs>
                        {/* Clean neutral studio backdrop */}
                        <rect width="800" height="500" fill="url(#bgGrad)" />

                        {/* Shoulders & Purple V-neck Cardigan / Knit Sweater */}
                        <path
                          d="M190 500 C 220 370, 310 325, 400 325 C 490 325, 580 370, 610 500 Z"
                          fill="url(#sweaterGrad)"
                        />

                        {/* Collared shirt under sweater */}
                        <polygon
                          points="360,325 440,325 400,385"
                          fill="#f8fafc"
                        />
                        <polygon
                          points="380,325 400,365 365,325"
                          fill="#e2e8f0"
                        />
                        <polygon
                          points="420,325 400,365 435,325"
                          fill="#e2e8f0"
                        />

                        {/* Long Dark Brunette Hair framing shoulders */}
                        <path
                          d="M315 220 C 305 130, 360 85, 400 85 C 440 85, 495 130, 485 220 C 480 300, 495 390, 490 460 C 470 430, 475 340, 465 270 C 455 180, 345 180, 335 270 C 325 340, 330 430, 310 460 C 305 390, 320 300, 315 220 Z"
                          fill="url(#hairGrad)"
                        />

                        {/* Neck */}
                        <path
                          d="M375 260 L 425 260 L 422 335 L 378 335 Z"
                          fill="url(#skinGrad)"
                        />

                        {/* Head */}
                        <ellipse
                          cx="400"
                          cy="220"
                          rx="60"
                          ry="76"
                          fill="url(#skinGrad)"
                        />

                        {/* Hair bangs / center part */}
                        <path
                          d="M340 180 C 370 145, 395 145, 400 170 C 405 145, 430 145, 460 180 C 465 140, 440 100, 400 100 C 360 100, 335 140, 340 180 Z"
                          fill="url(#hairGrad)"
                        />

                        {/* Eyebrows */}
                        <path
                          d="M352 192 Q 372 186 388 193"
                          stroke="#2e150d"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />
                        <path
                          d="M412 193 Q 428 186 448 192"
                          stroke="#2e150d"
                          strokeWidth="3"
                          strokeLinecap="round"
                          fill="none"
                        />

                        {/* Eyeglasses Frame */}
                        <rect
                          x="345"
                          y="196"
                          width="46"
                          height="32"
                          rx="9"
                          fill="rgba(255,255,255,0.2)"
                          stroke="#1e293b"
                          strokeWidth="4"
                        />
                        <rect
                          x="409"
                          y="196"
                          width="46"
                          height="32"
                          rx="9"
                          fill="rgba(255,255,255,0.2)"
                          stroke="#1e293b"
                          strokeWidth="4"
                        />
                        <line
                          x1="391"
                          y1="208"
                          x2="409"
                          y2="208"
                          stroke="#1e293b"
                          strokeWidth="4"
                        />

                        {/* Eyes */}
                        <ellipse
                          cx="368"
                          cy="212"
                          rx="5"
                          ry="5.5"
                          fill="#1e293b"
                        />
                        <circle cx="370" cy="210" r="1.5" fill="#ffffff" />
                        <ellipse
                          cx="432"
                          cy="212"
                          rx="5"
                          ry="5.5"
                          fill="#1e293b"
                        />
                        <circle cx="434" cy="210" r="1.5" fill="#ffffff" />

                        {/* Nose */}
                        <path
                          d="M398 218 L 396 238 L 404 238"
                          stroke="#d97706"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          fill="none"
                        />

                        {/* Smile */}
                        <path
                          d="M378 254 Q 400 274 422 254"
                          stroke="#be123c"
                          strokeWidth="3.5"
                          strokeLinecap="round"
                          fill="none"
                        />
                      </svg>

                      {/* Dark overlay on hover */}
                      <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />

                      {/* Centered Large Translucent Play Button matching image.png */}
                      <button
                        onClick={() =>
                          handlePlayModule(
                            "Module 1: Introduction to Digital Assets",
                          )
                        }
                        className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-slate-900 shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white active:scale-95 cursor-pointer"
                        aria-label="Play course preview"
                      >
                        <Play className="h-6 w-6 fill-slate-950 ml-1" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Tab Switcher Pills: About, Lesson, Reviews (Matches image.png with "Reviews" active) */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveTab("about")}
                  className={`rounded-full px-6 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "about"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "bg-[#f1f3f7] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  About
                </button>
                <button
                  onClick={() => setActiveTab("lesson")}
                  className={`rounded-full px-6 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "lesson"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "bg-[#f1f3f7] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Lesson
                </button>
                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`rounded-full px-6 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeTab === "reviews"
                      ? "bg-lime-400 text-slate-950 shadow-sm"
                      : "bg-[#f1f3f7] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  Reviews
                </button>
              </div>

              {/* ================= TAB 1: LESSON TAB ================= */}
              {activeTab === "lesson" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {/* Explore the Modules Header */}
                  <div>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                      Explore the Modules
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                      Immerse yourself in the course content as we break down
                      each module into comprehensive lessons, providing
                      practical insights and hands-on experiences.
                    </p>
                  </div>

                  {/* Lesson List Heading */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      Lesson List
                    </h3>

                    {/* Module Cards matching image.png */}
                    <div className="mt-4 space-y-4">
                      {modules.map((mod) => {
                        const isExpanded = expandedModuleId === mod.id;
                        const completedCount = mod.lessons.filter(
                          (l) => l.isCompleted,
                        ).length;
                        const isAllDone =
                          completedCount === mod.lessons.length &&
                          mod.lessons.length > 0;

                        return (
                          <div
                            key={mod.id}
                            className="group rounded-2xl border border-slate-100 bg-white p-3.5 sm:p-4 shadow-sm transition-all hover:border-slate-200 hover:shadow-md"
                          >
                            <div className="flex items-start gap-4">
                              {/* Lime Green Squircle with Video Camera Icon */}
                              <button
                                onClick={() => handlePlayModule(mod.title)}
                                title="Click to play this module preview"
                                className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-lime-400 text-slate-950 shrink-0 shadow-sm transition-transform group-hover:scale-105 active:scale-95 cursor-pointer"
                              >
                                <Video className="h-6 w-6 stroke-[2.2] fill-slate-950/20" />
                              </button>

                              {/* Title and Description */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-start justify-between gap-2">
                                  <h4
                                    onClick={() => handlePlayModule(mod.title)}
                                    className="text-xs sm:text-sm font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                                  >
                                    {mod.title}
                                  </h4>

                                  <button
                                    onClick={() =>
                                      setExpandedModuleId(
                                        isExpanded ? null : mod.id,
                                      )
                                    }
                                    className="flex items-center gap-1 text-[11px] font-semibold text-slate-400 hover:text-slate-700 cursor-pointer shrink-0"
                                  >
                                    <span>{mod.lessons.length} lessons</span>
                                    {isExpanded ? (
                                      <ChevronUp className="h-3.5 w-3.5" />
                                    ) : (
                                      <ChevronDown className="h-3.5 w-3.5" />
                                    )}
                                  </button>
                                </div>

                                <p className="mt-1 text-xs text-slate-500 font-normal leading-relaxed">
                                  {mod.description}
                                </p>

                                <div className="mt-2.5 flex items-center gap-4 text-[11px]">
                                  <button
                                    onClick={() => handlePlayModule(mod.title)}
                                    className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
                                  >
                                    <Play className="h-3 w-3 fill-current" />{" "}
                                    Play Preview
                                  </button>

                                  <button
                                    onClick={() =>
                                      setExpandedModuleId(
                                        isExpanded ? null : mod.id,
                                      )
                                    }
                                    className="font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
                                  >
                                    {isExpanded
                                      ? "Hide Curriculum"
                                      : "View Curriculum"}
                                  </button>

                                  {isAllDone && (
                                    <span className="flex items-center gap-1 font-bold text-emerald-600">
                                      <Check className="h-3 w-3" /> Completed
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            {isExpanded && (
                              <div className="mt-4 pt-3.5 border-t border-slate-100 pl-16 space-y-2.5 animate-in fade-in slide-in-from-top-2">
                                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                                  Lessons in this module:
                                </div>
                                {mod.lessons.map((les) => (
                                  <div
                                    key={les.id}
                                    className="flex items-center justify-between rounded-xl bg-slate-50/80 px-3 py-2 text-xs hover:bg-slate-100 transition-colors"
                                  >
                                    <div className="flex items-center gap-2.5">
                                      <button
                                        onClick={() =>
                                          toggleSubLesson(mod.id, les.id)
                                        }
                                        className={`flex h-4.5 w-4.5 items-center justify-center rounded-md border transition-colors cursor-pointer ${
                                          les.isCompleted
                                            ? "border-emerald-500 bg-emerald-500 text-white"
                                            : "border-slate-300 bg-white hover:border-slate-400"
                                        }`}
                                        title={
                                          les.isCompleted
                                            ? "Mark incomplete"
                                            : "Mark completed"
                                        }
                                      >
                                        {les.isCompleted && (
                                          <Check className="h-3 w-3 stroke-[3]" />
                                        )}
                                      </button>
                                      <span
                                        className={`font-medium ${
                                          les.isCompleted
                                            ? "text-slate-500 line-through"
                                            : "text-slate-800"
                                        }`}
                                      >
                                        {les.id} {les.title}
                                      </span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[11px] text-slate-400">
                                      <span>{les.duration}</span>
                                      <button
                                        onClick={() =>
                                          handlePlayModule(
                                            `${mod.title} - ${les.title}`,
                                          )
                                        }
                                        className="text-blue-600 hover:text-blue-800 font-semibold"
                                      >
                                        Play
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Lesson Content Section */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      Lesson Content
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                      Engage with each lesson through captivating video content,
                      detailed textual explanations, and interactive elements.
                      Download resources, complete assignments, and test your
                      understanding with quizzes.
                    </p>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => {
                          alert(
                            "ByteSpace Starter Asset Pack (.zip) download initiated!",
                          );
                        }}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        <Download className="h-3.5 w-3.5 text-blue-600" />
                        <span>Download Resources (.zip)</span>
                      </button>

                      <button
                        onClick={() => setIsQuizModalOpen(true)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-colors cursor-pointer"
                      >
                        <HelpCircle className="h-3.5 w-3.5 text-blue-600" />
                        <span>Test Module Knowledge (Quiz)</span>
                      </button>
                    </div>
                  </div>

                  {/* Lesson Progress Tracking */}
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                      Lesson Progress Tracking
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                      Witness your growth as you complete lessons, with an
                      intuitive progress tracking feature guiding you through
                      your learning journey.
                    </p>

                    <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-700">
                          Learning Progress
                        </span>
                        <span className="text-xs font-semibold text-slate-400">
                          {progressPercentage}% Completed
                        </span>
                      </div>

                      <div className="mt-1 text-3xl sm:text-4xl font-black text-slate-900">
                        {progressPercentage}%
                      </div>

                      <div className="mt-3 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-lime-400 transition-all duration-700 ease-out"
                          style={{ width: `${progressPercentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 2: ABOUT TAB ================= */}
              {activeTab === "about" && (
                <div className="space-y-10 animate-in fade-in duration-300">
                  <div>
                    <h2 className="text-xl font-black text-slate-900">
                      Description
                    </h2>
                    <div className="mt-4 space-y-4 text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                      <p>
                        Embark on an enlightening exploration into the world of
                        digital creation with our comprehensive course, "Build
                        Digital Assets: A Comprehensive Guide." This
                        transformative learning experience invites you to delve
                        deep into the intricacies of crafting impactful digital
                        content. From laying the groundwork with foundational
                        concepts to mastering advanced techniques, this guide is
                        meticulously curated to empower you with the skills
                        essential for navigating the dynamic landscape of
                        digital asset creation.
                      </p>
                      <p>
                        In the initial modules, you'll establish a solid
                        foundation by immersing yourself in the foundational
                        concepts that form the backbone of digital asset
                        creation. Understand the fundamental elements that
                        constitute compelling digital content and gain
                        proficiency in leveraging these elements to communicate
                        effectively in the digital realm.
                      </p>
                      <p>
                        As you progress through the course, you'll ascend to
                        higher levels of expertise, delving into the nuances of
                        design principles that drive impactful creations.
                        Uncover the secrets behind effective visual
                        communication, exploring color theory, typography, and
                        layout strategies that elevate your digital assets to
                        new heights.
                      </p>
                    </div>
                  </div>

                  {/* Sneak Peak Section */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Sneak Peak
                    </h3>
                    <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-sm">
                        <svg
                          viewBox="0 0 200 200"
                          className="h-full w-full object-cover"
                        >
                          <rect width="200" height="200" fill="#f8fafc" />
                          <rect
                            x="25"
                            y="25"
                            width="150"
                            height="150"
                            rx="4"
                            fill="#ffffff"
                            stroke="#cbd5e1"
                          />
                          <line
                            x1="40"
                            y1="45"
                            x2="90"
                            y2="45"
                            stroke="#3b82f6"
                            strokeWidth="4"
                          />
                          <rect
                            x="40"
                            y="60"
                            width="50"
                            height="35"
                            rx="3"
                            fill="#e2e8f0"
                            stroke="#94a3b8"
                          />
                          <rect
                            x="105"
                            y="60"
                            width="55"
                            height="35"
                            rx="3"
                            fill="#e2e8f0"
                            stroke="#94a3b8"
                          />
                          <rect
                            x="40"
                            y="110"
                            width="120"
                            height="40"
                            rx="3"
                            fill="#e2e8f0"
                            stroke="#94a3b8"
                          />
                          <path
                            d="M160 160 L 110 110 L 120 100 L 170 150 Z"
                            fill="#f59e0b"
                          />
                          <polygon
                            points="105,115 110,110 105,105"
                            fill="#0f172a"
                          />
                        </svg>
                      </div>

                      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/80 shadow-sm">
                        <svg
                          viewBox="0 0 200 200"
                          className="h-full w-full object-cover"
                        >
                          <rect width="200" height="200" fill="#0f172a" />
                          <rect
                            x="20"
                            y="30"
                            width="60"
                            height="130"
                            rx="4"
                            fill="#1e293b"
                            stroke="#38bdf8"
                          />
                          <rect
                            x="90"
                            y="30"
                            width="90"
                            height="60"
                            rx="4"
                            fill="#1e293b"
                            stroke="#a855f7"
                          />
                          <rect
                            x="90"
                            y="100"
                            width="90"
                            height="60"
                            rx="4"
                            fill="#1e293b"
                            stroke="#10b981"
                          />
                          <circle cx="50" cy="60" r="14" fill="#facc15" />
                          <rect
                            x="30"
                            y="90"
                            width="40"
                            height="8"
                            rx="2"
                            fill="#38bdf8"
                          />
                        </svg>
                      </div>

                      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-100 border border-slate-200/80 shadow-sm">
                        <svg
                          viewBox="0 0 200 200"
                          className="h-full w-full object-cover"
                        >
                          <rect width="200" height="200" fill="#f1f5f9" />
                          <rect
                            x="25"
                            y="20"
                            width="150"
                            height="120"
                            rx="6"
                            fill="#0f172a"
                          />
                          <rect
                            x="32"
                            y="26"
                            width="136"
                            height="108"
                            fill="#1e293b"
                          />
                          <circle cx="155" cy="155" r="16" fill="#059669" />
                          <rect
                            x="42"
                            y="38"
                            width="30"
                            height="30"
                            rx="4"
                            fill="#3b82f6"
                          />
                          <rect
                            x="80"
                            y="38"
                            width="30"
                            height="30"
                            rx="4"
                            fill="#ec4899"
                          />
                          <rect
                            x="118"
                            y="38"
                            width="30"
                            height="30"
                            rx="4"
                            fill="#10b981"
                          />
                          <rect
                            x="42"
                            y="78"
                            width="106"
                            height="42"
                            rx="4"
                            fill="#334155"
                          />
                        </svg>
                      </div>

                      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-slate-900 border border-slate-200/80 shadow-sm">
                        <svg
                          viewBox="0 0 200 200"
                          className="h-full w-full object-cover"
                        >
                          <rect width="200" height="200" fill="#020617" />
                          <rect
                            x="25"
                            y="25"
                            width="65"
                            height="145"
                            rx="10"
                            fill="#0f172a"
                            stroke="#334155"
                            strokeWidth="2"
                          />
                          <rect
                            x="30"
                            y="35"
                            width="55"
                            height="125"
                            rx="6"
                            fill="#1e1b4b"
                          />
                          <circle cx="57" cy="55" r="12" fill="#6366f1" />
                          <rect
                            x="36"
                            y="80"
                            width="43"
                            height="8"
                            rx="2"
                            fill="#a5b4fc"
                          />
                          <rect
                            x="105"
                            y="25"
                            width="65"
                            height="145"
                            rx="10"
                            fill="#ffffff"
                            stroke="#e2e8f0"
                            strokeWidth="2"
                          />
                          <rect
                            x="110"
                            y="35"
                            width="55"
                            height="125"
                            rx="6"
                            fill="#fef08a"
                          />
                          <rect
                            x="118"
                            y="55"
                            width="39"
                            height="20"
                            rx="4"
                            fill="#f59e0b"
                          />
                          <rect
                            x="118"
                            y="85"
                            width="39"
                            height="35"
                            rx="4"
                            fill="#10b981"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Key Points */}
                  <div>
                    <h3 className="text-base font-bold text-slate-900">
                      Key Points
                    </h3>
                    <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {keyPoints.map((point, index) => (
                        <div key={index} className="flex items-center gap-2.5">
                          <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 fill-blue-50" />
                          <span className="text-xs sm:text-sm font-semibold text-slate-800">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* ================= TAB 3: REVIEWS TAB (Matches image.png) ================= */}
              {activeTab === "reviews" && (
                <div className="space-y-8 animate-in fade-in duration-300">
                  {/* Heading & Subtitle matching image.png */}
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                      What Learners Are Saying
                    </h2>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-500 font-normal">
                      Discover what our learners have to say about their
                      experience with 'Build Digital Assets: A Comprehensive
                      Guide.' Read reviews and ratings from individuals who have
                      embarked on the transformative journey of mastering
                      digital asset creation.
                    </p>
                  </div>

                  {/* Rating Overview Card matching image.png */}
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
                      {/* Neon Lime Square Ratings 4.7 matching image.png */}
                      <div className="flex flex-col items-center justify-center rounded-2xl bg-lime-400 w-28 h-28 sm:w-32 sm:h-32 shrink-0 shadow-sm">
                        <span className="text-xs font-bold text-slate-900">
                          Ratings
                        </span>
                        <span className="text-4xl sm:text-5xl font-black text-slate-950 mt-1">
                          4.7
                        </span>
                      </div>

                      {/* 5-Star Breakdown Progress Bars matching image.png */}
                      <div className="flex-1 w-full space-y-2.5">
                        {ratingBreakdown.map((row) => (
                          <div
                            key={row.stars}
                            className="flex items-center gap-3 text-xs"
                          >
                            {/* Horizontal Progress Bar */}
                            <div className="flex-1 h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div
                                className="h-full rounded-full bg-lime-400 transition-all duration-500"
                                style={{ width: `${row.percentage}%` }}
                              />
                            </div>

                            {/* 5 Star Glyphs */}
                            <div className="flex items-center gap-0.5 shrink-0">
                              {[1, 2, 3, 4, 5].map((starIdx) => (
                                <Star
                                  key={starIdx}
                                  className={`h-3.5 w-3.5 ${
                                    starIdx <= row.stars
                                      ? "fill-slate-900 text-slate-900"
                                      : "fill-transparent text-slate-300 stroke-[1.5]"
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Review Count number */}
                            <span className="w-8 text-right font-medium text-slate-600 text-xs shrink-0">
                              {row.count}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Individual Reviews Heading + Filter Pills */}
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
                        Individual Reviews:
                      </h3>
                      <button
                        onClick={() => setIsWriteReviewOpen(true)}
                        className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm cursor-pointer"
                      >
                        <Sparkles className="h-3.5 w-3.5 text-lime-600" />
                        <span>Write a Review</span>
                      </button>
                    </div>

                    {/* Filter Pills row matching image.png */}
                    <div className="flex flex-wrap items-center gap-2 mb-6">
                      <button
                        onClick={() => setReviewFilter("all")}
                        className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                          reviewFilter === "all"
                            ? "bg-lime-400 text-slate-950 shadow-sm"
                            : "bg-[#f1f3f7] text-slate-700 hover:bg-slate-200"
                        }`}
                      >
                        All rating
                      </button>

                      {[5, 4, 3, 2, 1].map((stars) => (
                        <button
                          key={stars}
                          onClick={() => setReviewFilter(stars)}
                          className={`flex items-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                            reviewFilter === stars
                              ? "bg-lime-400 text-slate-950 shadow-sm"
                              : "bg-[#f1f3f7] text-slate-700 hover:bg-slate-200"
                          }`}
                        >
                          <Star
                            className={`h-3 w-3 ${
                              reviewFilter === stars
                                ? "fill-slate-950 text-slate-950"
                                : "fill-slate-700 text-slate-700"
                            }`}
                          />
                          <span>{stars}</span>
                        </button>
                      ))}
                    </div>

                    {/* List of Review Cards matching image.png */}
                    <div className="space-y-4">
                      {filteredReviews.length === 0 ? (
                        <div className="rounded-2xl border border-dashed border-slate-200 p-8 text-center text-xs text-slate-500">
                          No reviews found matching {reviewFilter} stars.
                        </div>
                      ) : (
                        filteredReviews.map((rev) => (
                          <div
                            key={rev.id}
                            className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-sm transition-all hover:border-slate-300"
                          >
                            {/* Header: User avatar, name, role, timestamp */}
                            <div className="flex items-start justify-between gap-3">
                              <div className="flex items-center gap-3">
                                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-1 ring-slate-200 shrink-0">
                                  <img
                                    src={rev.avatar}
                                    alt={rev.name}
                                    referrerPolicy="no-referrer"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                      (e.target as HTMLElement).style.display =
                                        "none";
                                    }}
                                  />
                                  <div className="absolute inset-0 flex items-center justify-center bg-blue-600 font-bold text-white text-xs -z-10">
                                    {rev.name.slice(0, 2).toUpperCase()}
                                  </div>
                                </div>
                                <div>
                                  <h5 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                                    {rev.name}
                                  </h5>
                                  <p className="text-xs text-slate-500 font-normal">
                                    {rev.role}
                                  </p>
                                </div>
                              </div>

                              <span className="text-xs text-slate-400 font-normal shrink-0">
                                {rev.timestamp}
                              </span>
                            </div>

                            {/* 5 Dark Solid Stars matching image.png */}
                            <div className="flex items-center gap-1 my-3">
                              {[1, 2, 3, 4, 5].map((s) => (
                                <Star
                                  key={s}
                                  className={`h-3.5 w-3.5 ${
                                    s <= rev.rating
                                      ? "fill-slate-900 text-slate-900"
                                      : "fill-transparent text-slate-300 stroke-[1.5]"
                                  }`}
                                />
                              ))}
                            </div>

                            {/* Review Quote text matching image.png */}
                            <p className="text-xs sm:text-sm leading-relaxed text-slate-600 font-normal">
                              {rev.comment}
                            </p>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* ================= RIGHT STICKY SIDEBAR (Span 4 matching image.png) ================= */}
            <div className="lg:col-span-4">
              <div className="sticky top-6 rounded-[28px] border border-slate-200 bg-white p-6 sm:p-7 shadow-xl">
                {/* Curriculum Summary Header */}
                <h3 className="text-base font-black text-slate-900">
                  112 Lessons (24 hours)
                </h3>

                {/* Lesson Snippet list matching image.png */}
                <div className="mt-4 space-y-3">
                  {curriculumLessons.slice(0, 3).map((item) => (
                    <div
                      key={item.id}
                      onClick={() =>
                        handlePlayModule(`${item.id} ${item.title}`)
                      }
                      className="flex items-start justify-between gap-3 text-xs hover:bg-slate-50 p-1.5 rounded-xl cursor-pointer transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-slate-900">
                          {item.id}
                        </span>
                        <span className="font-semibold text-slate-800 line-clamp-1 hover:text-blue-600">
                          {item.title}
                        </span>
                      </div>
                      <span className="shrink-0 text-blue-600 font-semibold">
                        {item.duration}
                      </span>
                    </div>
                  ))}
                  <p className="pt-1 text-[11px] font-medium text-slate-400">
                    99 more videos
                  </p>
                </div>

                {/* Ready to Dive In Subtext matching image.png */}
                <p className="mt-5 text-xs text-slate-500 leading-relaxed">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                {/* Lifetime Price matching image.png */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-blue-600">
                    ${currentCourse.price}
                  </span>
                  <span className="text-xs font-medium text-slate-400">
                    {currentCourse.priceType}
                  </span>
                </div>

                {/* Primary Neon Lime Enroll Button matching image.png */}
                <button
                  onClick={handleEnrollClick}
                  disabled={isEnrolled}
                  className={`mt-4 w-full rounded-full py-3.5 text-xs font-black transition-all shadow-md active:scale-95 cursor-pointer ${
                    isEnrolled
                      ? "bg-emerald-500 text-white cursor-default"
                      : "bg-lime-400 text-slate-950 hover:bg-lime-300 hover:scale-[1.02]"
                  }`}
                >
                  {isEnrolled ? "✓ Enrolled in Course" : "Enroll Now"}
                </button>

                {/* "This course include" Checklist matching image.png */}
                <div className="mt-7">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">
                    This course include
                  </h4>
                  <div className="mt-3.5 space-y-3 text-xs font-semibold text-slate-700">
                    <div className="flex items-center gap-3">
                      <FileText className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Learning Resources</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Video className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Quality Lesson Videos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Certificate of Completion</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MessageCircle className="h-4 w-4 text-blue-600 shrink-0" />
                      <span>Private Consultation</span>
                    </div>
                  </div>
                </div>

                {/* Hairline Divider */}
                <div className="my-6 border-t border-slate-100" />

                {/* Instructor Card matching image.png */}
                <div>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-slate-100">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                        alt="PurePearl Studio"
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 font-bold text-white text-xs -z-10">
                        PS
                      </div>
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900">
                        PurePearl Studio
                      </h5>
                      <p className="text-xs font-medium text-slate-500">
                        Professional Creator
                      </p>
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                    Ready to Dive In? Enroll Now and Start Building Your Digital
                    Future!
                  </p>

                  <button
                    onClick={() => onNavigate("creator-profile")}
                    className="mt-3.5 inline-block rounded-full border border-slate-200 bg-white px-5 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 cursor-pointer"
                  >
                    See Full Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Profile Dialog */}
      <Dialog open={isProfileModalOpen} onOpenChange={setIsProfileModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-lg font-black text-white shadow-md">
                PS
              </div>
              <div>
                <DialogTitle className="text-xl font-black text-slate-900">
                  {currentCourse.instructorStudio}
                </DialogTitle>
                <DialogDescription className="text-xs text-slate-500">
                  Verified ByteSpace Creator & Studio Partner
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>

          <div className="mt-4 space-y-4">
            <div className="grid grid-cols-3 gap-2 rounded-2xl bg-slate-50 p-3 text-center text-xs">
              <div>
                <div className="font-black text-slate-900">12</div>
                <div className="text-[10px] text-slate-400">Courses</div>
              </div>
              <div>
                <div className="font-black text-slate-900">4,520</div>
                <div className="text-[10px] text-slate-400">Students</div>
              </div>
              <div>
                <div className="font-black text-amber-500">4.9 ★</div>
                <div className="text-[10px] text-slate-400">Rating</div>
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold text-slate-900">
                About the Studio
              </h4>
              <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                PurePearl Studio is an award-winning creative agency dedicated
                to empowering creators with industry-level design systems, 3D
                vector illustration assets, and digital product workflows.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-3">
              <h4 className="text-xs font-bold text-slate-900 mb-2">
                Popular Courses
              </h4>
              <div className="space-y-1.5 text-xs text-slate-700">
                <div className="flex items-center justify-between">
                  <span className="font-semibold line-clamp-1">
                    1. Build Digital Asset: Comprehensive Guide
                  </span>
                  <span className="text-blue-600 font-bold">$25</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold line-clamp-1">
                    2. 3D Iconography & Lighting Systems
                  </span>
                  <span className="text-blue-600 font-bold">$19</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsProfileModalOpen(false)}
              className="w-full rounded-full bg-slate-900 py-2.5 text-xs font-bold text-white hover:bg-slate-800 transition-colors"
            >
              Close Profile
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* Quiz Modal for Interactive Knowledge Testing */}
      <Dialog open={isQuizModalOpen} onOpenChange={setIsQuizModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-black text-slate-900">
              Module 1 Knowledge Check
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Quick 3-question quiz to test your mastery of Digital Elements &
              Tools
            </DialogDescription>
          </DialogHeader>

          <div className="mt-3 space-y-4 text-xs">
            {[
              {
                q: "1. What is the standard vector resolution for scalable digital UI assets?",
                options: [
                  "72 DPI rasterized",
                  "Infinite scalable paths (SVG / Vector)",
                  "300 DPI CMYK",
                  "Low-poly bitmap",
                ],
                correct: 1,
              },
              {
                q: "2. Which color profile is primarily recommended for digital screen assets?",
                options: [
                  "CMYK Fogra39",
                  "sRGB / Display P3",
                  "Pantone Solid Coated",
                  "Grayscale 8-bit",
                ],
                correct: 1,
              },
              {
                q: "3. What is the first principle of User-Centric Asset Creation?",
                options: [
                  "Designing for developers only",
                  "Prioritizing visual clarity and accessibility",
                  "Exporting at 1x resolution only",
                  "Avoiding design tokens",
                ],
                correct: 1,
              },
            ].map((item, qIdx) => (
              <div
                key={qIdx}
                className="rounded-xl border border-slate-100 bg-slate-50/70 p-3"
              >
                <p className="font-bold text-slate-900 mb-2">{item.q}</p>
                <div className="space-y-1.5">
                  {item.options.map((opt, optIdx) => (
                    <label
                      key={optIdx}
                      className={`flex items-center gap-2 rounded-lg p-1.5 cursor-pointer transition-colors ${
                        selectedAnswers[qIdx] === optIdx
                          ? "bg-blue-50 text-blue-900 font-bold"
                          : "hover:bg-slate-100 text-slate-700"
                      }`}
                    >
                      <input
                        type="radio"
                        name={`quiz-q-${qIdx}`}
                        checked={selectedAnswers[qIdx] === optIdx}
                        onChange={() =>
                          setSelectedAnswers((prev) => ({
                            ...prev,
                            [qIdx]: optIdx,
                          }))
                        }
                        className="text-blue-600"
                      />
                      <span>{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            {quizScore !== null && (
              <div className="rounded-xl bg-lime-100 p-3 text-center font-bold text-slate-900">
                🎉 You scored {quizScore} / 3! Progress updated to 75%!
              </div>
            )}

            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  let correct = 0;
                  if (selectedAnswers[0] === 1) correct++;
                  if (selectedAnswers[1] === 1) correct++;
                  if (selectedAnswers[2] === 1) correct++;
                  setQuizScore(correct);
                  if (correct >= 2) {
                    setProgressPercentage((prev) =>
                      Math.min(100, Math.max(prev, 75)),
                    );
                    confetti({ particleCount: 70, spread: 60 });
                  }
                }}
                className="flex-1 rounded-full bg-lime-400 py-2.5 text-xs font-bold text-slate-950 hover:bg-lime-300 transition-colors"
              >
                Submit Answers
              </button>
              <button
                onClick={() => setIsQuizModalOpen(false)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Write a Review Modal */}
      <Dialog open={isWriteReviewOpen} onOpenChange={setIsWriteReviewOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg font-black text-slate-900">
              Write a Review
            </DialogTitle>
            <DialogDescription className="text-xs text-slate-500">
              Share your feedback for Build Digital Asset: A Comprehensive Guide
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleAddReview} className="mt-3 space-y-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={newReviewName}
                onChange={(e) => setNewReviewName(e.target.value)}
                placeholder="e.g. Alex Morgan"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Your Role / Headline
              </label>
              <input
                type="text"
                required
                value={newReviewRole}
                onChange={(e) => setNewReviewRole(e.target.value)}
                placeholder="e.g. UI/UX Designer"
                className="w-full rounded-xl border border-slate-200 px-3 py-2 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setNewReviewRating(star)}
                    className="p-1 cursor-pointer hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`h-6 w-6 ${
                        star <= newReviewRating
                          ? "fill-slate-950 text-slate-950"
                          : "fill-transparent text-slate-300 stroke-[1.5]"
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-2 font-bold text-slate-800">
                  {newReviewRating} / 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1">
                Review
              </label>
              <textarea
                required
                rows={3}
                value={newReviewComment}
                onChange={(e) => setNewReviewComment(e.target.value)}
                placeholder="What did you think of the course modules, videos, and practical insights?"
                className="w-full rounded-xl border border-slate-200 p-3 text-xs focus:border-blue-600 focus:outline-none"
              />
            </div>

            <div className="flex items-center gap-2 pt-2">
              <button
                type="submit"
                className="flex-1 rounded-full bg-lime-400 py-2.5 text-xs font-bold text-slate-950 hover:bg-lime-300 transition-colors cursor-pointer"
              >
                Submit Review
              </button>
              <button
                type="button"
                onClick={() => setIsWriteReviewOpen(false)}
                className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function Page() {
  return (
    <CourseDetailsPage
      onNavigateToHome={() => {}}
      onNavigateToCourses={() => {}}
      onNavigate={() => {}}
      currentUser={null}
      onSignOut={() => {}}
      cartCount={0}
      onEnroll={() => {}}
      isEnrolled={false}
      onNewsletterSubmit={() => {}}
    />
  );
}
