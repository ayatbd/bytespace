"use client";
import { ByteSpaceLogoDark } from "@/components/shapes/FloatingShapes";
import React, { useState } from "react";

interface FooterProps {
  onNewsletterSubmit: (email: string) => void;
}

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-12 text-slate-600">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Brand & Newsletter (Span 5) */}
          <div className="lg:col-span-5">
            <ByteSpaceLogoDark />
            <p className="mt-4 max-w-sm text-xs text-slate-500 sm:text-sm">
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>

            {/* Newsletter input + lime button */}
            <form
              onSubmit={handleSubmit}
              className="mt-5 flex max-w-sm items-center gap-2"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-11 w-full rounded-full border border-slate-200 bg-white px-4 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none sm:text-sm"
              />
              <button
                type="submit"
                className="h-11 rounded-full bg-lime-400 px-6 text-xs font-bold text-slate-950 transition-all hover:bg-lime-300 active:scale-95 sm:text-sm shrink-0"
              >
                Search
              </button>
            </form>

            {subscribed && (
              <p className="mt-2 text-xs font-semibold text-emerald-600">
                ✓ Thank you for subscribing to ByteSpace updates!
              </p>
            )}

            <p className="mt-3 text-[10px] text-slate-400">
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links (Span 7) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            {/* Column 1 */}
            <div>
              <ul className="space-y-3 text-xs font-medium text-slate-600 sm:text-sm">
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Featured Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Featured Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Business
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    IT
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Design
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div>
              <ul className="space-y-3 text-xs font-medium text-slate-600 sm:text-sm">
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Development
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Photography
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Finance
                  </a>
                </li>
                <li>
                  <a
                    href="#courses"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Sport
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div>
              <ul className="space-y-3 text-xs font-medium text-slate-600 sm:text-sm">
                <li>
                  <a
                    href="#creators"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Become a Creator
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-950 transition-colors"
                  >
                    Help
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-slate-950 transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar matching image.png */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 sm:flex-row text-xs text-slate-400">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-slate-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-slate-600 transition-colors">
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
