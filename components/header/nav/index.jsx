import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import { useContext } from "react";
import { NavCtx } from "../../../store/context/nav-ctx";

import Logo from "../logo";
import { itemsList } from "../../../data/navdata";

import classes from "./index.module.scss";

const Navbar = () => {
  const navCtx = useContext(NavCtx);
  const router = useRouter();
  const navLinks = itemsList(router);

  return (
    <Drawer
      open={navCtx.open}
      onClose={navCtx.onClose}
      className={classes.drawer}
      sx={{
        // width: "60%",
        flexGrow: 1,
        "& .MuiDrawer-paper": {
          display: "flex",
          width: "60%",
          height: "100vh",
          boxSizing: "border-box",
          bgcolor: "var(--light)",
        },
      }}
    >
      <div className={classes.logo}>
        <Logo />
      </div>
      <List className={classes.ul}>
        {navLinks.map((item) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem
              button
              key={text}
              onClick={onClick}
              className={classes.li}
            >
              {icon && (
                <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
              )}
              <ListItemText primary={text} className={classes.link} />
            </ListItem>
          );
        })}
      </List>
    </Drawer>
  );
};

export default Navbar;
