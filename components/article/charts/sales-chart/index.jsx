import Chart from "./Chart";
import CustomizedMenus from "./Menu";
import classes from "./index.module.scss";

const SalesChart = () => {
  return (
    <div className={classes.container}>
      <div className={classes.chart__heading}>
        <h3>Sales statistics</h3>
        <CustomizedMenus />
      </div>
      <div className={classes.chart__container}>
        <Chart />
      </div>
    </div>
  );
};

export default SalesChart;
