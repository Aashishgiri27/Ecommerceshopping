import React from "react";
// import banner.mp4
import bannerVideo from '../images/banner.mp4';

function Banner() {
  return (
    <div className=" bg-gray-600">
        <video
            src={bannerVideo}
            width='1640px'
            height='880px'
            autoPlay

            // controls  
            loop
            muted
        />
    </div>
  );
}

export default Banner;
