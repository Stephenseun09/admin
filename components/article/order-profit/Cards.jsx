import Icon from "../../../ui/icon";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SavingsIcon from "@mui/icons-material/Savings";

import classes from "./Card.module.scss";

const Card = ({ icon }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.orders}>
        <div className={classes.left}>
          <Icon className={classes.icon}>
            <LibraryBooksIcon sx={{ color: "var(--main)" }} />
          </Icon>
        </div>

        <div className={classes.right}>
          <div className={classes.right__top}>
            <h2>23,768</h2>
            <span>+20</span>
          </div>
          <div>Orders</div>
        </div>
      </div>
      <div className={classes.profit}>
        <div className={classes.left}>
          <Icon className={classes.icon}>
            <SavingsIcon sx={{ color: "var(--main)" }} />
          </Icon>
        </div>

        <div className={classes.right}>
          <div className={classes.right__top}>
            <h2>23,768</h2>
            <span>+$20 000</span>
          </div>
          <div>Profits</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
