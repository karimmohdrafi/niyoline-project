import React from "react";
import "./SocialSection.css";

const SocialSection = () => {
  return (
    <div className="social-section">
      {/* Left Side - YouTube */}
      <div className="social-left">
        {/* Main Video */}
        <iframe
          width="100%"
          height="150"
          src="https://www.youtube.com/embed/YOUTUBE_MAIN_ID"
          title="Main YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{borderRadius:'10px'}}
        ></iframe>

        {/* Grid of 9 Videos (3x3) */}
        <div className="yt-grid">
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_1" title="YouTube video 1" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_2" title="YouTube video 2" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_3" title="YouTube video 3" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_4" title="YouTube video 4" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_5" title="YouTube video 5" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_6" title="YouTube video 6" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_7" title="YouTube video 7" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_8" title="YouTube video 8" frameBorder="0" allowFullScreen></iframe>
          <iframe src="https://www.youtube.com/embed/YT_VIDEO_9" title="YouTube video 9" frameBorder="0" allowFullScreen></iframe>
        </div>

        {/* Buttons */}
        <div className="yt-buttons">
          <button className="load-more">Load More...</button>
          <button
            className="subscribe"
            onClick={() => window.open("https://www.youtube.com/channel/YOUR_CHANNEL_ID", "_blank")}
          >
            <i className="fab fa-youtube"></i> Subscribe
          </button>
        </div>
      </div>

      {/* Right Side - Facebook Page Embed */}
      <div className="social-right">
        <iframe
          src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmasterlineengineoils&tabs=timeline&width=400&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
          width="400"
          height="500"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SocialSection;
