"use client";
import { CATEGORIES, Course } from "@/components/data/coursesData";
import { useState } from "react";
import { CourseCard } from "./CourseCard";

interface CourseCatalogSectionProps {
  courses: Course[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
  onSelectCourse: (course: Course) => void;
}

export function CourseCatalogSection({
  courses,
  activeCategory,
  onSelectCategory,
  onSelectCourse,
}: CourseCatalogSectionProps) {
  const [showAllTags, setShowAllTags] = useState(false);
  const normalizedCategory =
    activeCategory === "all" ? "Featured" : activeCategory;

  // Group tags into rows or responsive flex
  const visibleCategories = showAllTags ? CATEGORIES : CATEGORIES.slice(0, 18);

  return (
    <section id="courses" className="bg-[#fcfdfd] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center">
          <h2 className="text-balance text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Discover Your Passion, <br className="sm:hidden" />
            Build Your Skills
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-xs leading-relaxed text-slate-500 sm:text-sm">
            At Bytespace Courses, we bring you closer to life-changing
            knowledge. Explore a variety of courses across different fields,
            from technology to the arts, and make a difference in your career
            and life.
          </p>
        </div>

        {/* Filter Chips / Badges exact match from image.png */}
        <div className="mx-auto mt-8 max-w-4xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {visibleCategories.map((category) => {
              const isActive = normalizedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => onSelectCategory(category)}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all cursor-pointer ${
                    isActive
                      ? "bg-lime-400 text-slate-950 shadow-sm font-bold scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              );
            })}

            {/* + More toggle button */}
            <button
              onClick={() => setShowAllTags(!showAllTags)}
              className="rounded-full bg-slate-100 px-4 py-1.5 text-xs font-bold text-blue-600 hover:bg-slate-200 transition-colors"
            >
              {showAllTags ? "Show Less" : "+ More"}
            </button>
          </div>
        </div>

        {/* Course Cards Grid: 2 rows of 3 columns */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.length > 0 ? (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onSelectCourse={onSelectCourse}
              />
            ))
          ) : (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-200 p-12 text-center">
              <p className="text-sm font-semibold text-slate-600">
                No courses found in this category.
              </p>
              <button
                onClick={() => onSelectCategory("Featured")}
                className="mt-3 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-slate-950"
              >
                Reset to Featured
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
