"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import type { ProjectImage } from "@/data/projects";

interface ProjectGalleryProps {
  title: string;
  images: (string | ProjectImage)[];
  projectUrl?: string;
}

export default function ProjectGallery({
  title,
  images,
  projectUrl,
}: ProjectGalleryProps) {
  // Normalize images to structured objects
  const normalizedImages: ProjectImage[] = images
    .filter(Boolean)
    .map((img, idx) => {
      if (typeof img === "string") {
        return {
          src: img,
          alt: `${title} - Screenshot ${idx + 1}`,
          title: `Interface Preview ${String(idx + 1).padStart(2, "0")}`,
        };
      }
      return {
        ...img,
        alt: img.alt || `${title} - Screenshot ${idx + 1}`,
        title: img.title || `Interface Preview ${String(idx + 1).padStart(2, "0")}`,
      };
    });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const total = normalizedImages.length;
  const currentImage = normalizedImages[currentIndex] || normalizedImages[0];

  const handleNext = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    if (total <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Handle keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") setIsLightboxOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev]);

  if (!currentImage) return null;

  return (
    <section className="space-y-4" aria-label="Project Visual Showcase">
      {/* Visual Header / Meta */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono-code text-[#8A999A]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#12C887] animate-pulse" />
          <span className="text-[#12C887] font-semibold tracking-wider uppercase">
            VISUAL SHOWCASE
          </span>
          <span className="text-[#1B2727]">•</span>
          <span>
            {total > 1 ? `${total} PREVIEWS AVAILABLE` : "FEATURED PREVIEW"}
          </span>
        </div>

        {total > 1 && (
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded bg-[#101718] border border-[#1B2727] text-white">
              {String(currentIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        )}
      </div>

      {/* Main Showcase Window */}
      <div className="group relative rounded-xl border border-[#1B2727] bg-[#0B1011] overflow-hidden shadow-2xl transition-all hover:border-[#12C887]/40">
        {/* Browser / Tech Header Chrome */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#080D0E] border-b border-[#1B2727] text-xs font-mono-code text-[#8A999A]">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/60 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/60 inline-block" />
            </div>
            <span className="hidden sm:inline-block ml-3 text-[11px] text-[#8A999A] truncate max-w-xs">
              {currentImage.title || title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101718] hover:bg-[#1B2727] text-[#12C887] text-[11px] transition-colors border border-[#1B2727]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#101718] hover:bg-[#1B2727] text-[#DFE3E4] hover:text-[#12C887] text-[11px] transition-colors border border-[#1B2727]"
              title="Expand view"
            >
              <Maximize2 className="w-3 h-3" />
              <span className="hidden sm:inline">Expand</span>
            </button>
          </div>
        </div>

        {/* Active Image Stage */}
        <div
          className="relative aspect-video w-full bg-[#080D0E] flex items-center justify-center cursor-pointer overflow-hidden"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt || title}
            fill
            priority={currentIndex === 0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
            className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.01]"
          />

          {/* Navigation Arrows for Multi-image */}
          {total > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrev();
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#080D0E]/80 border border-[#1B2727] text-white hover:text-[#12C887] hover:border-[#12C887]/60 hover:bg-[#101718] transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#080D0E]/80 border border-[#1B2727] text-white hover:text-[#12C887] hover:border-[#12C887]/60 hover:bg-[#101718] transition-all opacity-80 sm:opacity-0 sm:group-hover:opacity-100 shadow-lg backdrop-blur-sm"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Title / Caption Overlay */}
          {(currentImage.caption || currentImage.title) && (
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#080D0E] via-[#080D0E]/80 to-transparent flex flex-col sm:flex-row sm:items-center justify-between gap-2 pointer-events-none">
              <div>
                <p className="text-white text-sm font-medium">
                  {currentImage.title}
                </p>
                {currentImage.caption && (
                  <p className="text-[#8A999A] text-xs font-light">
                    {currentImage.caption}
                  </p>
                )}
              </div>
              <span className="font-mono-code text-[11px] text-[#12C887] bg-[#080D0E]/80 px-2 py-0.5 rounded border border-[#1B2727] self-start sm:self-auto">
                CLICK TO ZOOM
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Multi-Image Interactive Thumbnail Selector */}
      {total > 1 && (
        <div className="space-y-2">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
            {normalizedImages.map((img, idx) => {
              const isSelected = idx === currentIndex;
              return (
                <button
                  key={img.src + idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`group relative flex-shrink-0 w-28 sm:w-36 aspect-video rounded-md overflow-hidden border transition-all ${
                    isSelected
                      ? "border-[#12C887] ring-2 ring-[#12C887]/30 shadow-[0_0_15px_rgba(18,200,135,0.2)]"
                      : "border-[#1B2727] hover:border-[#12C887]/40 opacity-70 hover:opacity-100"
                  }`}
                  aria-label={`View image ${idx + 1}: ${img.title || title}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || `${title} thumbnail ${idx + 1}`}
                    fill
                    sizes="150px"
                    className="object-cover"
                  />
                  <div
                    className={`absolute inset-0 transition-colors ${
                      isSelected ? "bg-transparent" : "bg-[#080D0E]/40 group-hover:bg-transparent"
                    }`}
                  />
                  <span className="absolute bottom-1 right-1 font-mono-code text-[9px] px-1 rounded bg-[#080D0E]/90 text-[#12C887] border border-[#1B2727]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-between text-[11px] font-mono-code text-[#8A999A] px-1">
            <span>TIP: Use left/right keyboard arrows to navigate</span>
            <span className="text-[#12C887]">• Seamlessly extensible</span>
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] bg-[#080D0E]/95 backdrop-blur-xl flex flex-col p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Lightbox Header */}
          <div
            className="flex items-center justify-between pb-4 border-b border-[#1B2727] text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold">
                {currentImage.title || title}
              </h3>
              <p className="font-mono-code text-xs text-[#8A999A]">
                Image {currentIndex + 1} of {total}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 rounded bg-[#101718] border border-[#1B2727] text-[#DFE3E4] hover:text-white hover:border-[#12C887] transition-colors"
                aria-label="Close fullscreen view"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Container */}
          <div
            className="flex-1 relative flex items-center justify-center p-2 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-6xl max-h-[80vh]">
              <Image
                src={currentImage.src}
                alt={currentImage.alt || title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {total > 1 && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#101718]/90 border border-[#1B2727] text-white hover:text-[#12C887] hover:border-[#12C887] transition-all shadow-xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#101718]/90 border border-[#1B2727] text-white hover:text-[#12C887] hover:border-[#12C887] transition-all shadow-xl"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
