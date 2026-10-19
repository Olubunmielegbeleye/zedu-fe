"use client";

import React from "react";

export default function AuthSideBanner() {
  return (
    <section className="hidden lg:flex lg:w-1/2 relative min-h-screen bg-gradient-to-br from-[#1C1646] via-[#17113C] to-[#0F0B29] p-8 xl:p-14 flex-col justify-between overflow-hidden select-none">
      {/* Ambient background glows */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#7141F8]/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#5225c5]/25 blur-3xl pointer-events-none" />

      {/* Top text content */}
      <div className="relative z-10 flex flex-col gap-3 max-w-lg pt-4">
        <h2 className="text-3xl xl:text-[40px] font-bold text-white tracking-tight leading-[1.15]">
          Your team has
          <br />
          been busy.
        </h2>
        <p className="text-sm xl:text-base text-white/70 font-normal leading-relaxed">
          12 new messages are waiting for you in 3 channels.
        </p>
      </div>

      {/* Center 3D perspective dashboard backdrop */}
      <div className="absolute right-[-15%] top-[22%] w-[580px] h-[440px] rounded-2xl bg-[#221A52]/80 border border-white/10 shadow-2xl backdrop-blur-sm [transform:perspective(1200px)_rotateY(-12deg)_rotateX(6deg)_rotate(-4deg)] overflow-hidden pointer-events-none opacity-80 flex">
        {/* Mockup Left Sidebar */}
        <div className="w-28 border-r border-white/10 p-4 flex flex-col gap-3 bg-black/10">
          <div className="w-12 h-2.5 rounded-full bg-white/20" />
          <div className="w-20 h-2 rounded-full bg-white/15 mt-2" />
          <div className="w-16 h-2 rounded-full bg-white/10" />
          <div className="w-18 h-2 rounded-full bg-white/10" />
          <div className="w-14 h-2 rounded-full bg-white/10" />
          <div className="w-16 h-2 rounded-full bg-white/15 mt-3" />
          <div className="w-20 h-2 rounded-full bg-white/10" />
        </div>

        {/* Mockup Chat Feed */}
        <div className="flex-1 p-6 flex flex-col gap-6">
          {/* Channel top bar skeleton */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="w-28 h-3 rounded-full bg-white/25" />
            <div className="w-16 h-2 rounded-full bg-white/15" />
          </div>

          {/* Row 1 - Amara / Flamingo */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#E05672] shrink-0" />
            <div className="flex-1 flex flex-col gap-2 pt-1">
              <div className="w-32 h-2.5 rounded-full bg-white/30" />
              <div className="w-64 h-2 rounded-full bg-white/15" />
              <div className="w-48 h-2 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Row 2 - General */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#24B09B] shrink-0" />
            <div className="flex-1 flex flex-col gap-2 pt-1">
              <div className="w-28 h-2.5 rounded-full bg-white/30" />
              <div className="w-72 h-2 rounded-full bg-white/15" />
              <div className="w-56 h-2 rounded-full bg-white/10" />
            </div>
          </div>

          {/* Row 3 - Updates */}
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#EAA036] shrink-0" />
            <div className="flex-1 flex flex-col gap-2 pt-1">
              <div className="w-36 h-2.5 rounded-full bg-white/30" />
              <div className="w-60 h-2 rounded-full bg-white/15" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating interactive-style cards in the foreground */}
      <div className="relative z-10 flex flex-col gap-3 pb-4">
        {/* Card 1: Amara */}
        <div className="bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.22)] p-3.5 flex items-center gap-3.5 w-fit min-w-[270px] border border-black/5 hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-9 h-9 rounded-xl bg-[#7141F8] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
            A
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-[#667085]">
              <span className="font-semibold text-[#101828]">Amara</span> in{" "}
              <span className="text-[#667085]">#team-flamingo</span>
            </div>
            <div className="text-sm font-medium text-[#101828]">
              Good morning everyone
            </div>
          </div>
        </div>

        {/* Card 2: Tolu */}
        <div className="bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.22)] p-3.5 flex items-center gap-3.5 w-fit min-w-[270px] border border-black/5 ml-4 hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-9 h-9 rounded-xl bg-[#E63956] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
            T
          </div>
          <div className="flex flex-col">
            <div className="text-xs text-[#667085]">
              <span className="font-semibold text-[#101828]">Tolu</span> in{" "}
              <span className="text-[#667085]">#general</span>
            </div>
            <div className="text-sm font-medium text-[#101828]">
              Anyone active?
            </div>
          </div>
        </div>

        {/* Card 3: D with gently blinking typing dots */}
        <div className="bg-white rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.22)] px-3.5 py-2.5 flex items-center gap-3 w-fit border border-black/5 ml-4 hover:-translate-y-0.5 transition-transform duration-200">
          <div className="w-9 h-9 rounded-xl bg-[#00A86B] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-sm">
            D
          </div>
          {/* Gentle, non-rapid wave typing indicator */}
          <div className="flex items-center gap-1.5 px-2">
            <span
              className="w-2 h-2 rounded-full bg-[#98A2B3] animate-pulse"
              style={{ animationDuration: "1.6s", animationDelay: "0ms" }}
            />
            <span
              className="w-2 h-2 rounded-full bg-[#98A2B3] animate-pulse"
              style={{ animationDuration: "1.6s", animationDelay: "300ms" }}
            />
            <span
              className="w-2 h-2 rounded-full bg-[#98A2B3] animate-pulse"
              style={{ animationDuration: "1.6s", animationDelay: "600ms" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
