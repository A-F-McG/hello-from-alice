import "./App.scss";
import { LandingPage } from "./pages/landingPage/landingPage.component";
import { ParallaxProvider } from "react-scroll-parallax";
import React, { useContext } from "react";
import { AppContext } from "./appContext";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("UA-125305767-2", {
    gaOptions: { siteSpeedSampleRate: 100 },
    testMode: true,
  });
  const appContext = useContext(AppContext);

  if (appContext.isDesktop) {
    return (
      <ParallaxProvider>
        <div className="app" data-testid="parallaxApp">
          <LandingPage />
        </div>
      </ParallaxProvider>
    );
  }

  return (
    <div className="app">
      <LandingPage />
    </div>
  );
}

export default App;
