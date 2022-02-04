import { render, screen } from "@testing-library/react";
import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppContext } from "../../appContext";
import { LandingPage } from "./landingPage.component";

describe("Landing page", () => {
  beforeEach(() => {
    render(
      <AppContext.Provider value={{ isDesktop: true }}>
        <ParallaxProvider>
          <LandingPage />
        </ParallaxProvider>
      </AppContext.Provider>
    );
  });

  it("should display down arrow when at the top of the page", () => {
    expect(screen.queryByTestId("downArrow")).toBeTruthy();
  });

  it("should display all 5 sections", () => {
    expect(screen.getAllByTestId("landingPageSection").length).toBe(5);
  });
});
