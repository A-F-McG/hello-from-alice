import React from "react";
import { render, screen } from "@testing-library/react";
import { AppContext } from "./appContext";
import App from "./App";

describe("Landing page section", () => {
  it("should use parallax on a desktop", () => {
    render(
      <AppContext.Provider value={{ isDesktop: true }}>
        <App />
      </AppContext.Provider>
    );

    expect(screen.queryByTestId("parallaxApp")).toBeTruthy();
  });

  it("should not use parallax on a mobile", () => {
    render(
      <AppContext.Provider value={{ isDesktop: false }}>
        <App />
      </AppContext.Provider>
    );

    expect(screen.queryByTestId("parallaxApp")).toBeFalsy();
  });
});
