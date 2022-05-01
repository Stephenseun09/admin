import React, { createContext, useEffect, useState } from "react";

export const NavCtx = createContext({
  open: false,
  setOpen: () => {},
  onClose: () => {},
  onOpen: () => {},
});

const NavCtxProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };

  const navCtxValue = {
    open: open,
    setOpen,
    onOpen,
    onClose,
  };
  return <NavCtx.Provider value={navCtxValue}>{children}</NavCtx.Provider>;
};
export default NavCtxProvider;
