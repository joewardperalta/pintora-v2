"use client";

import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <button
      onClick={() => {
        window.history.back();
      }}
      className="cursor-pointer inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#1c1b21]/20 text-[#1c1b21] hover:bg-[#1c1b21]/5 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      Go Back
    </button>
  );
}
