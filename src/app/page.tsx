"use client";

import { SponsorLogos } from "@/components/common/SponsorLogos";
import { COURSES, Course } from "@/components/data/coursesData";
import { CreatorCtaSection } from "@/components/home/creators/CreatorCtaSection";
import { FeatureSplitSections } from "@/components/home/features/FeatureSplitSections";
import { LearningPathsSection } from "@/components/home/paths/LearningPathsSection";
import { CourseCatalogSection } from "@/components/home/sections/courses/CourseCatalogSection";
import HomeHeroSection from "@/components/home/sections/hero/HomeHeroSection";
import { TestimonialsSection } from "@/components/home/testimonials/TestimonialsSection";
import { useMemo, useState } from "react";

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  const visibleCourses = useMemo(() => {
    if (activeCategory === "Featured") return COURSES;
    return COURSES.filter((course) => course.category === activeCategory);
  }, [activeCategory]);

  const handleSelectCourse = (course: Course) => {
    console.log("Selected course:", course.title);
  };

  return (
    <main className="bg-[#f5f7fb] text-slate-900">
      <HomeHeroSection />
      <SponsorLogos />
      <CourseCatalogSection
        courses={visibleCourses}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        onSelectCourse={handleSelectCourse}
      />
      <LearningPathsSection onSelectPath={() => {}} />
      <FeatureSplitSections />
      <CreatorCtaSection onJoinAsCreator={() => {}} />
      <TestimonialsSection />
    </main>
  );
}
