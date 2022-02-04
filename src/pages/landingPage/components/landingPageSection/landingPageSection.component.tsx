import { Parallax } from "react-scroll-parallax";
import {
  Button,
  ButtonProps,
} from "../../../../components/button/button.component";
import reactDog from "../../../../media/reactDog.svg";
import React, { useContext } from "react";
import { AppContext } from "../../../../appContext";

interface LandingPageSectionProps {
  parallexOffsetY: [number, number];
  parallexOffsetX: [number, number];
  title: string;
  description: string;
  button?: ButtonProps;
}

export function LandingPageSection(props: LandingPageSectionProps) {
  const context = useContext(AppContext);
  return (
    <div className="section title-font" data-testid="landingPageSection">
      <div className="section-content">
        {context.isDesktop ? (
          <Parallax y={props.parallexOffsetY} x={props.parallexOffsetX}>
            <img src={reactDog} data-testid="parallaxImage" />
          </Parallax>
        ) : (
          <img src={reactDog} />
        )}

        <div className="title" data-testid="title">
          {props.title}
        </div>

        <div className="description" data-testid="description">
          {props.description}
        </div>

        {props.button && <Button {...props.button} data-testid="button" />}
      </div>
    </div>
  );
}
