import Main from "@/features/Main/Main";
import { redirect } from "next/navigation";
import { Query } from "@/core/interfaces/query.interface";

interface SearchParams {
  moviename?: string;
  genres?: string;
  page?: string;
}

const Page = ({
  searchParams,
}: {
  searchParams: SearchParams;
}): JSX.Element => {
  const moviename = searchParams?.moviename ?? "";
  const genres = searchParams?.genres ?? "";
  const page = searchParams?.page ?? "";

  if (!moviename) {
    redirect("/home");
  }

  const query: Query = { moviename, genres, page };

  return <Main query={query} />;
};

export default Page;
