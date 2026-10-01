"use client";

import { ByteSpaceLogo } from "@/components/shapes/FloatingShapes";
import { LogOut, Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type NavView =
  | "home"
  | "search"
  | "creator-profile"
  | "login"
  | "register"
  | "course-details"
  | "404";

type UserProfile = {
  name: string;
};

type NavbarProps = {
  currentView?: NavView;
  currentUser?: UserProfile | null;
  onNavigate?: (view: NavView) => void;
  onSignOut?: () => void;
  onOpenCart?: (() => void) | null;
  cartCount?: number;
  variant?: "default" | "minimal" | "transparent";
};

export function Navbar({
  currentView = "home",
  currentUser = null,
  onNavigate = () => undefined,
  onSignOut = () => undefined,
  onOpenCart = null,
  cartCount = 0,
  variant = "default",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMinimal = variant === "minimal" || currentView === "404";
  const isTransparent = variant === "transparent" || isMinimal;
  const safeOpenCart = onOpenCart ?? (() => undefined);

  return (
    <header
      className={`relative z-30 w-full border-b border-white/10 px-4 py-5 sm:px-8 ${
        isTransparent ? "bg-transparent" : "bg-[#1746e0]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          onClick={() => onNavigate("home")}
          className="flex items-center gap-2 cursor-pointer transition-transform hover:scale-105"
        >
          <ByteSpaceLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            onClick={() => onNavigate("home")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              currentView === "home"
                ? "text-lime-300 font-bold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={() => onNavigate("search")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              currentView === "search"
                ? "text-lime-300 font-bold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/"
            onClick={() => onNavigate("creator-profile")}
            className={`text-sm font-semibold transition-colors cursor-pointer ${
              currentView === "creator-profile"
                ? "text-lime-300 font-bold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Creators
          </Link>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1.5 text-xs text-white">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 font-bold text-slate-950">
                  {currentUser.name.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold">{currentUser.name}</span>
              </div>
              <button
                onClick={onSignOut}
                title="Sign Out"
                className="flex items-center gap-1 text-xs text-white/80 hover:text-white cursor-pointer px-2 py-1 rounded-lg hover:bg-white/10 transition-colors"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Sign Out</span>
              </button>
            </div>
          ) : isMinimal ? (
            <div className="flex items-center gap-6">
              <Link
                href="/login"
                onClick={() => onNavigate("login")}
                className="text-sm font-medium text-white hover:text-lime-300 transition-colors cursor-pointer"
              >
                Sign In
              </Link>
              <Link
                href="/register"
                onClick={() => onNavigate("register")}
                className="text-sm font-medium text-white hover:text-lime-300 transition-colors cursor-pointer"
              >
                Join Us
              </Link>
              <button
                onClick={() => {
                  if (onOpenCart) {
                    onOpenCart();
                    return;
                  }

                  onNavigate("course-details");
                }}
                className="cursor-pointer text-white transition-colors hover:text-lime-300"
                title="Cart"
              >
                <ShoppingBag className="h-5 w-5" />
              </button>
            </div>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => onNavigate("login")}
                className={`text-sm font-semibold transition-colors cursor-pointer ${
                  currentView === "login"
                    ? "text-lime-300 font-bold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                Sign In
              </Link>

              <Link
                href="/register"
                onClick={() => onNavigate("register")}
                className="flex items-center gap-2 rounded-full bg-lime-400 text-slate-950 px-5 py-2 text-sm font-bold transition-all hover:bg-lime-300 active:scale-95 shadow-sm cursor-pointer"
              >
                Join Us
                <ShoppingBag className="h-4 w-4" />
              </Link>
            </>
          )}

          {cartCount > 0 && (
            <button
              onClick={safeOpenCart}
              className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white hover:bg-white/25 transition-colors cursor-pointer"
            >
              <ShoppingBag className="h-4 w-4" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-lime-400 text-[10px] font-black text-slate-950">
                {cartCount}
              </span>
            </button>
          )}
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white md:hidden"
        >
          {mobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-3 rounded-2xl bg-[#0f34b2] p-5 md:hidden text-white shadow-xl">
          <Link
            href="/"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate("home");
            }}
            className="py-2 text-left text-base font-medium text-white/90 hover:text-white"
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate("search");
            }}
            className="py-2 text-left text-base font-medium text-white/90 hover:text-white"
          >
            Courses (Search)
          </Link>
          <Link
            href="/"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate("creator-profile");
            }}
            className={`py-2 text-left text-base font-medium transition-colors ${
              currentView === "creator-profile"
                ? "text-lime-300 font-bold"
                : "text-white/90 hover:text-white"
            }`}
          >
            Creators
          </Link>

          <div className="mt-3 flex flex-col gap-2 pt-3 border-t border-white/15">
            {currentUser ? (
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold">
                  {currentUser.name}
                </span>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onSignOut();
                  }}
                  className="text-xs text-red-300 font-semibold"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate("login");
                  }}
                  className="w-full rounded-full border border-white/30 py-2.5 text-center text-sm font-semibold"
                >
                  Sign In
                </Link>
                <Link
                  href="/register"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onNavigate("register");
                  }}
                  className="w-full rounded-full bg-lime-400 py-2.5 text-center text-sm font-bold text-slate-950"
                >
                  Join Us
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
