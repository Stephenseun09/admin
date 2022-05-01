import { useState } from "react";
import { useContext } from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { itemsList } from "../../data/navdata";
import { NavCtx } from "../../store/context/nav-ctx";

import classes from "./index.module.scss";

const Aside = () => {
  const [active, setActive] = useState(0);
  const navCtx = useContext(NavCtx);
  const router = useRouter();
  const navLinks = itemsList(router);
  return (
    <div className={classes.container}>
      <List className={classes.ul}>
        {navLinks.map((item, index) => {
          const { text, icon, onClick, path } = item;
          return (
            <Tooltip title={text} key={text}>
              <ListItem
                button
                onClick={onClick}
                className={`${classes.li} ${
                  router.asPath !== path ? classes.active : ""
                }`}
              >
                {icon && (
                  <ListItemIcon className={classes.icon}>{icon}</ListItemIcon>
                )}
                <ListItemText primary={text} className={classes.link} />
              </ListItem>
            </Tooltip>
          );
        })}
      </List>
    </div>
  );
};

export default Aside;
