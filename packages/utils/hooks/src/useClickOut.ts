import { useRef } from "react";
import { useOnClickOutside } from "usehooks-ts";

export function useClickOut(closeFunction: Function) {
  const ref = useRef(null);
  const handleClickOutside = () => {
    closeFunction();
  };

  useOnClickOutside(ref, handleClickOutside);
  return {
    layer: ref,
  };
}
