"use client";
import "./HorizontalRecommListSkeleton.css";
import MovieCardSkeleton from "@/features/shared/MovieCardSkeleton/MovieCardSkeleton";
import { useEffect, useRef, useState } from "react";

const HorizontalRecommListSkeleton: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent): void => {
    setIsDragging(true);
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: MouseEvent): void => {
    if (!isDragging) return;
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.style.cursor = "grabbing";
      const x = e.pageX - scrollRef.current.offsetLeft;
      const slide = x - startX;
      scrollRef.current.scrollLeft = scrollLeft - slide;
    }
  };

  const handleMouseUpOrLeave = (): void => {
    if (!scrollRef.current) return;
    setIsDragging(false);
    scrollRef.current.style.cursor = "default";
  };

  useEffect(() => {
    return () => {
      if (scrollRef.current) {
        scrollRef.current.addEventListener("mousedown", handleMouseDown);
        scrollRef.current.addEventListener("mousemove", handleMouseMove);
        scrollRef.current.addEventListener("mouseup", handleMouseUpOrLeave);
        scrollRef.current.addEventListener("mouseleave", handleMouseUpOrLeave);
        scrollRef.current.role = "presentation";
      }
    };
  }, []);

  return (
    <article className="HorizontalRecommListSkeleton" ref={scrollRef}>
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
      <MovieCardSkeleton />
    </article>
  );
};

export default HorizontalRecommListSkeleton;
