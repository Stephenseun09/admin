import {
  Avatar,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import classes from "./index.module.scss";

const TSP = ({ products }) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h3>Top selling products</h3>
        <Link href="#" underline="hover" className={classes.link}>
          see all <ChevronRightIcon />
        </Link>
      </div>
      <div className={classes.products__container}>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          {products.map((item, index) => (
            <ListItem key={item.name}>
              <Typography component="span" mr={3}>
                {++index}
              </Typography>
              <ListItemAvatar sx={{ mr: 2 }}>
                <Avatar
                  src={item.src}
                  sx={{ width: 56, height: 56, borderRadius: "10px 3px" }}
                />
              </ListItemAvatar>
              <ListItemText
                primary={item.name}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body1"
                      color="var(--main)"
                      fontWeight="bold"
                      fontSize="1.2rem"
                    >
                      {item.price}
                    </Typography>
                  </>
                }
              />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default TSP;
