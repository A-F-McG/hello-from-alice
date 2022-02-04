export function MyContributionsModal() {
  return (
    <>
      <span className="title">What kind of developer am I?</span>
      <div className="content">
        <span className="description">
          <strong>I like to work with empathy and share knowledge.</strong> I
          don't think anyone is too senior or too junior to learn from each
          other. I'm always happy to take the time to have a conversation with a
          colleague if they're curious about something, and likewise I'm open to
          asking and listening to others on topics they're more knowledgeable
          on.
        </span>
        <span className="description">
          <strong>
            I work with similar tools to you currently and am always interested
            in expanding my skillset.{" "}
          </strong>
          In my current role, I also work with TypeScript and React for our
          front end, and then we use C# and .Net for our back end, along with
          SQL databases in multiple environments. I'd hope I'd be able to
          transfer my knowledge of back end plus my knowledge of TypeScript to
          pick up your backend pretty quickly.
        </span>
        <span className="description">
          <strong>I love clean code.</strong> If someone's written a piece of
          code that does something absolutely magical, but no other developer
          can understand a line of it, then it's pretty useless unless it's
          something obscure that won't ever need to be touched again. I hope to
          contribute simple, yet effective, reusable code to your codebase.
        </span>
        <span className="description">
          <strong>I love tests.</strong> I'm a big proponent of writing unit and
          integration tests. Not only do they catch bugs before deployment, but
          they also give a huge amount of confidence when refactoring, which
          means a team is more likely to clean up existing code when they spot
          areas could be improved.
        </span>
      </div>
    </>
  );
}
