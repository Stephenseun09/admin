import { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {
  Badge,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { NotificationAdd, Search } from "@mui/icons-material";
import { useContext } from "react";
import { NavCtx } from "../../../store/context/nav-ctx";
import classes from "./right.module.scss";

////////

const HeaderRight = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navCtx = useContext(NavCtx);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className={classes.container}>
        {/* <FormControl
          sx={{ m: 1, width: "25ch" }}
          variant="outlined"
          className={classes.form}
        >
          <InputLabel htmlFor="outlined-adornment-search">
            Search for products...
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-search"
            className={classes.search}
            type="text"
            // onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="search for products"
                  //   onClick={handleClickShowPassword}
                  //   onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  <Search />
                </IconButton>
              </InputAdornment>
            }
            label="Search"
          />
        </FormControl> */}

        <Tooltip title="Search">
          <IconButton aria-label="Search" className={classes.search__mobile}>
            <Search sx={{ color: "var(--main)" }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Notifications">
          <IconButton
            aria-label="notifications"
            className={classes.notifications}
          >
            <Badge badgeContent={4} color="error" sx={{ color: "var(--main)" }}>
              <NotificationsIcon sx={{ color: "var(--main)" }} />
            </Badge>
          </IconButton>
        </Tooltip>

        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar src="/Steve.jpeg" className={classes.avatar} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Menu" className={classes.menu}>
          <IconButton aria-label="Menu" onClick={navCtx.onOpen}>
            <MoreVertIcon sx={{ color: "var(--main)" }} />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.2))",
            mt: 1.5,
            color: "var(--main)",
            bgColor: "var(--light)",

            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
              bgcolor: "white",
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "var(--light)",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem>
          <Avatar src="/Steve.jpeg" /> My account
        </MenuItem>
        <MenuItem>
          <Avatar sx={{ color: "var(--main)" }} /> Manage Accounts
        </MenuItem>
        <Divider />
        <MenuItem>
          <ListItemIcon>
            <PersonAdd fontSize="small" sx={{ color: "var(--main)" }} />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Settings sx={{ color: "var(--main)" }} fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem>
          <ListItemIcon>
            <Logout sx={{ color: "var(--main)" }} fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default HeaderRight;
