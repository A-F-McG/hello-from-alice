import { useEffect, useState } from "react";
import reactDog from "../../media/reactDog.svg";
import downArrow from "../../media/downArrow.svg";
import { LandingPageSection } from "./components/landingPageSection/landingPageSection.component";
import React from "react";
import resume from "../../media/resume.pdf";
import { Modal } from "../../components/modal/modal.component";
import { ThingsICareAboutModalContent } from "./components/modalsContent/otherSkills";
import { MyContributionsModal } from "./components/modalsContent/devSkills";
import ReactGA from "react-ga";

export function LandingPage() {
  ReactGA.pageview("/landingPage");

  const [scrollY, setScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);

  useEffect(() => {
    const onScroll = (event: any) => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={getBackgroundClass(scrollY)}>
      <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
        {modalContent}
      </Modal>

      {isNearTopOfPage() && (
        <img src={downArrow} className="down-arrow" data-testid="downArrow" />
      )}

      <div className={`contact-details ${getBackgroundClass(scrollY)}`}>
        Alexia McGregor |&nbsp;
        <a href="mailto:alexiafmcgregor@gmail.com">alexiafmcgregor@gmail.com</a>
      </div>

      <LandingPageSection
        parallexOffsetY={[300, -200]}
        parallexOffsetX={[0, 0]}
        title="Hi, I'm Alice."
        description="I've read up on your company and love the sound of what you do, so I'd like to introduce myself."
        button={{
          text: "Here's my CV",
          onClick: () => {
            window.open(resume, "_blank");
          },
          hasExternalLink: true,
        }}
      />

      <LandingPageSection
        parallexOffsetY={[0, -300]}
        parallexOffsetX={[0, -200]}
        title="I heard you're looking for a full stack developer."
        description="Hey, I'm one of those!"
        button={{
          text: "What kind of developer am I?",
          onClick: () => {
            setModalContent(<MyContributionsModal />);
            setIsModalOpen(true);
          },
        }}
      />

      <LandingPageSection
        parallexOffsetY={[0, -300]}
        parallexOffsetX={[0, 200]}
        title="Your company is a startup (woop!)"
        description="Here are some other skills I think would help me contribute to a startup"
        button={{
          text: "Said other skills",
          onClick: () => {
            setModalContent(<ThingsICareAboutModalContent />);
            setIsModalOpen(true);
          },
        }}
      />

      <LandingPageSection
        parallexOffsetY={[0, -200]}
        parallexOffsetX={[0, 0]}
        title="Oh, you use React?"
        description="Me too! Whipping up a React site to say hello seemed poodles more fun than a cover letter"
        button={{
          text: "Want to see the source code?",
          onClick: () =>
            window.open(
              "https://github.com/A-F-McG/hello-from-lexi/tree/master",
              "_blank"
            ),
          hasExternalLink: true,
        }}
      />

      <LandingPageSection
        parallexOffsetY={[-200, 100]}
        parallexOffsetX={[0, 0]}
        title="Well, that's me!"
        description="I would love to hear some more about you - feel free to contact me at my email alexiafmcgregor@gmail.com"
      />
    </div>
  );

  function isNearTopOfPage() {
    return scrollY < window.innerHeight / 6;
  }

  function getBackgroundClass(scrollY: number) {
    const initalChangeOffset = window.innerHeight / 2;
    const brandIndex = Math.floor(
      ((scrollY + initalChangeOffset) / window.innerHeight) % 4
    );

    if (brandIndex === 0) {
      return "brand-colour-1-background";
    }
    if (brandIndex === 1) {
      return "brand-colour-2-background";
    }
    if (brandIndex === 2) {
      return "brand-colour-4-background";
    }
    if (brandIndex === 3) {
      return "brand-colour-3-background";
    }
  }
}
