import React from "react";
import { render, screen } from "@testing-library/react";
import { LandingPageSection } from "./landingPageSection.component";
import { AppContext } from "../../../../appContext";
import { ParallaxProvider } from "react-scroll-parallax";

describe("Landing page section", () => {
  describe("When using a desktop and there's a button", () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={{ isDesktop: true }}>
          <ParallaxProvider>
            <LandingPageSection
              parallexOffsetX={[-100, 100]}
              parallexOffsetY={[-200, 200]}
              title="title"
              description="description"
              button={{ text: "Button", onClick: () => {} }}
            />
          </ParallaxProvider>
        </AppContext.Provider>
      );
    });

    it("should use parallax on image", () => {
      expect(screen.queryByTestId("parallaxImage")).toBeTruthy();
    });

    it("should display correct title", () => {
      expect(screen.getByTestId("title").textContent).toBe("title");
    });

    it("should display correct description", () => {
      expect(screen.getByTestId("description").textContent).toBe("description");
    });

    it("should show button", () => {
      expect(screen.queryByTestId("button")).toBeTruthy();
    });
  });

  describe("When not using a desktop and no button", () => {
    it("should not use parallax on image", () => {
      render(
        <AppContext.Provider value={{ isDesktop: false }}>
          <LandingPageSection
            parallexOffsetX={[-100, 100]}
            parallexOffsetY={[-200, 200]}
            title="title"
            description="description"
          />
        </AppContext.Provider>
      );

      expect(screen.queryByTestId("parallaxImage")).toBeFalsy();
    });

    it("should show button", () => {
      expect(screen.queryByTestId("button")).toBeFalsy();
    });
  });
});
