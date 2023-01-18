import React from "react";
import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import ParallaxHome1 from "./ParallaxHome1";
import ParallaxHome2 from "./ParallaxHome2";

function Home() {
  const FirstHomeLayer = {
    translateY: [0, 0],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    opacity: [1, 0, "easeOutCubic"],
    scale: [1.05, 1, 'easeOutCubic'],
    children: (
      <ParallaxHome1 />
    )
  }

  const SecondHomeLayer = {
    translateY: [50, 30],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    opacity: [0, 1, "easeOutCubic"],
    children: (
      <ParallaxHome2 />
    )
  };

  return (
      <ParallaxProvider>
        <ParallaxBanner
          layers={[FirstHomeLayer, SecondHomeLayer]}
          style={{ height: "150vh" }}
        />
      </ParallaxProvider>
  );
}

export default Home;