import MovieInformation from "@/features/MovieInformation/MovieInformation";
import { redirect } from "next/navigation";
interface SearchParams {
  id?: number;
}
const Movie = ({
  searchParams,
}: {
  searchParams: SearchParams;
}): JSX.Element => {
  const id = searchParams?.id;
  if (!id) {
    redirect("/home");
  }
  return <MovieInformation id={id} />;
};

export default Movie;
