"use client";
import { Course } from "@/components/data/coursesData";
import { BarChart2, Star } from "lucide-react";
import { CourseThumbnail } from "./CourseThumbnail";

interface CourseCardProps {
  course: Course;
  onSelectCourse: (course: Course) => void;
}

export function CourseCard({ course, onSelectCourse }: CourseCardProps) {
  return (
    <div
      onClick={() => onSelectCourse(course)}
      className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl cursor-pointer"
    >
      <div>
        {/* Course Thumbnail */}
        <CourseThumbnail course={course} />

        {/* Header & Meta */}
        <div className="mt-3.5 flex items-start justify-between gap-2">
          <div className="flex-1">
            <h3 className="line-clamp-1 text-base font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors">
              {course.shortTitle}
            </h3>
            <p className="mt-0.5 text-xs text-blue-500 font-medium">
              by{" "}
              <span className="hover:underline">{course.instructorStudio}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-semibold text-slate-700">
            <span>{course.rating.toFixed(1)}</span>
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          </div>
        </div>

        {/* Level and student avatars pile */}
        <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <BarChart2 className="h-3.5 w-3.5 text-slate-400" />
            <span>{course.level}</span>
          </div>

          {/* Student Avatar Pile */}
          <div className="flex items-center -space-x-1.5">
            <div className="h-5 w-5 rounded-full border border-white bg-blue-500 text-[9px] font-bold text-white flex items-center justify-center">
              A
            </div>
            <div className="h-5 w-5 rounded-full border border-white bg-pink-500 text-[9px] font-bold text-white flex items-center justify-center">
              M
            </div>
            <div className="h-5 w-5 rounded-full border border-white bg-emerald-500 text-[9px] font-bold text-white flex items-center justify-center">
              J
            </div>
            <div className="flex h-5 items-center justify-center rounded-full border border-white bg-lime-400 px-1.5 text-[9px] font-black text-slate-900 shadow-sm">
              +{course.enrolledCount}
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Footer */}
      <div className="mt-3 flex items-baseline justify-between border-t border-slate-100 pt-2.5">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-extrabold text-blue-600">
            ${course.price}
          </span>
          <span className="text-xs text-slate-400 font-medium">
            {course.priceType}
          </span>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSelectCourse(course);
          }}
          className="text-xs font-semibold text-slate-700 hover:text-blue-600 hover:underline"
        >
          View details →
        </button>
      </div>
    </div>
  );
}
