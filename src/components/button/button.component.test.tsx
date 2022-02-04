import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./button.component";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  const onClickMock = jest.fn();
  let button: HTMLElement;

  describe("If the button links externally", () => {
    beforeEach(() => {
      render(
        <Button text="Click me" onClick={onClickMock} hasExternalLink={true} />
      );
      button = screen.getByTestId("button");
    });

    it("should display correct text", () => {
      expect(button.textContent).toBe("Click me");
    });

    it("should call function when clicked", () => {
      userEvent.click(button);
      expect(onClickMock).toBeCalledTimes(1);
    });

    it("should show external link icon", () => {
      expect(screen.queryByTestId("external-link-icon")).toBeTruthy();
    });
  });

  describe("If the button doesn't link externally", () => {
    it("should not show the link icon", () => {
      render(<Button text="Click me" onClick={onClickMock} />);
      expect(screen.queryByTestId("external-link-icon")).toBeFalsy();
    });
  });
});
