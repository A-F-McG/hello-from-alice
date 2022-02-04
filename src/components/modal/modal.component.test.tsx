import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Modal } from "./modal.component";

describe("Modal", () => {
  const closeMock = jest.fn();

  describe("When modal is open", () => {
    beforeEach(() => {
      render(
        <Modal close={closeMock} isOpen={true}>
          <>Child</>
        </Modal>
      );
    });

    it("should have class open", () => {
      expect(screen.getByTestId("modal").classList).toContain("open");
    });

    it("should run close function when close button is pressed", () => {
      const closeButton = screen.getByText("Close");
      userEvent.click(closeButton);
      expect(closeMock).toBeCalledTimes(1);
    });

    it("should show children", () => {
      expect(screen.queryByText("Child")).toBeTruthy();
    });
  });

  describe("When modal is closed", () => {
    beforeEach(() => {
      render(<Modal close={closeMock} isOpen={false} />);
    });
    it("should have class open", () => {
      expect(screen.getByTestId("modal").classList).toContain("closed");
    });
  });
});
