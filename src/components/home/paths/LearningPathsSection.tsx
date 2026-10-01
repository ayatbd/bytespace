import React from "react";
import {
  Compass,
  Code2,
  Laptop,
  Building2,
  Megaphone,
  Camera,
} from "lucide-react";

interface LearningPathsSectionProps {
  onSelectPath: (pathName: string) => void;
}

export function LearningPathsSection({ onSelectPath }: LearningPathsSectionProps) {
  const paths = [
    {
      id: "design",
      name: "Design",
      icon: <Compass className="h-6 w-6 text-slate-950" />,
      queryCategory: "UI/UX Design",
    },
    {
      id: "development",
      name: "Development",
      icon: <Code2 className="h-6 w-6 text-slate-950" />,
      queryCategory: "Web Development",
    },
    {
      id: "it-software",
      name: "IT & Software",
      icon: <Laptop className="h-6 w-6 text-slate-950" />,
      queryCategory: "Data Science",
    },
    {
      id: "business",
      name: "Business",
      icon: <Building2 className="h-6 w-6 text-slate-950" />,
      queryCategory: "Business",
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: <Megaphone className="h-6 w-6 text-slate-950" />,
      queryCategory: "Marketing",
    },
    {
      id: "photography",
      name: "Photography",
      icon: <Camera className="h-6 w-6 text-slate-950" />,
      queryCategory: "Photography",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-slate-100">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-balance text-2xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-balance text-xs leading-relaxed text-slate-500 sm:text-sm">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Row - 6 items */}
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {paths.map((path) => (
            <button
              key={path.id}
              onClick={() => onSelectPath(path.queryCategory)}
              className="group flex flex-col items-center justify-center rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-lg active:scale-95 cursor-pointer text-center"
            >
              {/* Neon Lime Icon Container */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-400 shadow-sm transition-transform duration-300 group-hover:scale-110">
                {path.icon}
              </div>

              {/* Title */}
              <span className="mt-4 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors sm:text-sm">
                {path.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
