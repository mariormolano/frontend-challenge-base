import "./VideoPlayer.css";

interface Props {
  setVideo: React.Dispatch<React.SetStateAction<boolean>>;
  videoKey: string;
}

const VideoPlayer: React.FC<Props> = ({ setVideo, videoKey }) => {
  return (
    <main
      className="VideoContainer"
      onClick={() => setVideo(false)}
      role="presentation"
    >
      <div className="VideoPlayer">
        <iframe
          width="853"
          height="480"
          src={`https://www.youtube.com/embed/${videoKey}`}
          title="YouTube video player"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
};

export default VideoPlayer;
