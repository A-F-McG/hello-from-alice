import React from "react";
import externalLinkIcon from "./../../media/externalLinkIcon.svg";

export interface ButtonProps {
  onClick: () => void;
  text: string;
  hasExternalLink?: boolean;
}

export function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      className={`button ${props.hasExternalLink && "has-external-link"}`}
      data-testid="button"
    >
      {props.text}
      {props.hasExternalLink && (
        <img
          src={externalLinkIcon}
          className="external-link-icon"
          data-testid="external-link-icon"
        />
      )}
    </button>
  );
}
