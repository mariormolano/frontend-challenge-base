"use client";
import "./FullActorList.css";
import ActorCard from "../ActorCard/ActorCard";
import { useEffect, useState } from "react";
import MovieCardSkeleton from "@/features/Main/MovieList/MovieCardSkeleton/MovieCardSkeleton";
import { Cast } from "@/core/interfaces/actors.interface";

interface Props {
  actors: Cast[];
}

const FullActorList: React.FC<Props> = ({ actors }) => {
  const [actorList, setActorList] = useState<Cast[] | null>(null);
  useEffect(() => {
    setActorList(actors);
  }, []);

  return (
    <article className="FullActorList">
      {actorList ? (
        actorList.map((actor) => {
          return <ActorCard key={actor.id} actor={actor} />;
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
    </article>
  );
};

export default FullActorList;
