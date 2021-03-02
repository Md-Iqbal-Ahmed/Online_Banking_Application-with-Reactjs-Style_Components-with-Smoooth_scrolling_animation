import React, { useState } from "react";
import {
  HeroContainer,
  Herobg,
  Videobg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForword,
  ArrowRigt,
} from "./HeroElements";
import { Button } from "../ButtonElements";
import Video from "../../videos/video.mp4";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <Herobg>
        <Videobg autoPlay loop muted src={Video} type="video/mp4" />
      </Herobg>
      <HeroContent>
        <HeroH1>No Money, No Worries!!</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            dark={true}
            primary={true}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get Started {hover ? <ArrowForword /> : <ArrowRigt />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
