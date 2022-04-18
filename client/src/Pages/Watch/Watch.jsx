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
        src="https://vod-progressive.akamaized.net/exp=1650311490~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F543%2F22%2F552718079%2F2614711873.mp4~hmac=b74fbc874f31b5ed236ca6137cbfeefd97f93e5a89e822df21b3f1363df8b0dd/vimeo-prod-skyfire-std-us/01/543/22/552718079/2614711873.mp4?download=1&filename=pexels-taryn-elliott-7964548.mp4"
        autoPlay
        progress
        controls
      />
    </div>
  );
};

export default Watch;
