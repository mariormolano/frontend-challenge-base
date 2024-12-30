import { DetailMovie } from "./movie.interface";
import { Recommendations } from "./recommendations.interface";
import { SimilarMovie } from "./similar.interface";
import { VideoInfo } from "./video.interface";

export interface InfoMovie {
  detailMovie: DetailMovie;
  videoInfo: VideoInfo[];
  similarMovies: SimilarMovie[];
  recommendations: Recommendations[];
}
