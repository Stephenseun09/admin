import Box from "@mui/material/Box";
import SalesChart from "./charts/sales-chart";
import VisitorsChart from "./charts/visitors-chart";
import Cards from "./order-profit/Cards";
import TransactionList from "./table/Table";
import TSP from "./top-selling-products";

import classes from "./index.module.scss";

const Article = ({ products }) => {
  return (
    <div className={classes.container}>
      <div className={classes.container__main}>
        <h1>
          Welcome, <span>Stephen</span>
        </h1>
        <Box mb="3rem">
          <Cards />
        </Box>
        <Box mb="3rem">
          <SalesChart />
        </Box>
        <Box mb="3rem">
          <TransactionList />
        </Box>
      </div>
      <div className={classes.container__aside}>
        <Box mb="3rem" className={classes.container__tsp}>
          <TSP products={products} />
        </Box>
        <Box mb="3rem" className={classes.container__chart}>
          <VisitorsChart />
        </Box>
      </div>
    </div>
  );
};

export default Article;
