"use client";
import { CATEGORIES, COURSES, Course } from "@/components/data/coursesData";
import { CourseCard } from "@/components/home/sections/courses/CourseCard";
import {
  ArrowUpDown,
  BarChart2,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  FolderKanban,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import React, { useMemo, useState } from "react";

interface SearchPageProps {
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
  onSelectCourse: (course: Course) => void;
  onNewsletterSubmit: (email: string) => void;
  initialQuery?: string;
}

export function SearchPage({
  onSelectCourse = () => {},
  initialQuery = "",
}: Partial<SearchPageProps> = {}) {
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [activeCategory, setActiveCategory] = useState("Featured");
  const [activeLevel, setActiveLevel] = useState<string>("All");
  const [sortBy, setSortBy] = useState<
    "relevant" | "rating" | "price-asc" | "lessons"
  >("relevant");
  const [scope, setScope] = useState<"Courses" | "Creators" | "Topics">(
    "Courses",
  );
  const [currentPage, setCurrentPage] = useState(1);

  // Dropdown toggles
  const [isLevelOpen, setIsLevelOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isScopeOpen, setIsScopeOpen] = useState(false);

  // Pill categories shown in the screenshot
  const filterPills = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing",
    "Cooking",
  ];

  // Base list expanded to provide realistic pagination across 5 pages
  const allGeneratedCourses = useMemo(() => {
    // Generate a rich pool of 36 courses based on the initial dataset
    const pool: Course[] = [];
    for (let i = 0; i < 6; i++) {
      COURSES.forEach((course, idx) => {
        pool.push({
          ...course,
          id: `${course.id}-page-variant-${i}-${idx}`,
          title: i === 0 ? course.title : `${course.title} (Vol. ${i + 1})`,
          shortTitle:
            i === 0 ? course.shortTitle : `${course.shortTitle} ${i + 1}`,
          rating: Number((4.3 + ((idx + i) % 7) * 0.1).toFixed(1)),
        });
      });
    }
    return pool;
  }, []);

  // Filter logic
  const filteredCourses = useMemo(() => {
    return allGeneratedCourses.filter((course) => {
      const matchesSearch =
        searchQuery.trim() === "" ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "Featured" ||
        course.category.toLowerCase() === activeCategory.toLowerCase();

      const matchesLevel =
        activeLevel === "All" || course.level === activeLevel;

      return matchesSearch && matchesCategory && matchesLevel;
    });
  }, [allGeneratedCourses, searchQuery, activeCategory, activeLevel]);

  // Sort logic
  const sortedCourses = useMemo(() => {
    const list = [...filteredCourses];
    if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "price-asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "lessons") {
      list.sort((a, b) => b.lessonsCount - a.lessonsCount);
    }
    return list;
  }, [filteredCourses, sortBy]);

  // Pagination: 6 courses per page (2 rows of 3 columns)
  const itemsPerPage = 6;
  const totalPages = Math.max(
    1,
    Math.min(5, Math.ceil(sortedCourses.length / itemsPerPage)),
  );
  const paginatedCourses = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return sortedCourses.slice(start, start + itemsPerPage);
  }, [sortedCourses, currentPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-lime-300 selection:text-slate-900">
      {/* Top Navigation */}

      {/* Hero Search Section matching image.png */}
      <section className="relative bg-[#1746e0] bg-grid-pattern pt-12 pb-16 sm:pt-16 sm:pb-20 text-center">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-5xl">
            Find Your Next Course
          </h1>

          {/* Search bar with neon lime 'Courses ▾' dropdown attached */}
          <div className="mx-auto mt-8 max-w-2xl">
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center rounded-full bg-white p-1.5 pl-5 shadow-2xl ring-4 ring-black/5"
            >
              <Search className="h-4 w-4 shrink-0 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search"
                className="w-full bg-transparent px-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
              />

              {/* Lime 'Courses ▾' button */}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsScopeOpen(!isScopeOpen)}
                  className="flex items-center gap-1.5 rounded-full bg-lime-400 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:bg-lime-300 active:scale-95 cursor-pointer whitespace-nowrap"
                >
                  <span>{scope}</span>
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>

                {isScopeOpen && (
                  <div className="absolute right-0 top-12 z-30 w-36 rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
                    {(["Courses", "Creators", "Topics"] as const).map(
                      (item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => {
                            setScope(item);
                            setIsScopeOpen(false);
                          }}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold ${
                            scope === item
                              ? "bg-lime-100 text-slate-900"
                              : "text-slate-700 hover:bg-slate-50"
                          }`}
                        >
                          <span>{item}</span>
                          {scope === item && (
                            <Check className="h-3.5 w-3.5 text-slate-900" />
                          )}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Top Control Bar: Filters & Sort Row matching image.png */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
          {/* Left Controls: Filter, Level, Category */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Filter Button */}
            <button
              onClick={() => {
                setActiveCategory("Featured");
                setActiveLevel("All");
                setSearchQuery("");
                setCurrentPage(1);
              }}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 active:scale-95 cursor-pointer"
            >
              <SlidersHorizontal className="h-3.5 w-3.5 text-slate-600" />
              <span>Filter</span>
            </button>

            {/* Level Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLevelOpen(!isLevelOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 active:scale-95 cursor-pointer"
              >
                <BarChart2 className="h-3.5 w-3.5 text-slate-600" />
                <span>Level {activeLevel !== "All" && `(${activeLevel})`}</span>
              </button>

              {isLevelOpen && (
                <div className="absolute left-0 top-11 z-30 w-44 rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
                  {["All", "Beginner", "Intermediate", "Advanced"].map(
                    (lvl) => (
                      <button
                        key={lvl}
                        onClick={() => {
                          setActiveLevel(lvl);
                          setIsLevelOpen(false);
                          setCurrentPage(1);
                        }}
                        className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold ${
                          activeLevel === lvl
                            ? "bg-lime-100 text-slate-900"
                            : "text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <span>{lvl === "All" ? "All Levels" : lvl}</span>
                        {activeLevel === lvl && (
                          <Check className="h-3.5 w-3.5 text-slate-900" />
                        )}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>

            {/* Category Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 active:scale-95 cursor-pointer"
              >
                <FolderKanban className="h-3.5 w-3.5 text-slate-600" />
                <span>
                  Category{" "}
                  {activeCategory !== "Featured" && `(${activeCategory})`}
                </span>
              </button>

              {isCategoryOpen && (
                <div className="absolute left-0 top-11 z-30 max-h-64 w-52 overflow-y-auto rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setIsCategoryOpen(false);
                        setCurrentPage(1);
                      }}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold ${
                        activeCategory === cat
                          ? "bg-lime-100 text-slate-900"
                          : "text-slate-700 hover:bg-slate-50"
                      }`}
                    >
                      <span>{cat}</span>
                      {activeCategory === cat && (
                        <Check className="h-3.5 w-3.5 text-slate-900" />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Controls: Sort Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsSortOpen(!isSortOpen)}
              className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-50 active:scale-95 cursor-pointer"
            >
              <ArrowUpDown className="h-3.5 w-3.5 text-slate-600" />
              <span>
                {sortBy === "relevant" && "Most relevant"}
                {sortBy === "rating" && "Highest rated"}
                {sortBy === "price-asc" && "Price: Low to High"}
                {sortBy === "lessons" && "Lesson Count"}
              </span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {isSortOpen && (
              <div className="absolute right-0 top-11 z-30 w-48 rounded-2xl border border-slate-100 bg-white p-1.5 shadow-xl">
                {[
                  { id: "relevant", label: "Most relevant" },
                  { id: "rating", label: "Highest rated" },
                  { id: "price-asc", label: "Price: Low to High" },
                  { id: "lessons", label: "Lesson Count" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => {
                      setSortBy(opt.id as any);
                      setIsSortOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold ${
                      sortBy === opt.id
                        ? "bg-lime-100 text-slate-900"
                        : "text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    <span>{opt.label}</span>
                    {sortBy === opt.id && (
                      <Check className="h-3.5 w-3.5 text-slate-900" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Category Filter Pills Row matching image.png */}
        <div className="mt-6 flex flex-wrap items-center gap-2">
          {filterPills.map((pill) => {
            const isActive = activeCategory === pill;
            return (
              <button
                key={pill}
                onClick={() => {
                  setActiveCategory(pill);
                  setCurrentPage(1);
                }}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? "bg-lime-400 text-slate-950 font-bold shadow-sm scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {pill}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid: 3 columns matching image.png */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedCourses.length > 0 ? (
            paginatedCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-200 p-12 text-center">
              <p className="text-sm font-semibold text-slate-600">
                No courses match your query.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("Featured");
                  setActiveLevel("All");
                  setSearchQuery("");
                }}
                className="mt-3 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-slate-950"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* Pagination matching image.png: < 1 2 3 4 5 > */}
        <div className="mt-14 flex items-center justify-center gap-2 select-none">
          {/* Previous Arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Page numbers 1 through 5 */}
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              className={`flex h-9 w-9 items-center justify-center rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === pageNum
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {pageNum}
            </button>
          ))}

          {/* Next Arrow */}
          <button
            onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
            disabled={currentPage === 5}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent cursor-pointer"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </main>
    </div>
  );
}

export default function Page() {
  return (
    <SearchPage
      onNavigate={() => {}}
      currentUser={null}
      onSignOut={() => {}}
      cartCount={0}
      onSelectCourse={() => {}}
      onNewsletterSubmit={() => {}}
      initialQuery=""
    />
  );
}
