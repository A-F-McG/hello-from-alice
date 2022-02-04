import React from "react";

export function ThingsICareAboutModalContent() {
  return (
    <>
      <span className="title">Other not-strictly-dev skills</span>
      <div className="content">
        <span className="description">
          <strong>I've developed a decent eye for design.</strong> While my
          current company is large enough for people to have defined roles, I do
          work very closely with our designers. From these talented people, I've
          picked up several useful skills and tidbits of knowledge.
        </span>
        <span className="description">
          <strong>I've picked up a sense of what QA look for.</strong> I also
          work very closely with our QA tester, and have participated in many a
          3 amigos session. My daily conversations often involve flagging issues
          when planning features or browsing our product.
        </span>
        <span className="description">
          <strong>I love logic.</strong> I've always enjoyed learning,
          especially topics rooted in logic such as maths and machine learning.
          Sometimes in my spare time, I like to ponder how my tech skills could
          do some good in the world - like{" "}
          <a
            href="https://amcgregorprogrammer.wixsite.com/website/shelterdogs"
            target="_blank"
          >
            here
          </a>{" "}
          where I did some data analysis into which dogs were more likely to be
          adopted from a shelter. (Apologies, that's a site from a little while
          ago and it's not compatible with mobile.) I imagined this data might
          help predict how much time and how many resources need to be deployed
          to get those dogs a home, depending on whether a dog was likely to be
          adopted or not.
        </span>
      </div>
    </>
  );
}
