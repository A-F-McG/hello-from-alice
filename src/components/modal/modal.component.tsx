import React, { useEffect, useRef, useState } from "react";
import { JsxAttributeLike } from "typescript";
import { Button } from "../button/button.component";

export interface ModalProps {
  isOpen: boolean;
  close: () => void;
  /** This shouldn't be passed in as a prop */
  children?: JSX.Element;
}

export function Modal(props: ModalProps) {
  const ref: { current: HTMLDivElement | null } = useRef(null);

  const [isContentOverflowing, setIsContentOverflowing] = useState(false);
  const [isAtBottomOfContent, setIsAsBottomOfContent] = useState(false);

  useEffect(() => {
    setIsContentOverflowing(false);
    setTimeout(() => {
      if (ref.current != undefined) {
        setIsContentOverflowing(
          ref.current.scrollHeight > ref.current.clientHeight
        );
      }
    }, 1000);
  }, [props.children]);

  return (
    <div
      className={`modal ${props.isOpen ? "open" : "closed"}`}
      data-testid="modal"
    >
      <div onScroll={handleScroll} className="modal-content" ref={ref}>
        {props.children}
        {isContentOverflowing && !isAtBottomOfContent && (
          <div className="scroll-for-more">
            <div className="scroll-for-more-text">...scroll for more</div>
          </div>
        )}
      </div>

      <Button text="Close" onClick={props.close} />
    </div>
  );

  function handleScroll(e: any) {
    setIsAsBottomOfContent(
      e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight
    );
  }
}
