"use client";
import { useState } from "react";
import { HeroSection } from "./HeroSection";

const HomeHeroSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div>
      {/* <HeroIllustration /> */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onSearchSubmit={() => {}}
      />
    </div>
  );
};

export default HomeHeroSection;
