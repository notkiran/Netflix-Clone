import "./watch.scss";
import { ArrowBackOutlined } from "@mui/icons-material";

const Watch = () => {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className="video"
        autoPlay
        muted
        progress
        controls
        src="https://kirang.me/assets/vid/netflx-vid.mp4"
      />
    </div>
  );
};

export default Watch;
