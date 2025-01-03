import { DetailMovie } from "./detailmovie.interface";
import { Recommendations } from "./recommendations.interface";
import { Cast } from "./actors.interface";
import { VideoInfo } from "./video.interface";

export interface InfoMovie {
  detailMovie: DetailMovie;
  videoInfo: VideoInfo[];
  actors: Cast[];
  recommendations: Recommendations[];
}
