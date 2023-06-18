import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-scroll";

export default function LottieAnimation({ lotti, width, height }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
        <Lottie
          className="lottie_animation"
          options={defaultOptions}
          height={height}
          width={width}
          style={{
            position: `absolute`,
            height: 250,
            width: 40,
            right: 40,
            top: 450,
          }}
        />
      </Link>
    </div>
  );
}
