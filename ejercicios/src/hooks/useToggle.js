import { useState } from "react";

// export const useModal = ({initialState=false}) => {
export const useToggle = () => {
  // const [isOpen, setIsOpen] = useState(initialState)
  // const [isOpen, setIsOpen] = useState(initialState||false)

  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return {
    isOpen,
    open,
    close,
    toggle,
  };
};