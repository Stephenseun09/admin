import { Box, Typography } from "@mui/material";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import classes from "./logo.module.scss";
const Logo = () => {
  return (
    <Box display="flex" className={classes.logo}>
      <LocalLaundryServiceIcon className={classes.icon} />
      <Typography component="h1" className={classes.text}>
        ForShop
      </Typography>
    </Box>
  );
};

export default Logo;
