"use client";
import "./HorizontalRecommList.css";
import MovieCardSkeleton from "@/features/shared/MovieCardSkeleton/MovieCardSkeleton";
import MovieCard from "@/features/shared/MovieCard/MovieCard";
import { Recommendations } from "@/core/interfaces/recommendations.interface";
import useDragscroll from "@/core/hooks/useDragscroll";
import { useEffect, useState } from "react";

interface Props {
  movie: Recommendations[];
}

const HorizontalRecommList: React.FC<Props> = ({ movie }) => {
  const { scrollRef, drag } = useDragscroll();
  const [scrollRefState, setScrollRefState] = useState<boolean>(false);

  useEffect(() => {
    scrollRef.current ? setScrollRefState(true) : setScrollRefState(false);
  }, [scrollRef.current]);

  return (
    <div className="HorizontalRecommList" ref={scrollRef}>
      {scrollRefState ? (
        <>
          <div style={{ display: "none" }} />
          {movie ? (
            movie.map((movie) => {
              return <MovieCard key={movie.id} movie={movie} drag={drag} />;
            })
          ) : (
            <>
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
              <MovieCardSkeleton />
            </>
          )}
        </>
      ) : null}
    </div>
  );
};

export default HorizontalRecommList;
