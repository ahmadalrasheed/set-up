import React from "react";
import { useLayer, useHover, Arrow } from "react-laag";
import { AnimatePresence } from "framer-motion";
import { MotionDiv } from "./Theme";
interface ToolTipInfo {
  text: string;
  children: any;
  className?: any;
}
export const ToolTip = ({ children, text, className }: ToolTipInfo) => {
  // We use `useHover()` to determine whether we should show the tooltip.
  // Notice how we're configuring a small delay on enter / leave.
  const [isOver, hoverProps] = useHover({ delayEnter: 100, delayLeave: 300 });

  // Tell `useLayer()` how we would like to position our tooltip
  const { triggerProps, layerProps, arrowProps, renderLayer } = useLayer({
    isOpen: isOver,
    placement: "top-center",
    possiblePlacements: ["top-center", "bottom-center"],
    triggerOffset: 8, // small gap between wrapped content and the tooltip
  });

  const isReactText = (children: any) => {
    return ["string", "number"].includes(typeof children);
  };

  // when children equals text (string | number), we need to wrap it in an
  // extra span-element in order to attach props
  let trigger;
  if (isReactText(children)) {
    trigger = (
      <span {...triggerProps} {...hoverProps}>
        {children}
      </span>
    );
  } else {
    // In case of an react-element, we need to clone it in order to attach our own props
    trigger = React.cloneElement(children, {
      ...triggerProps,
      ...hoverProps,
    });
  }

  // We're using framer-motion for our enter / exit animations.
  // This is why we need to wrap our actual tooltip inside `<AnimatePresence />`.
  // The only thing left is to describe which styles we would like to animate.
  return (
    <div className={className}>
      {trigger}
      {renderLayer(
        <AnimatePresence>
          {isOver && (
            <MotionDiv
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.1 }}
              {...layerProps}
            >
              {text}
              <Arrow
                {...arrowProps}
                backgroundColor={"white"}
                borderColor={"black"}
                borderWidth={1}
                size={6}
              />
            </MotionDiv>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default ToolTip;
